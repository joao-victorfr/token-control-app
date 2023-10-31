import { createContext, Dispatch, SetStateAction } from 'react';

interface UserContextProps {
  newUser: string,
  newPass: string,
  handleClick: () => void,
  userChange: Dispatch<SetStateAction<string>>;
  passChange: Dispatch<SetStateAction<string>>;
}

const initialLoginContext: UserContextProps = {
  newUser: '',
  newPass: '',
  handleClick: () => {},
  userChange: (() => {}) as Dispatch<SetStateAction<string>>,
  passChange: (() => {}) as Dispatch<SetStateAction<string>>,
}

const UserContext = createContext<UserContextProps>(initialLoginContext);

export default UserContext;
