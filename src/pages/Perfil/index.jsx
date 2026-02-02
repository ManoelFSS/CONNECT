import Styles from "./styles.module.scss";
import Title from "../../components/ui/Title";
import Paragraph from "../../components/ui/Paragraph";
import image from "../../assets/images/perfil.png";
//icons
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegCalendarDays } from "react-icons/fa6";

const Perfil = () => { 
  return (
    <section className={Styles.container}>
      <img src={image} alt="Manoel Fernando" />
      <div>
        <div className={Styles.name}>
          <h1>Manoel Fernando De Souza SIlva</h1>
          <Paragraph>Voluntário em Contratação!</Paragraph>
        </div>
        <div className={Styles.description}>
          <Paragraph>
            Apaixonado por impacto social, acredito que pequenas ações podem
            gerar grandes transformações. Sou programador e busco utilizar a
            tecnologia para criar soluções que contribuam positivamente com a
            comunidade.
          </Paragraph>
        </div>

        <div className={Styles.info}>
          <div>
            <IoLocationSharp size={25} />
            <Paragraph>Trindade-PE</Paragraph>
          </div>
          <div>
            <HiOutlineMail size={25} />
            <Paragraph>fernandomfss10@gmail.com</Paragraph>
          </div>
          <div>
            <FaRegCalendarDays size={25} />
            <Paragraph>Gostaria de ser Membro</Paragraph>
          </div>
        </div>
        <div className={Styles.skills}>
          <p>Desenvolverdor Fron-end</p>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
