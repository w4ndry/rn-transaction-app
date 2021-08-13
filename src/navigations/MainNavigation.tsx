import React, { FC } from 'react'
import { useColorScheme, StatusBar } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'

import AppNavigator from './AppNavigator'
import { PRIMARY_BG_COLOR, BLACK_COLOR } from '../themes/colors'

const MainNavigation: FC = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const LightTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: PRIMARY_BG_COLOR,
        }
    }

    return (
        <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? BLACK_COLOR : PRIMARY_BG_COLOR}
            />
            <AppNavigator />
        </NavigationContainer>
    )
}

export default MainNavigation