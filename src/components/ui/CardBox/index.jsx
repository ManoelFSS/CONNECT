import Styles from './styles.module.scss';
import Title from '../../ui/Title';
import Paragraph from '../../ui/Paragraph';
import Button from '../Button';

const CardBox = ({ Image, ImgText, title, paragraph, buttonText, height }) => {
  return (
    <div className={Styles.cardBox} style={{height}}>
      <div>
        <img src={Image} alt={ImgText} />
        <Title H="h3">{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </div>

      <Button width="200px" height="50px" onClick={() => alert("Cadastrado!")}>
        {buttonText}
      </Button>
    </div>
  );
};

export default CardBox;