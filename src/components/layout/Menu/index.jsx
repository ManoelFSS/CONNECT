import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

const Links = [
  // { to: "/", label: "Home" },
  { to: "/doacao", label: "Doação" },
  { to: "/voluntariado", label: "Voluntariado" },
  { to: "/mentoria", label: "Mentoria" },
  { to: "/eventos-palestras", label: "Eventos & Palestras" },
];

const Menu = ({ isOpen }) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {Links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;


