import Styles from './styles.module.scss';


const CardMetric = ({ children }) => {
  return (
    <div  className={`${Styles.card}`}> 
      {children}
    </div>
  )
}

export default CardMetric
