import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { Label } from '../../../components/texts'
import { MARGIN_BOTTOM, MARGIN_TOP, MARGIN_RIGHT, FONT_WEIGHT_BOLD } from '../../../themes/themes'

type Props = {
    leftTitle: string,
    rightTitle?: string,
    leftValue: string,
    rightValue?: string,
}

const ItemDetail: FC<Props> = ({ leftTitle, rightTitle, leftValue, rightValue }: Props) => {
    return (
        <View style={styles.row}>
            <View>
                <Label style={styles.titleText}>{leftTitle}</Label>
                <Label>{leftValue}</Label>
            </View>
            <View style={styles.rightColumn}>
                <Label style={styles.titleText}>{rightTitle}</Label>
                <Label>{rightValue}</Label>
            </View>
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: MARGIN_TOP,
        marginBottom: MARGIN_BOTTOM,
    },
    titleText: {
        fontWeight: FONT_WEIGHT_BOLD,
    },
    rightColumn: {
        marginRight: MARGIN_RIGHT * 4,
    },
})