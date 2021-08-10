import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { BORDER_RADIUS_MEDIUM, PADDING_TOP_CARD, PADDING_BOTTOM_CARD, PADDING_RIGHT_CARD, PADDING_LEFT_CARD } from '../../themes/themes'
import { WHITE_COLOR, PRIMARY_COLOR } from '../../themes/colors'


type Props = {
    style?: React.CSSProperties | {},
    children: React.ReactNode,
}

const Card: FC<Props> = ({ style, children }: Props) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

export { Card }

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE_COLOR,
        borderRadius: BORDER_RADIUS_MEDIUM,
        paddingTop: PADDING_TOP_CARD,
        paddingBottom: PADDING_BOTTOM_CARD,
        paddingLeft: PADDING_LEFT_CARD,
        paddingRight: PADDING_RIGHT_CARD,
    },
    leftFlag: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 10,
        height: '100%',
        backgroundColor: PRIMARY_COLOR,
    },
})