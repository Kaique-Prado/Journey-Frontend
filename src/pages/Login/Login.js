import { useState } from "react";
import PrimaryInput from "../../components/layout/PrimaryInput";
import style from "./Login.module.css";
import logo from "../../img/logoMontanha_Photoroom.png"
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      
      <div className={style.container_form}>
        
        <img className={style.image} src={logo} alt="" />
        <div className={style.background_form}>
          <PrimaryInput
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
            placeholder="Valor"
          />
          <PrimaryInput
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Senha"
            placeholder="Valor"
          />
          <Link to="/trip/details"><button className={style.button_login}>Login</button></Link>
          <a href="" className={style.forgot_password}>Esqueceu a senha?</a>
        </div>
        <div className={style.background_register}>
          <p>Não tem uma conta?</p>
          <Link to="/registrar" ><button className={style.button_register}>Registrar</button></Link>
        </div>
      </div>
    </>
  );
}
export default Login;
