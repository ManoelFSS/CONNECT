import Styles from "./styles.module.scss";

const Title = ({H = "h1", children, fontSize}) => {
   return (
    <H className={`${Styles.title} `} style={{fontSize}}  >
      {children}
    </H>
   )
}

export default Title;
