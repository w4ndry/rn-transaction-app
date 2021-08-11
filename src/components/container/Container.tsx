import React, { FC } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { PADDING_LEFT, PADDING_RIGHT, PADDING_TOP, PADDING_BOTTOM } from '../../themes/themes'

type Props = {
    style?: React.CSSProperties | {},
    children: React.ReactNode,
}

const Container: FC<Props> = ({ style, children }: Props) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    )
}

export { Container }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: PADDING_TOP,
        paddingBottom: PADDING_BOTTOM,
        paddingLeft: PADDING_LEFT,
        paddingRight: PADDING_RIGHT,
    },
})