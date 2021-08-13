import React, { FC } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { Label } from '../../../components/texts'
import { MARGIN_BOTTOM, FONT_WEIGHT_BOLD, FONT_SIZE_MEDIUM } from '../../../themes/themes'


type Props = {
    senderBank: string,
    beneficiaryBank: string,
}

const BankName: FC<Props> = ({ senderBank, beneficiaryBank }: Props) => {
    return (
        <View style={styles.bankWrapper}>
            <Label style={styles.bankText}>{senderBank}</Label>
            <Image source={require('../../../assets/icons/outline_east_black_48.png')} style={styles.iconForward} />
            <Label style={styles.bankText}>{beneficiaryBank}</Label>
        </View>
    )
}

export default BankName

const styles = StyleSheet.create({
    bankWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: MARGIN_BOTTOM
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
})