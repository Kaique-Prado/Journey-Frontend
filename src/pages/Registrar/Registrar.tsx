import style from "./Registrar.module.css";
import logo from "../../img/logoMontanha_Photoroom.png";
import PrimaryInput from "../../components/layout/PrimaryInput";
import { useState } from "react";
import { Link } from "react-router-dom";

function Registrar() {
  const [nome, setNome] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <>
      <div className={style.container_form}>
        <img className={style.image} src={logo} alt="" />
        <div className={style.background_form}>
          <PrimaryInput
            type="text"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Valor"
            label="Nome"
          />
          <PrimaryInput
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Valor"
            label="Email"
          />
          <PrimaryInput
            type="password"
            name="senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Valor"
            label="Senha"
          />
          <PrimaryInput
            type="password"
            name="senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Valor"
            label="Senha"
          />
          <button className={style.button_register}>Registrar</button>
        </div>
        <div className={style.background_login}>
            <p>Já tem uma conta?</p>
            <Link to="/login"><button className={style.button_login}>Login</button></Link>
        </div>
      </div>
    </>
  );
}

export default Registrar;
