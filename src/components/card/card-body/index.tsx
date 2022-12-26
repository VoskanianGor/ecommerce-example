import type { FC } from 'react'
import type ICard from 'src/interfaces/i-card'
import styles from './styles.module.scss'

const CardBody: FC<ICard> = ({
	category,
	price,
	rating,
	title,
	description,
}) => {
	return (
		<div className={styles.body} title={description}>
			<div className={styles.category}>{category}</div>
			<div className={styles.rating}>{rating}</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.price}>{price}</div>
			<h6 className="hidden">{description}</h6>
		</div>
	)
}

export default CardBody
