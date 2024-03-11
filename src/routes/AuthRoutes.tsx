import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const AuthStack = createNativeStackNavigator()

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name='SignIn' component={SignIn} options={{headerShown: false}} />
        <AuthStack.Screen name='SignUp' component={SignUp} options={{
            headerStyle: {
                backgroundColor: '#0284c7',
            },
            headerTintColor: '#fff',
            headerTitle: 'Back',
            headerBackTitleVisible: false
        }} />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes