import React, { FC } from 'react'
import { Text, StyleSheet } from 'react-native'

import { FONT_SIZE_NORMAL, FONT_WEIGHT_REGULAR, LINE_HEIGHT_20 } from '../../themes/themes'


type Props = {
    style?: React.CSSProperties | {},
    children: React.ReactNode,
}

const Label: FC<Props> = ({ style, children }: Props) => {
    return (
        <Text style={[styles.buttonText, style]}>
            {children}
        </Text>
    )
}

export { Label }

const styles = StyleSheet.create({
    buttonText: {
        fontWeight: FONT_WEIGHT_REGULAR,
        fontSize: FONT_SIZE_NORMAL,
        lineHeight: LINE_HEIGHT_20,
    }
})