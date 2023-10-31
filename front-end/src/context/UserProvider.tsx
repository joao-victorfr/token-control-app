import React, { useState, useMemo, SetStateAction, useCallback, Dispatch } from 'react';
import UserContext from './UserContext';
import { useNavigate } from 'react-router-dom';

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }: UserProviderProps) => {
  const [newUser, setnewUser] = useState<string>('');
  const [newPass, setnewPass] = useState<string>('');
  const history = useNavigate();

  const handleClick = useCallback(() => {
    history('/usersscreen');
  }, [history])

  const userChange: Dispatch<SetStateAction<string>> = useCallback(
    (newValue: SetStateAction<string>) => {
      setnewUser(prevState => (typeof newValue === 'string' ? newValue : newValue(prevState)));
    },
    []
  );

  const passChange: Dispatch<SetStateAction<string>> = useCallback(
    (newValue: SetStateAction<string>) => {
      setnewPass(prevState => (typeof newValue === 'string' ? newValue : newValue(prevState)));
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      newUser,
      newPass,
      handleClick,
      userChange,
      passChange,
    }),
    [newUser, newPass, handleClick, userChange, passChange]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
