import React, { useState, useMemo } from 'react';
import HomeContext from './HomeContext';

interface HomeProviderProps {
  children: React.ReactNode;
}

const HomeProvider: React.FC<HomeProviderProps> = ({ children }: HomeProviderProps) => {
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const contextValue = useMemo(
    () => ({
      user,
      pass,
      setUser,
      setPass
    }),
    [user, pass]
  );

  return <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
