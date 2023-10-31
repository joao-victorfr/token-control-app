import React, { useContext, ChangeEvent } from 'react';
import LoginContext from '../context/LoginContext';
// import useLoginContext from '../context/useLoginContext';
// import '../App.css';

const Login: React.FC = () => {
  const login = useContext(LoginContext);
  const { user, pass, handleClick, userChange, passChange } = login;

  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    userChange(event.target.value);
  };

  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    passChange(event.target.value);
  };


  return (
    <div className="content">
      <div className="container-login">
        <form className="form-login">
          <h1>Controle de Fichas</h1>
          <input
            className="input-login"
            type="user"
            name="user"
            id="user"
            placeholder="Digite seu usuário"
            value={user}
            onChange={ handleUserChange }
          />
          <input
            className="input-login"
            type="password"
            name="pass"
            id="pass"
            placeholder="Digite sua Senha"
            value={pass}
            onChange={ handlePassChange }
          />
          <button
            className="button-login"
            onClick={ handleClick }
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
