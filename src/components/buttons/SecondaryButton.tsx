import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { PRIMARY_COLOR } from '../../themes/colors'
import { Button } from './Button'

type Props = {
    title: string,
    disabled?: boolean,
    onPress: () => void,
}

const SecondaryButton: FC<Props> = ({ title, disabled, onPress }: Props) => {
    return (
        <Button
            style={styles.button}
            title={title}
            disabled={disabled}
            onPress={onPress}
        />
    )
}

export { SecondaryButton }

const styles = StyleSheet.create({
    button: {
        borderColor: PRIMARY_COLOR,
    },
})