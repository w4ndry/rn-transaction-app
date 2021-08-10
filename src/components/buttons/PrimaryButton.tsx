import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { GREEN_BORDER_COLOR, SECONDARY_COLOR, WHITE_COLOR } from '../../themes/colors'
import { Button } from './Button'

type Props = {
    title: string,
    disabled?: boolean,
    onPress: () => void,
}

const PrimaryButton: FC<Props> = ({ title, disabled, onPress }: Props) => {
    return (
        <Button
            style={styles.button}
            titleStyle={styles.title}
            title={title}
            disabled={disabled}
            onPress={onPress}
        />
    )
}

export { PrimaryButton }

const styles = StyleSheet.create({
    button: {
        borderColor: GREEN_BORDER_COLOR,
        backgroundColor: SECONDARY_COLOR,
    },
    title: {
        color: WHITE_COLOR,
    }
})