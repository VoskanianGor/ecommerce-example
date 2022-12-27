import Link from 'next/link'
import type { FC } from 'react'
import type IProduct from '~interfaces/i-product'
import getPriceInRub from '~utils/get-price-in-rub'
import Rating from './rating'
import styles from './styles.module.scss'

const EXCHANGE_RATE = 70

const CardBody: FC<IProduct> = ({
	category,
	price,
	rating,
	title,
	description,
}) => {
	return (
		<div className={styles.body} title={description}>
			<div className={styles.categoryWrapper}>
				<h5 className={styles.category}>{category}</h5>
				{rating && <Rating {...rating} />}
			</div>
			<Link href="">
				<h2 className={styles.title}>{title}</h2>
			</Link>
			<p className={styles.price}>
				{getPriceInRub(price, EXCHANGE_RATE)}{' '}
				<span className={styles.items}>/шт.</span>
			</p>
			<h6 className="hidden">{description}</h6>
		</div>
	)
}

export default CardBody
