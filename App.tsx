import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes'

import { MyContextProvider } from './src/contexts/Auth'
import './global.css'
const App = () => {
  return (
    <NavigationContainer>
      <MyContextProvider>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <Routes />
      </MyContextProvider>
    </NavigationContainer>
  )
}

export default App