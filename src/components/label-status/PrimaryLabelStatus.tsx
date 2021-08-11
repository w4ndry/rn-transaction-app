import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { GREEN_BORDER_COLOR, SECONDARY_COLOR, WHITE_COLOR } from '../../themes/colors'
import { LabelStatus } from './LabelStatus'

type Props = {
    title: string,
}

const PrimaryLabelStatus: FC<Props> = ({ title }: Props) => {
    return (
        <LabelStatus
            style={styles.label}
            titleStyle={styles.title}
            title={title}
        />
    )
}

export { PrimaryLabelStatus }

const styles = StyleSheet.create({
    label: {
        borderColor: GREEN_BORDER_COLOR,
        backgroundColor: SECONDARY_COLOR,
    },
    title: {
        color: WHITE_COLOR,
    }
})