import type { FC } from 'react'
import type ICard from 'src/interfaces/i-card'
import styles from './styles.module.scss'

const CardBody: FC<ICard> = ({
	category,
	price,
	rating,
	title,
}) => {
	return (
		<div className={styles.body}>
			<div className={styles.category}>{type}</div>
			<div className={styles.rating}>{rating}</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.price}>{price}</div>
		</div>
	)
}

export default CardBody
