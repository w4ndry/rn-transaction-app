import React, { FC } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

import { Label } from '../../../components/texts'
import TransactionItemCard from './TransactionItemCard'
import { formatDate } from '../../../utils/dateFormat'
import { SECONDARY_COLOR } from '../../../themes/colors'
import { PENGECEKAN, BERHASIL, PENDING, SUCCESS } from '../../../constants/label'
import { SecondaryLabelStatus, PrimaryLabelStatus } from '../../../components/label-status'
import { toTitleCase, capitalize, currencyFormat } from '../../../utils/stringManipulation'
import { FONT_WEIGHT_BOLD, FONT_SIZE_MEDIUM, FONT_SIZE_SMALL, FONT_SIZE_LARGE } from '../../../themes/themes'

type Props = {
    senderBank: string,
    beneficiaryBank: string,
    beneficiaryName: string,
    amount: number,
    date: string,
    status: string,
    onPress: () => void,
}

const Item: FC<Props> = ({ senderBank, beneficiaryBank, beneficiaryName, amount, date, status, onPress }: Props) => {
    const renderLabelStatus = (status: string) => {
        if (status == PENDING) {
            return <SecondaryLabelStatus title={PENGECEKAN} />
        }
        return <PrimaryLabelStatus title={BERHASIL} />
    }

    const flagStyle = status == SUCCESS ? {backgroundColor: SECONDARY_COLOR} : {}
    
    return (
        <TransactionItemCard flagStyle={flagStyle} onPress={onPress}>
            <View style={styles.textWrapper}>
                <View style={styles.titleWrapper}>
                    <Label style={styles.bankText}>{toTitleCase(senderBank)}</Label>
                    <Image source={require('../../../assets/icons/outline_east_black_48.png')} style={styles.iconForward} />
                    <Label style={styles.bankText}>{toTitleCase(beneficiaryBank)}</Label>
                </View>
                <Label style={styles.subTitle}>{capitalize(beneficiaryName)}</Label>
                <Label style={styles.subTitle}>{currencyFormat(amount)} <Text style={styles.dotText}>.</Text> {formatDate(date)} </Label>
            </View>
            {renderLabelStatus(status)}
        </TransactionItemCard>
    )
}

export default Item

const styles = StyleSheet.create({
    textWrapper: {
        flex: 1,
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bankText: {
        fontWeight: FONT_WEIGHT_BOLD,
        fontSize: FONT_SIZE_MEDIUM,
    },
    iconForward: {
        width: 20,
        height: 20,
        marginLeft: 3,
        marginRight: 3,
    },
    subTitle: {
        fontSize: FONT_SIZE_SMALL,
    },
    dotText: {
        fontSize: 25,
        fontWeight: FONT_WEIGHT_BOLD,
    },
})