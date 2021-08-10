import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { BORDER_RADIUS_MEDIUM, PADDING_LEFT_CARD } from '../../themes/themes'
import { PRIMARY_COLOR } from '../../themes/colors'
import { Card } from './Card'


type Props = {
    style?: React.CSSProperties | {},
    children: React.ReactNode,
}

const TransactionItemCard: FC<Props> = ({ style, children }: Props) => {
    return (
        <View>
            <Card style={[styles.card, style]}>
                {children}
            </Card>
            <View style={styles.leftFlag} />
        </View>
    )
}

export { TransactionItemCard }

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
        width: 10,
        height: '100%',
        backgroundColor: PRIMARY_COLOR,
        borderTopLeftRadius: BORDER_RADIUS_MEDIUM,
        borderBottomLeftRadius: BORDER_RADIUS_MEDIUM,
    },
})