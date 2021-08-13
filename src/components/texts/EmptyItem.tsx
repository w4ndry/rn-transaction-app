import React, { FC } from 'react'
import { Text, StyleSheet } from 'react-native'

import { FONT_SIZE_NORMAL, FONT_WEIGHT_REGULAR, LINE_HEIGHT_20 } from '../../themes/themes'

type Props = {
    style?: React.CSSProperties | {},
    text: string,
}

const EmptyItem: FC<Props> = ({ style, text }: Props) => {
    return (
        <Text style={[styles.text, style]}>
            {text}
        </Text>
    )
}

export { EmptyItem }

const styles = StyleSheet.create({
    text: {
        fontWeight: FONT_WEIGHT_REGULAR,
        fontSize: FONT_SIZE_NORMAL,
        lineHeight: LINE_HEIGHT_20,
        textAlign: 'center',
    }
})