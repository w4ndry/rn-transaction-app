import React, { FC, useState, useRef, useEffect } from 'react'

import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Label } from '../../components/texts'
import ItemDetail from './components/ItemDetail'
import { formatDate } from '../../utils/dateFormat'
import { Container } from '../../components/container'
import { WHITE_COLOR, GREY_COLOR, PRIMARY_COLOR } from '../../themes/colors'
import { toTitleCase, capitalize, currencyFormat } from '../../utils/stringManipulation'
import { View, StyleSheet, Pressable, Image, Animated, TouchableOpacity, Clipboard, ToastAndroid, ScrollView } from 'react-native'
import { PADDING, PADDING_TOP, BORDER_WIDTH_REGULAR, PADDING_RIGHT, FONT_WEIGHT_BOLD, FONT_SIZE_MEDIUM, MARGIN_BOTTOM, MARGIN_TOP } from '../../themes/themes'
import { ID_TRANSAKSI, DETAIL_TRANSAKSI, TUTUP, LIHAT, BERITA_TRANSFER, KODE_UNIK, WAKTU_DIBUAT, NOMINAL } from '../../constants/label'
import BankName from './components/BankName'
import { TransactionItem } from './types'

type RootStackParamList = {
    TransactionDetail: { item: TransactionItem }
}

type TransactionDetailScreenRouteProp = RouteProp<RootStackParamList, 'TransactionDetail'>

type TransactionDetailScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'TransactionDetail'
>

type Props = {
    route: TransactionDetailScreenRouteProp
    navigation: TransactionDetailScreenNavigationProp
}

const TransactionDetailScreen: FC<Props> = ({ route }: Props) => {
    const [item, setItem] = useState<TransactionItem>(Object)
    const [isShowDetail, setIsShowDetail] = useState(true)
    const animatedValue = useState(new Animated.Value(1))[0]

    useEffect(() => {
        const { item } = route.params
        setItem(item)
    }, [])

    const showDetail = () => {
        Animated.timing(
            animatedValue,
            {
                toValue: isShowDetail ? 0 : 1,
                duration: 200,
                useNativeDriver: true
            }
        ).start(() => {
            setIsShowDetail(!isShowDetail)
        })

    }

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0],
        extrapolate: 'clamp',
    })

    const showToast = () => {
        ToastAndroid.show('Id transaksi berhasil disalin', ToastAndroid.SHORT);
    }

    const copyToClipboard = (text: string) => {
        Clipboard.setString(item.id)
        showToast()
    }

    const renderDetail = () => {
        return (
            <Animated.View style={[
                styles.detailContainer, {
                    opacity: animatedValue,
                    transform: [{ translateY }]
                }]}
            >
                <BankName
                    senderBank={toTitleCase(item.sender_bank)}
                    beneficiaryBank={toTitleCase(item.beneficiary_bank)}
                />
                <ItemDetail
                    leftTitle={capitalize(item.beneficiary_name)}
                    rightTitle={NOMINAL}
                    leftValue={item.account_number}
                    rightValue={currencyFormat(item.amount)}
                />
                <ItemDetail
                    leftTitle={BERITA_TRANSFER}
                    rightTitle={KODE_UNIK}
                    leftValue={item.remark}
                    rightValue={item.unique_code.toString()}
                />
                <ItemDetail
                    leftTitle={WAKTU_DIBUAT}
                    leftValue={formatDate(item.created_at)}
                />
            </Animated.View>
        )
    }

    return (
        <Container style={styles.container}>
            <ScrollView>
                <View style={styles.titleBox}>
                    <Label style={styles.titleText}>{ID_TRANSAKSI}{item.id}</Label>
                    <TouchableOpacity onPress={() => copyToClipboard(item.id)}>
                        <Image source={require('../../assets/icons/outline_content_copy_black_48.png')} style={styles.iconCopy} />
                    </TouchableOpacity>
                </View>
                <Pressable style={styles.detailBox} onPress={() => showDetail()}>
                    <Label style={styles.titleText}>{DETAIL_TRANSAKSI}</Label>
                    <View>
                        <Label style={styles.closeText}>{isShowDetail ? TUTUP : LIHAT}</Label>
                    </View>
                </Pressable>
                {item.id && renderDetail()}
            </ScrollView>
        </Container>
    )
}

export default TransactionDetailScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: PADDING_TOP * 2,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: WHITE_COLOR,
        padding: PADDING * 2,
        borderBottomWidth: BORDER_WIDTH_REGULAR,
        borderColor: GREY_COLOR,
    },
    titleText: {
        fontWeight: FONT_WEIGHT_BOLD,
    },
    iconCopy: {
        width: 20,
        height: 20,
        marginLeft: 3,
        tintColor: PRIMARY_COLOR,
    },
    detailBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: WHITE_COLOR,
        padding: PADDING * 2,
        paddingRight: PADDING_RIGHT * 2
    },
    closeText: {
        color: PRIMARY_COLOR,
        fontSize: FONT_SIZE_MEDIUM,
    },
    detailContainer: {
        backgroundColor: WHITE_COLOR,
        padding: PADDING * 2,
        borderTopWidth: BORDER_WIDTH_REGULAR,
        borderColor: GREY_COLOR,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: MARGIN_TOP,
        marginBottom: MARGIN_BOTTOM,
    },
})