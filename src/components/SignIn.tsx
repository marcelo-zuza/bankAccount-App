import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const SignIn = () => {

  const navigation = useNavigation()

  return (
    <View className='bg-lime-100 flex flex-1 justify-center px-12 md:px-16 md:mx-96 md:my-8 md:w-96'>

      <Text className='text-5xl font-bold text-center py-12 md:py-4'>Sign In</Text>
      <View className='flex content-center items-center justify-center h-36 py-4'>
        <Image className='' source={require('../assets/img/Logo.png')} /> 
      </View>

      <View className=''>
        <TextInput className='px-2 py-2 my-1 text-2xl md:text-xl border-2 border-gray-400 rounded-sm' placeholder='Email' />
        <TextInput className='px-2 py-2 text-2xl md:text-xl border-2 border-gray-400 rounded-sm' placeholder='Password' />
      </View>

      <View className='py-2'>
        <Pressable className='py-4 md:py-2 bg-sky-600 rounded-xl'>
          <Text className='text-2xl font-bold text-center text-white'>Sign In</Text>
        </Pressable>
      </View>

      <View className='py-2'>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text className='text-xl font-bold text-center underline'>Criar uma conta</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignIn