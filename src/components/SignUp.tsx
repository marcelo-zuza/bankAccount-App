import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { useMyContext } from '../contexts/Auth'


// #0284c7


const SignUp: React.FC = () => {

  const { name, email, password, checkPassword } = useMyContext()
  return (
    <View className='bg-lime-100 flex flex-1 justify-center px-12 md:px-16 md:mx-96 md:my-8 md:w-96'>
      <View>
        <Text className='text-5xl font-bold text-center py-12 md:py-4'>Sign In</Text>
      </View>

      <View className=''>
        <TextInput className='px-2 py-2 text-2xl md:text-xl border-2 border-gray-400 rounded-sm' placeholder='Full Name' />
        <TextInput className='px-2 py-2 my-1 text-2xl md:text-xl border-2 border-gray-400 rounded-sm' placeholder='Email' />
        <TextInput className='px-2 py-2 text-2xl md:text-xl border-2 border-gray-400 rounded-sm' placeholder='Password' />
        <TextInput className='px-2 py-2 text-2xl md:text-xl border-2 border-gray-400 rounded-sm' placeholder='RepeatPassword' />
      </View>

      <View className='py-2'>
        <Pressable className='py-4 md:py-2 bg-sky-600 rounded-xl'>
          <Text className='text-2xl font-bold text-center text-white'>Register</Text>
        </Pressable>
      </View>


    </View>
  )
}

export default SignUp