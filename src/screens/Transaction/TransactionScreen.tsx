import React, { FC, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Item from './components/Item'
import ItemSeparator from './components/ItemSeparator'
import { Container } from '../../components/container'
import { transactions as data } from '../../dummy/transactions'
import { PADDING_LEFT, PADDING_RIGHT } from '../../themes/themes'

const TransactionScreen: FC = () => {
    const [transactions, setTransactions] = useState(data)

    const renderItem = ({ item }: any) => {
        return (
            <Item
                senderBank={item.sender_bank}
                beneficiaryBank={item.beneficiary_bank}
                beneficiaryName={item.beneficiary_name}
                amount={item.amount}
                date={item.created_at}
                status={item.status}
            />
        )
    }

    return (
        <Container style={styles.container}>
            <FlatList
                data={transactions}
                extraData={transactions}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.content}
            />
        </Container>
    )
}

export default TransactionScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    content: {
        paddingLeft: PADDING_LEFT,
        paddingRight: PADDING_RIGHT,
    }
})