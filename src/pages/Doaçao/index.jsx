import Styles from "./styles.module.scss"
import CardBox from "../../components/ui/CardBox"
import Title from "../../components/ui/Title"
import { doacao } from "../../data/mock"


const Doacao = () => {
  return (
    <section className={Styles.mix}>
      <Title H="h2" fontSize="3rem">
        Doação
      </Title>
      <div className={Styles.cards}>
        {doacao.map((item, index) => (
          <CardBox
            key={index}
            Image={item.url}
            ImgText={item.title}
            title={item.title}
            paragraph={item.paragraph}
            buttonText="Quero Doar"
            height="480px"
          />
        ))}
      </div>
    </section>
  );
}

export default Doacao

