import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TransactionScreen from '../screens/Transaction/TransactionScreen'
import TransactionDetailScreen from '../screens/Transaction/TransactionDetailScreen'
import { TRANSACTION_DETAIL_TITLE } from '../constants/label'

const { Navigator, Screen } = createNativeStackNavigator()

const AppStack: FC = () => {
    return (
        <Navigator>
            <Screen
                name="Transaction"
                component={TransactionScreen}
                options={{ headerShown: false }}
            />
            <Screen
                name="TransactionDetail"
                component={TransactionDetailScreen}
                options={{ title: TRANSACTION_DETAIL_TITLE }}
            />
        </Navigator>
    )
}

export default AppStack