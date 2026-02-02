import Styles from "./styles.module.scss";
import Title from "../../components/ui/Title";
import Paragraph from "../../components/ui/Paragraph";
import Card from "../../components/ui/CardMetric";
import Button from "../../components/ui/Button";
//icons
import { FaArrowRight } from "react-icons/fa6";


const metrics = [
  {
    text: "Empresas Voluntárias",
    value: 500,
  },
  {
    text: "Projetos Realizados",
    value: 1200,
  },
  {
    text: "Vidas Impactadas",
    value: 50000,
  },
];

function formatNumber(value) {
  if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(".0", "") + "k+";
  }
  return value.toString() + "+";
}


const Home = () => {
  return (
    <section className={Styles.home}>
      <section className={Styles.box_left}>
        <Title H="h1" >
          Projetos Sociais que transformam
        </Title>

        <Paragraph  width="90%">
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </Paragraph>

        <Button width="300px" height="70px" onClick={() => alert("Cadastrado!")}>
          Cadastrar Empresa
          <FaArrowRight size={18} style={{ marginLeft: "20px" }} />
        </Button>

        <div className={Styles.box_metrics}>
          {metrics.map((metric, index) => (
            <Card key={index}>
              <Title H="h3" >
                {formatNumber(metric.value)}
              </Title>
              <Paragraph>{metric.text}</Paragraph>
            </Card>
          ))}
        </div>
      </section>
      <section className={Styles.box_right} />
    </section>
  );
}

export  default Home
