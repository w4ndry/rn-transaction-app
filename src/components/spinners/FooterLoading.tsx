import React, { FC } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

import { FONT_SIZE_NORMAL, FONT_WEIGHT_REGULAR, LINE_HEIGHT_20, MARGIN_TOP } from '../../themes/themes'
import { PRIMARY_COLOR } from '../../themes/colors'

type Props = {
    loadMore: boolean,
}

const FooterLoading: FC<Props> = ({ loadMore }: Props) => {
    if (loadMore) {
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
    return null
}

export { FooterLoading }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: MARGIN_TOP,
    },
    indicator: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})