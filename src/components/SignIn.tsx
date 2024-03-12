import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState} from 'react'
import { firebaseAuth } from '../firebase/firebaseAuth'
import { useAuth } from '../contexts/Auth'

const SignIn = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useAuth();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await signIn(email, password);
      alert("Logged in successfully!");
      // Redirect to your desired component after login
    } catch (error: any) {
      alert("Failed to login:" + error.message);
    }
  };

  return (
    <View className='bg-lime-100 flex flex-1 justify-center px-12 md:px-16 md:mx-96 md:my-8 md:w-96'>

      <Text className='text-5xl font-bold text-center py-12 md:py-4'>Sign In</Text>
      <View className='flex content-center items-center justify-center h-36 py-4'>
        <Image className='' source={require('../assets/img/Logo.png')} /> 
      </View>

      <View className=''>
        <TextInput value={email} onChangeText={setEmail} className='px-2 py-2 my-1 text-2xl md:text-xl border-2 border-gray-400 rounded-sm' placeholder='Email' />
        <TextInput value={password} onChangeText={setPassword} className='px-2 py-2 text-2xl md:text-xl border-2 border-gray-400 rounded-sm' placeholder='Password' />
      </View>

      <View className='py-2'>
        <Pressable onPress={handleSubmit} className='py-4 md:py-2 bg-sky-600 rounded-xl'>
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