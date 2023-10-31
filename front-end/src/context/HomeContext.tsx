import { createContext } from 'react';

interface HomeContextProps {
  user: string,
  pass: string,
}

/* const initialLoginContext: LoginContextProps = {
  user: '',
  pass: '',
} */

const HomeContext = createContext<HomeContextProps | undefined >(undefined);

export default HomeContext;
