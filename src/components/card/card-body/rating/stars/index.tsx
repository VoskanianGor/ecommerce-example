import type { FC } from 'react'
import classNames from 'classnames'
import StarIcon from '~assets/icons/star.svg'
import styles from './styles.module.scss'

interface IStars {
	rate: number
}

const Stars: FC<IStars> = ({ rate }) => {
	const amount = Math.round(rate)
	const restStars = 5 - amount

	return (
		<div className={styles.stars}>
			{[...Array(amount)].map((_, i) => (
				<StarIcon className={classNames(styles.star, styles.rated)} key={i} />
			))}
			{[...Array(restStars)].map((_, i) => (
				<StarIcon className={styles.star} key={i} />
			))}
		</div>
	)
}

export default Stars
