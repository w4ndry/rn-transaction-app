import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { PADDING_LEFT_BTN, PADDING_RIGHT_BTN, PADDING_TOP_BTN, PADDING_BOTTOM_BTN, FONT_SIZE_NORMAL, BORDER_RADIUS_NORMAL, BORDER_WIDTH_MEDIUM, FONT_WEIGHT_BOLD } from '../../themes/themes'
import { Label } from '../texts'
import { BLACK_BORDER_COLOR } from '../../themes/colors'

type Props = {
    style?: React.CSSProperties | {},
    titleStyle?: React.CSSProperties | {},
    title: string,
}

const LabelStatus: FC<Props> = ({ style, titleStyle, title }: Props) => {
    return (
        <View style={[styles.container, style]}>
            <Label style={[styles.labelText, titleStyle]}>{title}</Label>
        </View>
    )
}

export { LabelStatus }

const styles = StyleSheet.create({
    container: {
        borderWidth: StyleSheet.hairlineWidth + 1,
        borderColor: BLACK_BORDER_COLOR,
        borderRadius: BORDER_RADIUS_NORMAL,
        paddingLeft: PADDING_LEFT_BTN,
        paddingRight: PADDING_RIGHT_BTN,
        paddingTop: PADDING_TOP_BTN,
        paddingBottom: PADDING_BOTTOM_BTN,
    },
    labelText: {
        fontWeight: FONT_WEIGHT_BOLD,
    }
})