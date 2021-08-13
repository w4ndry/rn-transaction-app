import React, { FC } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import BankName from './BankName'
import { Label } from '../../../components/texts'
import TransactionItemCard from './TransactionItemCard'
import { SECONDARY_COLOR } from '../../../themes/colors'
import { PENGECEKAN, BERHASIL, PENDING, SUCCESS } from '../../../constants/label'
import { SecondaryLabelStatus, PrimaryLabelStatus } from '../../../components/label-status'
import { FONT_WEIGHT_BOLD, FONT_SIZE_SMALL } from '../../../themes/themes'

type Props = {
    senderBank: string,
    beneficiaryBank: string,
    beneficiaryName: string,
    amount: string,
    date: string,
    status: string,
    onPress: () => void,
    disabled: boolean,
}

const Item: FC<Props> = ({ senderBank, beneficiaryBank, beneficiaryName, amount, date, status, onPress, disabled }: Props) => {
    const renderLabelStatus = (status: string) => {
        if (status == PENDING) {
            return <SecondaryLabelStatus title={PENGECEKAN} />
        }
        return <PrimaryLabelStatus title={BERHASIL} />
    }

    const flagStyle = status == SUCCESS ? {backgroundColor: SECONDARY_COLOR} : {}
    
    return (
        <TransactionItemCard flagStyle={flagStyle} onPress={onPress} disabled={disabled}>
            <View style={styles.textWrapper}>
                <BankName
                    senderBank={senderBank}
                    beneficiaryBank={beneficiaryBank}
                />
                <Label style={styles.subTitle}>{beneficiaryName}</Label>
                <Label style={styles.subTitle}>{amount} <Text style={styles.dotText}>.</Text> {date} </Label>
            </View>
            {renderLabelStatus(status)}
        </TransactionItemCard>
    )
}

export default Item

const styles = StyleSheet.create({
    textWrapper: {
        flex: 1,
    },
    subTitle: {
        fontSize: FONT_SIZE_SMALL,
    },
    dotText: {
        fontSize: 25,
        fontWeight: FONT_WEIGHT_BOLD,
    },
})