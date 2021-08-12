import React, { FC } from 'react'
import { StyleSheet, View, Modal, Pressable } from 'react-native'

import { Label } from '../../../components/texts'
import { PRIMARY_COLOR } from '../../../themes/colors'
import { URUTKAN, NAMA_A_Z, NAMA_Z_A, TANGGAL_TERBARU, TANGGAL_TERLAMA } from '../../../constants/label'
import { BORDER_RADIUS_MEDIUM, BORDER_WIDTH_MEDIUM, MARGIN_RIGHT, PADDING_TOP, PADDING_BOTTOM, PADDING, MARGIN } from '../../../themes/themes'


type Props = {
    modalVisible: boolean,
    setModalVisible: (visible: boolean) => void,
    setSortValue: (text: string) => void,
    sortValue: string,
}

const items: string[] = [URUTKAN, NAMA_A_Z, NAMA_Z_A, TANGGAL_TERBARU, TANGGAL_TERLAMA]

const SortedModal: FC<Props> = ({ modalVisible, setModalVisible, setSortValue, sortValue }: Props) => {
    const renderItem = () => {
        return items.map((item, index) => (
            <Pressable key={index} style={styles.itemContainer} onPress={() => setSortValue(item)}>
                <View style={styles.dotContainer}>
                    {sortValue == item &&
                    <View style={styles.dot} />}
                </View>
                <Label>{item}</Label>
            </Pressable>
        ))
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <Pressable style={styles.centeredView} onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.modalView}>
                    {renderItem()}
                </View>
            </Pressable>
        </Modal>
    )
}

export default SortedModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(127, 127, 127, 0.3)'
    },
    modalView: {
        margin: MARGIN * 3,
        padding: PADDING * 2,
        backgroundColor: 'white',
        borderRadius: BORDER_RADIUS_MEDIUM,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: PADDING_TOP + 5,
        paddingBottom: PADDING_BOTTOM + 5,
    },
    dotContainer: {
        borderWidth: BORDER_WIDTH_MEDIUM,
        borderColor: PRIMARY_COLOR,
        width: 20,
        height: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: MARGIN_RIGHT,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 12,
        backgroundColor: PRIMARY_COLOR,
    },
})