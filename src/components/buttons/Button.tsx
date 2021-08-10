import React, { FC } from 'react'
import { Pressable, StyleSheet } from 'react-native'

import { PADDING_LEFT_BTN, PADDING_RIGHT_BTN, PADDING_TOP_BTN, PADDING_BOTTOM_BTN, FONT_SIZE_NORMAL, BORDER_RADIUS_NORMAL, BORDER_WIDTH_MEDIUM, FONT_WEIGHT_BOLD } from '../../themes/themes'
import { Label } from '../texts'
import { BLACK_BORDER_COLOR } from '../../themes/colors'

type Props = {
    style?: React.CSSProperties | {},
    titleStyle?: React.CSSProperties | {},
    title: string,
    disabled?: boolean,
    onPress: () => void,
}

const Button: FC<Props> = ({ style, titleStyle, title, disabled = false, onPress }: Props) => {
    return (
        <Pressable style={[styles.container, style]} disabled={disabled} onPress={onPress}>
            <Label style={[styles.buttonText, titleStyle]}>{title}</Label>
        </Pressable>
    )
}

export { Button }

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
    buttonText: {
        fontWeight: FONT_WEIGHT_BOLD,
    }
})