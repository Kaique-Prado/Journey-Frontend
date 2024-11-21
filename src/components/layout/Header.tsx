import {Link} from "react-router-dom"

import logo from '../../img/LogoMontanhaNome-Photoroom.png'
import style from './Header.module.css'
function Header() {
    return (
        <header className={style.header}>
            <Link to="/"><img className={style.lgo} src={logo} alt=""/></Link>
            <nav>
                <ul className={style.lista}>
                    <li><a href="#QuemSomos">Quem somos</a></li>
                    <li><a href="#Contato">Contato</a></li>
                </ul>
                <Link to="/login"><button className={style.botao}>Entrar</button></Link>
            </nav>
        </header>
    )
}

export default Header