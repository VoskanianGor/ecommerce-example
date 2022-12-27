import classNames from 'classnames'
import type { FC } from 'react'
import FavoriteIcon from '~assets/icons/favorite.svg'
import type IProduct from '~interfaces/i-product'
import useToFavorite from '~hooks/use-to-favorite'
import styles from './styles.module.scss'

interface IButtonToFavorite {
	product: IProduct
}

const ButtonToFavorite: FC<IButtonToFavorite> = ({ product }) => {
	const { isFavorite, handleClick } = useToFavorite(product.id, product)

	return (
		<button className={styles.button} onClick={handleClick} type="button">
			<FavoriteIcon
				className={classNames(styles.icon, {
					[styles.favorite]: isFavorite,
				})}
			/>
		</button>
	)
}

export default ButtonToFavorite
