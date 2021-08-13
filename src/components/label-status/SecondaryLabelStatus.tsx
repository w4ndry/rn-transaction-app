import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { PRIMARY_COLOR } from '../../themes/colors'
import { LabelStatus } from './LabelStatus'

type Props = {
    title: string,
}

const SecondaryLabelStatus: FC<Props> = ({ title }: Props) => {
    return (
        <LabelStatus
            style={styles.label}
            title={title}
        />
    )
}

export { SecondaryLabelStatus }

const styles = StyleSheet.create({
    label: {
        borderColor: PRIMARY_COLOR,
    },
})