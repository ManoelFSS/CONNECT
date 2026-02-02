import Styles from "./styles.module.scss";

const Button = ({ children, onClick, icon, width ,height  }) => {
  return (
    <button
      onClick={onClick}
      className={Styles.button}
      style={{ width, minHeight: height }}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;


