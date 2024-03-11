import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import AuthRoutes from './AuthRoutes'

const Routes = () => {

  const loading: boolean = false
  const signed: boolean = false

  return (
    signed ? <View></View> : <AuthRoutes />
  )
}

export default Routes