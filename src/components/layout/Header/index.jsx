import { useState } from "react";
import Styles from "./styles.module.scss";
import Image from "../../../assets/images/logo.png";
import Menu from '../Menu';
import Logo from "../../ui/Logo";
import { Link } from "react-router-dom";
// icons
import { IoPersonCircle } from "react-icons/io5";
import { CgMenuBoxed } from "react-icons/cg";


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={Styles.header}>
      <CgMenuBoxed onClick={() => setIsOpen(!isOpen)} size={50} color="#fff" className={Styles.menuIcon} />

      <Link to="/">
        <Logo size={50} Image={Image} Text="Instituto conecta jovem" />
      </Link>

      <section style={{left:` ${isOpen ? "0" : "-100%" }`}}>
        <div>
          <Menu />
        </div>
      </section>

      <div>
        {true ? (
          <Link to="/perfil">
            <IoPersonCircle size={70} color="#fff" />
          </Link>
        ) : (
          <Link to="/perfil">
            <img src="" alt="" />
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header
