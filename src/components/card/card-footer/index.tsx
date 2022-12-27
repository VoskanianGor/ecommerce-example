import ButtonToCart from './button-to-cart'
import styles from './styles.module.scss'
import ButtonToFavorite from './button-to-favorite'

interface ICardFooter {

}

const CardFooter = ({productId}) => {


  return (
    <div className={styles.cardFooter}>
      <ButtonToCart productId={productId} />
      {/* <FavoriteIcon className={styles.favorite} /> */}
      <ButtonToFavorite />
    </div>
  )

}

export default CardFooter