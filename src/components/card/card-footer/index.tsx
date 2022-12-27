import type { FC } from 'react'
import type IProduct from '~interfaces/i-product'
import ButtonToCart from './button-to-cart'
import ButtonToFavorite from './button-to-favorite'
import styles from './styles.module.scss'

interface ICardFooter {
	product: IProduct
}

const CardFooter: FC<ICardFooter> = ({ product }) => {
	return (
		<div className={styles.cardFooter}>
			<ButtonToCart product={product} />
			<ButtonToFavorite product={product} />
		</div>
	)
}

export default CardFooter
