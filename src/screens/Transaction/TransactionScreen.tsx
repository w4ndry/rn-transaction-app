import React, { FC, useState, useCallback, useEffect } from 'react'
import { FlatList, StyleSheet, Alert } from 'react-native'

import Item from './components/Item'
import ItemSeparator from './components/ItemSeparator'
import { Container } from '../../components/container'
import { PADDING_LEFT, PADDING_RIGHT, PADDING_BOTTOM } from '../../themes/themes'
import ListHeaderComponent from './components/ListHeaderComponent'
import { EmptyItem } from '../../components/texts/EmptyItem'
import { DATA_TIDAK_DITEMUKAN, URUTKAN } from '../../constants/label'
import SortedModal from './components/SortedModal'
import { contains, sortedBy } from '../../utils/searchAndFilter'
import { FooterLoading } from '../../components/spinners/FooterLoading'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { get } from '../../services/APIService'
import { TransactionItem } from './types'
import { Spinner } from '../../components/spinners/Spinner'
import { toTitleCase, capitalize, currencyFormat } from '../../utils/stringManipulation'
import { formatDate } from '../../utils/dateFormat'

type RootStackParamList = {
    Transaction: undefined,
    TransactionDetail: undefined,
}

type TransactionScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Transaction'
>

type Props = {
    navigation: TransactionScreenNavigationProp
}

// Promise function for acting fetch next page data in loadmore
const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const TransactionScreen: FC<Props> = ({ navigation }: Props) => {
    const [transactions, setTransactions] = useState<TransactionItem[]>([])
    const [tempData, setTempData] = useState<TransactionItem[]>([])
    const [searchText, setSearchText] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [sortValue, setSortValue] = useState(URUTKAN)
    const [refreshing, setRefreshing] = useState(false)
    const [loadMore, setLoadMore] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(2)
    const [isloading, setIsLoading] = useState(true)

    const getTransaction = async () => {
        try {

            const response = await get('https://nextar.flip.id/frontend-test')
            const data: TransactionItem[] = Object.values(response)        
            setTransactions(data)
            setTempData(data)
            setIsLoading(false)
            
        } catch (error) {
            setIsLoading(false)
            Alert.alert(JSON.stringify(error))
        }
    }

    useEffect(() => {
        getTransaction()
    }, [])

    const handleSearch = (text: string) => {
        setSearchText(text)

        let filtered = transactions.filter(item => {
            let query = text.toLowerCase()
            return contains(item, query)
        })
        setTransactions(filtered)
        handleSort(sortValue, filtered)

        // Rollback transaction data when no input search text
        if (text.length <= 0) {
            setTransactions(tempData)
            handleSort(sortValue, tempData)
        }
    }

    const clearSearch = () => {
        setSearchText('')
        setTransactions(tempData)
        handleSort(sortValue, tempData)
    }

    const handleSort = (value: string, data?: any) => {
        setSortValue(value)

        if (value == URUTKAN) {
            // Set data to initial value
            if (data == undefined) {
                setTransactions(tempData)
            } else {
                setTransactions(data)
            }
        } else {
            // sorted data
            // Create new array for sorting, need this because sort updating the default data
            let temp = data == undefined ? transactions.slice(0) : data.slice(0)
            let sorted = temp.sort((a, b) => {
                return sortedBy(a, b, value)
            })
            setTransactions(sorted)
        }
        setModalVisible(false)
    }

    const onRefresh = useCallback(async () => {

        setRefreshing(true)
        await getTransaction()
        setCurrentPage(1)
        setRefreshing(false)
    }, []);

    const loadMoreData = async () => {
        try {
            if (searchText == '' && !loadMore && currentPage < totalPage) {
                setLoadMore(true)
                await wait(2000)
                setCurrentPage(currentPage + 1)
                setLoadMore(false)
            }
        } catch (error) {
            setLoadMore(false)
        }
    }

    // Method need for disabled all on press action when loading
    const disabled = () => {
        if (isloading || refreshing || loadMore) return true
        return false
    }

    const renderItem = ({ item }: any) => {
        return (
            <Item
                senderBank={toTitleCase(item.sender_bank)}
                beneficiaryBank={toTitleCase(item.beneficiary_bank)}
                beneficiaryName={capitalize(item.beneficiary_name)}
                amount={currencyFormat(item.amount)}
                date={formatDate(item.created_at)}
                status={item.status}
                onPress={() => navigation.navigate('TransactionDetail', { item })}
                disabled={disabled()}
            />
        )
    }

    const renderEmptyItem = () => {
        if (isloading) return <Spinner />

        return <EmptyItem text={DATA_TIDAK_DITEMUKAN} />
    }

    return (
        <Container style={styles.container}>
            <ListHeaderComponent
                value={searchText}
                onChange={handleSearch}
                clearSearch={clearSearch}
                sortValue={sortValue}
                setModalVisible={setModalVisible}
                disabled={disabled()}
            />
            <FlatList
                data={transactions}
                extraData={transactions}
                contentContainerStyle={styles.content}
                initialNumToRender={7}
                removeClippedSubviews={true}
                maxToRenderPerBatch={5}
                refreshing={refreshing}
                onRefresh={() => onRefresh()}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={renderEmptyItem}
                onEndReachedThreshold={0.1}
                onEndReached={loadMoreData}
                ListFooterComponent={<FooterLoading loadMore={loadMore} />}
            />
            <SortedModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setSortValue={handleSort}
                sortValue={sortValue}
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
        paddingBottom: PADDING_BOTTOM,
    }
})