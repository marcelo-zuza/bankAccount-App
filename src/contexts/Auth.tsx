import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'


interface User {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    id: string
}

interface AuthContextType {
    user: User | null; 
    login: (email: string, password: string) => void
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)



const Auth = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>({
        name: 'Marcelo Zuza',
        email: 'marcelozuza@gmail.com',
        password: '123',
        repeatPassword: '123',
        id: '0'
    });

    const contextValue = {
        user,
        login: (email: string, password: string) => {
            setUser({
                name: 'Marcelo Zuza',
                email: 'marcelozuza@gmail.com',
                password: '123',
                repeatPassword: '123',
                id: '0'
            })
        }
    }
     
 
  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
  )
}

export default Auth