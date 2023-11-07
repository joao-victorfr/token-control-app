import React, { useState, useMemo, useCallback, Dispatch, SetStateAction } from 'react';
import LoginContext from './LoginContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface LoginProviderProps {
  children: React.ReactNode;
}

const LoginProvider: React.FC<LoginProviderProps> = ({ children }: LoginProviderProps) => {
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const history = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login/', {
        user,
        pass,
      });

      console.log(response)

    } catch (error) {
      console.error('Erro ao verificar a conta: ' + console.error(error))
    }
  }


  const handleClick = useCallback(() => {
    handleLogin
    history('/home');
  }, [history])

  const userChange: Dispatch<SetStateAction<string>> = useCallback(
    (newValue: SetStateAction<string>) => {
      setUser(prevState => (typeof newValue === 'string' ? newValue : newValue(prevState)));
    },
    []
  );

  const passChange: Dispatch<SetStateAction<string>> = useCallback(
    (newValue: SetStateAction<string>) => {
      setPass(prevState => (typeof newValue === 'string' ? newValue : newValue(prevState)));
    },
    []
  );


  const contextValue = useMemo(
    () => ({
      user,
      pass,
      handleClick,
      userChange,
      passChange,
    }),
    [user, pass, handleClick, userChange, passChange]
  );

  return <LoginContext.Provider value={contextValue}>{children}</LoginContext.Provider>;
};

export default LoginProvider;
