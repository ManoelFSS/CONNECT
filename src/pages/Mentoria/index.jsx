import Styles from "./styles.module.scss";
import CardBox from "../../components/ui/CardBox";
import Title from "../../components/ui/Title";
import { mentoria } from "../../data/mock";

const Mentoria = () => {
  return (
    <section className={Styles.mix}>
      <Title H="h2" fontSize="3rem">
        Mentoria
      </Title>
      <div className={Styles.cards}>
        {mentoria.map((item, index) => (
          <CardBox
            key={index}
            Image={item.url}
            ImgText={item.title}
            title={item.title}
            paragraph={item.paragraph}
            buttonText="Quero participar"
          />
        ))}
      </div>
    </section>
  );
};

export default Mentoria;
