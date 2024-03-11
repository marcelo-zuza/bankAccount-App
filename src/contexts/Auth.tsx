import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextProps {
  id: number;
  setId: (newId: number) => void;
  name: string;
  setName: (newName: string) => void;
  email: string;
  setEmail: (newEmail: string) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  checkPassword: string;
  setCheckPassword: (newCheckPassword: string) => void;
}

const MeuContexto = createContext<MyContextProps | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [id, setId] = useState<number>(1);
  const [name, setName] = useState<string>('Zé maria');
  const [email, setEmail] = useState<string>('z@z.com');
  const [password, setPassword] = useState<string>('123');
  const [checkPassword, setCheckPassword] = useState<string>('123');

  const contextValue: MyContextProps = {
    name: name,
    email: email,
    password: password,
    checkPassword: checkPassword,
    id: id,
    setId: setId,
    setName: setName,
    setEmail: setEmail,
    setPassword: setPassword,
    setCheckPassword: setCheckPassword
  };

  return (
    <MeuContexto.Provider value={contextValue}>
      {children}
    </MeuContexto.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MeuContexto);
  if (!context) {
    throw new Error('useMyContext deve ser usado dentro de um MyContextProvider');
  }
  return context;
};