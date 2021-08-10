import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreenScreen from '../screens/Home/HomeScreen'

const { Navigator, Screen } = createNativeStackNavigator()

const AppStack: FC = () => {
    return (
        <Navigator>
            <Screen
                name="HomeScreen"
                component={HomeScreenScreen}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}

export default AppStack