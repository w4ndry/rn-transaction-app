import React, { FC } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

import { FONT_SIZE_NORMAL, FONT_WEIGHT_REGULAR, LINE_HEIGHT_20, MARGIN_TOP } from '../../themes/themes'
import { PRIMARY_COLOR } from '../../themes/colors'

type Props = {
}

const Spinner: FC<Props> = ({ }: Props) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={'large'}
                style={styles.indicator}
                color={PRIMARY_COLOR}
            />
        </View>
    );
}

export { Spinner }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    indicator: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})