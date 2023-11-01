import { createContext } from 'react';

interface HeaderContextProps {
  handleClickHome: () => void,
}

const initialLoginContext: HeaderContextProps = {
  handleClickHome: () => {},
}

const HeaderContext = createContext<HeaderContextProps>(initialLoginContext);

export default HeaderContext;
