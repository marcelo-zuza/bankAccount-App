import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes'

import { AuthProvider } from './src/contexts/Auth'

import './global.css'
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App