import { useContext } from 'react';
import LoginContext from './LoginContext';

interface LoginContextProps {
  // Defina as propriedades do contexto aqui, se necessário.
}

const useLoginContext = (): LoginContextProps => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext deve ser usado dentro de um LoginProvider');
  }
  return context;
};

export default useLoginContext;
