import ButtonToCart from './button-to-cart'
import FavoriteIcon from '~assets/icons/favorite.svg'
import styles from './styles.module.scss'
interface ICardFooter {

}

const CardFooter = ({productId}) => {


  return (
    <div className={styles.cardFooter}>
      <ButtonToCart productId={productId} />
      <FavoriteIcon className={styles.favorite} />
      {/* <ButtonToFavorite /> */}
    </div>
  )

}

export default CardFooter