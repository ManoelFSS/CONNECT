import Styles from "./styles.module.scss";
import CardBox from "../../components/ui/CardBox";
import Title from "../../components/ui/Title";
import { voluntariado } from "../../data/mock";

const Valuntariado = () => {
  return (
    <section className={Styles.mix}>
      <Title H="h2" fontSize="3rem">
        Voluntariado
      </Title>
      <div className={Styles.cards}>
        {voluntariado.map((item, index) => (
          <CardBox
            key={index}
            Image={item.url}
            ImgText={item.title}
            title={item.title}
            paragraph={item.paragraph}
            buttonText="Quero participar"
            height="450px"
          />
        ))}
      </div>
    </section>
  );
};

export default Valuntariado;
