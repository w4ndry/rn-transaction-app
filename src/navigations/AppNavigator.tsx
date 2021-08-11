import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TransactionScreen from '../screens/Transaction/TransactionScreen'

const { Navigator, Screen } = createNativeStackNavigator()

const AppStack: FC = () => {
    return (
        <Navigator>
            <Screen
                name="Transaction"
                component={TransactionScreen}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}

export default AppStack