import React, { useContext } from "react";
import HeaderContext from '../context/HeaderContext';
// import LoginContext from '../context/LoginContext';

const Header: React.FC = () => {
  const header = useContext(HeaderContext);
  const { handleClickHome } = header;
  return (
    <div>
      <header>
        <ul>
          <li
          onClick={handleClickHome}
          >Início</li>
          <li>Cadastro de usuários</li>
          <li>Cadastro Pessoal</li>
          <li>Protocolo</li>
          <li>Encaminhamento</li>
          <li>Relatórios</li>
        </ul>
      </header>
    </div>
  )
}

export default Header;