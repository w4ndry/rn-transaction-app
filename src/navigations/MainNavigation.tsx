import React, { FC } from 'react'
import { useColorScheme, StatusBar } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'

import AppNavigator from './AppNavigator'

const MainNavigation: FC = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const LightTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: Colors.white
        }
    }

    return (
        <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? Colors.black : Colors.white}
            />
            <AppNavigator />
        </NavigationContainer>
    )
}

export default MainNavigation