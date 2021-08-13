import React, { FC } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { BORDER_RADIUS_MEDIUM, PADDING_LEFT_CARD, MARGIN_LEFT, PADDING_LEFT, MARGIN_RIGHT } from '../../../themes/themes'
import { PRIMARY_COLOR } from '../../../themes/colors'
import { Card } from '../../../components/cards/Card'


type Props = {
    style?: React.CSSProperties | {},
    flagStyle?: React.CSSProperties | {},
    children: React.ReactNode,
    onPress?: () => void,
    disabled: boolean,
}

const TransactionItemCard: FC<Props> = ({ style, flagStyle, children, onPress, disabled }: Props) => {
    return (
        <Pressable onPress={onPress} disabled={disabled}>
            <Card style={[styles.card, style]}>
                {children}
            </Card>
            <View style={[styles.leftFlag, flagStyle]} />
        </Pressable>
    )
}

export default TransactionItemCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: PADDING_LEFT_CARD * 2,
    },
    leftFlag: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 7,
        height: '100%',
        backgroundColor: PRIMARY_COLOR,
        borderTopLeftRadius: BORDER_RADIUS_MEDIUM,
        borderBottomLeftRadius: BORDER_RADIUS_MEDIUM,
    },
})