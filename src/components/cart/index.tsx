import classNames from 'classnames'
import { useState } from 'react'
import CartIcon from '~assets/icons/cart.svg'
import useCartStore from '~store/cart.store'
import getPriceInRub from '~utils/get-price-in-rub'
import ProductItem from '../product-item'
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
