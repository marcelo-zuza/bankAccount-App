import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes'
import './global.css'
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Routes />
    </NavigationContainer>
  )
}

export default App