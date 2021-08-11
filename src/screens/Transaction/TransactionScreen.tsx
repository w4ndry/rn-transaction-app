import React, { FC, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Item from './components/Item'
import ItemSeparator from './components/ItemSeparator'
import { Container } from '../../components/container'
import { transactions as data } from '../../dummy/transactions'
import { PADDING_LEFT, PADDING_RIGHT } from '../../themes/themes'
import ListHeaderComponent from './components/ListHeaderComponent'
import { currencyFormat } from '../../utils/stringManipulation'
import { EmptyItem } from '../../components/texts/EmptyItem'
import { DATA_TIDAK_DITEMUKAN } from '../../constants/label'

interface SearchItem {
    sender_bank: string,
    beneficiary_name: string,
    beneficiary_bank: string,
    amount: number,
}

const TransactionScreen: FC = () => {
    const [transactions, setTransactions] = useState(data)
    const [tempData, setTempData] = useState(data)
    const [searchText, setSearchText] = useState('')

    const contains = ({ sender_bank, beneficiary_name, beneficiary_bank, amount }: SearchItem, query: string) => {
        if (
            sender_bank.toLowerCase().indexOf(query) !== -1 ||
            beneficiary_name.toLowerCase().indexOf(query) !== -1 ||
            beneficiary_bank.toLowerCase().indexOf(query) !== -1 ||
            amount.toString().indexOf(query) !== -1 ||
            currencyFormat(amount).indexOf(query) !== -1
        ) {
            return true
        }
        return false
    }

    const handleSearch = (text: string) => {
        setSearchText(text)
        let temp = tempData

        let filtered = temp.filter(item => {
            let query = text.toLowerCase()
            return contains(item, query)
        })
        setTransactions(filtered)

        if (text.length <= 0) {
            setTransactions(tempData)
        }
    }

    const clearSearch = () => {
        setSearchText('')
        setTransactions(tempData)
    }

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
            <ListHeaderComponent value={searchText} onChange={handleSearch} clearSearch={clearSearch} />
            <FlatList
                data={transactions}
                extraData={transactions}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<EmptyItem text={DATA_TIDAK_DITEMUKAN} />}
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