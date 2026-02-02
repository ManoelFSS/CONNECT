import Styles from "./styles.module.scss";

const Paragraph = ({ size, children, width }) => {
  return (
    <p style={{ fontSize: size, width }} className={Styles.paragraph}>
      {children}
    </p>
  );
};

export default Paragraph
