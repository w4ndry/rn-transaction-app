import React, { FC } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { PADDING_LEFT, PADDING_RIGHT, PADDING_TOP, PADDING_BOTTOM } from '../../themes/themes'

type Props = {
    containerStyles?: React.CSSProperties | {},
    children: React.ReactNode,
}

const Container: FC<Props> = ({ containerStyles, children }: Props) => {
    return (
        <SafeAreaView style={[styles.container, containerStyles]}>
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