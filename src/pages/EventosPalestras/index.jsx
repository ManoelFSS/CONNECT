import Styles from "./styles.module.scss";
import CardBox from "../../components/ui/CardBox";
import Title from "../../components/ui/Title";
import { eventosPalestras } from "../../data/mock";

const EventosPalestras = () => {
  return (
    <section className={Styles.mix}>
      <Title H="h2" fontSize="3rem">
        Eventos & Palestras
      </Title>
      <div className={Styles.cards}>
        {eventosPalestras.map((item, index) => (
          <CardBox
            key={index}
            Image={item.url}
            ImgText={item.title}
            title={item.title}
            paragraph={item.paragraph}
            buttonText="Quero participar"
            height="530px"
          />
        ))}
      </div>
    </section>
  );
};

export default EventosPalestras;
