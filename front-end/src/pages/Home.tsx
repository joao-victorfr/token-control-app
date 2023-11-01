import React, { useContext } from "react";
//import HomeContext from '../context/HomeContext';
import LoginContext from '../context/LoginContext';
import Header from "./Header";

const Home: React.FC = () => {
  const login = useContext(LoginContext);
  const { user } = login;
  return (
    <div>
      <h1>
        { `Bem Vindo ${user}`}
      </h1>
      <Header />
      <article>
        <h2>Avisos</h2>
        <p>Nada aqui ainda</p>
      </article>
    </div>
  )
}

export default Home;