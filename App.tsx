import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes'
import Auth from './src/contexts/Auth'
import './global.css'
const App = () => {
  return (
    <NavigationContainer>
      <Auth>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <Routes />
      </Auth>
    </NavigationContainer>
  )
}

export default App