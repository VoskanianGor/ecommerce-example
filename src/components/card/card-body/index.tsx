import type { FC } from 'react'
import type ICard from 'src/interfaces/i-card'
import getPriceInRub from '~utils/get-price-in-rub'
import Rating from './rating'
import styles from './styles.module.scss'

const EXCHANGE_RATE = 70

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
			<div className={styles.rating}>
				<Rating {...rating} />
			</div>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.price}>
				{getPriceInRub(price, EXCHANGE_RATE)} <span className={styles.items}>/шт.</span>
			</p>
			<h6 className="hidden">{description}</h6>
		</div>
	)
}

export default CardBody
