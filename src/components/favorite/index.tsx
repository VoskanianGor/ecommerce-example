import classNames from 'classnames'
import { useState } from 'react'
import FavoriteIcon from '~assets/icons/favorite.svg'
import useFavoriteStore from '~store/favorites.store'
import ProductItem from '../product-item'
import styles from './styles.module.scss'

const Favorite = () => {
	const [open, setOpen] = useState(false)
	const { favorites } = useFavoriteStore()

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<div
			className={classNames(styles.cart, {
				[styles.open]: open,
			})}
			onClick={handleClick}
		>
			{!open && <FavoriteIcon className={styles.icon} />}
			{open && (
				<div>
					{favorites?.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			)}
		</div>
	)
}

export default Favorite
