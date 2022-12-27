import Image from 'next/image'
import type { FC } from 'react'
import { EXCHANGE_RATE } from '~constants/index'
import { ICartProduct } from '~interfaces/i-cart'
import getPriceInRub from '~utils/get-price-in-rub'
import styles from './styles.module.scss'

interface IProductItem {
	product: ICartProduct
}

const ProductItem: FC<IProductItem> = ({ product }) => {
	const { title, image, price, quantity } = product

	return (
		<div className={styles.product}>
			<div className={styles.content}>
				<h2>{title}</h2>
				<div className={styles.price}>
					<strong>{getPriceInRub(price, EXCHANGE_RATE)}</strong>
					<p>кол-во: {quantity}</p>
				</div>
			</div>
			<Image
				className={styles.image}
				src={image}
				alt={title}
				width={50}
				height={50}
			/>
		</div>
	)
}

export default ProductItem
