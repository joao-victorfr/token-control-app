import { createContext, Dispatch, SetStateAction } from 'react';

interface LoginContextProps {
  user: string,
  pass: string,
  handleClick: () => void,
  userChange: Dispatch<SetStateAction<string>>;
  passChange: Dispatch<SetStateAction<string>>;
}

const initialLoginContext: LoginContextProps = {
  user: '',
  pass: '',
  handleClick: () => {},
  userChange: (() => {}) as Dispatch<SetStateAction<string>>,
  passChange: (() => {}) as Dispatch<SetStateAction<string>>,
}

const LoginContext = createContext<LoginContextProps>(initialLoginContext);

export default LoginContext;
