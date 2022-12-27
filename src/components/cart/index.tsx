import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import CartIcon from '~assets/icons/cart.svg'
import { EXCHANGE_RATE } from '~constants/index'
import useCartStore from '~store/cart.store'
import getPriceInRub from '~utils/get-price-in-rub'
import ProductItem from './product-item'
import styles from './styles.module.scss'

const Cart = () => {
	const [open, setOpen] = useState(false)
	const { cart, count, totalPrice } = useCartStore()

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<div
			className={classNames(styles.cart, {
				[styles.hasItems]: count > 0,
				[styles.open]: open,
			})}
			data-count={count}
			onClick={handleClick}
		>
			{!open && <CartIcon className={styles.icon} />}
			{open && (
				<div>
					<h2>Корзина</h2>
					{cart.products?.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			)}
			{open && (
				<div className={styles.total}>
					<p>Итого:</p>
					<strong>{getPriceInRub(totalPrice)}</strong>
				</div>
			)}
		</div>
	)
}

export default Cart
