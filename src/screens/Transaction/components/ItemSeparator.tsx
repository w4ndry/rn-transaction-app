import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { MARGIN_BOTTOM } from '../../../themes/themes'


type Props = {
}

const ItemSeparator: FC<Props> = ({ }: Props) => {
    return <View style={styles.container} />
}

export default ItemSeparator

const styles = StyleSheet.create({
    container: {
        marginBottom: MARGIN_BOTTOM
    },
})