import classNames from 'classnames'
import { useState } from 'react'
import FavoriteIcon from '~assets/icons/favorite.svg'
import FavoriteIcon2 from '~assets/icons/fav.svg'
import styles from './styles.module.scss'

const ButtonToFavorite = ({ _isFavorite, onClick }) => {
	const [isFavorite, setIsFavorite] = useState(_isFavorite)

	const handleClick = () => {
		setIsFavorite(!isFavorite)
	}

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
