import React, { useContext, ChangeEvent } from 'react';
import LoginContext from '../context/LoginContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css'
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
    <div className="box-login">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
      </head>
      <div className='title'>
        <h1>Controle de Fichas</h1>
      </div>
      <div className='login-form'>
        <form className="form-login">
          <label 
          className='label'
          >
            Digite seu login
          </label>
          <input
            className="input-login form-control"
            aria-describedby="inputGroup-sizing-sm"
            type="user"
            name="user"
            id="inputGroup-sizing-default"
            placeholder="Digite seu usuário"
            value={user}
            onChange={ handleUserChange }
          />
          <label className='label'>Digite sua senha</label>
          <input
            className="input-login form-control"
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
