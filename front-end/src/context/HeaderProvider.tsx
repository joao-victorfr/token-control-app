import React, { useMemo, useCallback } from 'react';
import HeaderContext from './HeaderContext';
import { useNavigate } from 'react-router-dom';

interface HeaderProviderProps {
  children: React.ReactNode;
}

const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }: HeaderProviderProps) => {
  const history = useNavigate();
  
  const handleClickHome = useCallback(() => {
    history('/home');
  }, [history])
  
  const contextValue = useMemo(
    () => ({
      handleClickHome,
    }),
    [handleClickHome]
  );

  return <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>;
};

export default HeaderProvider;
