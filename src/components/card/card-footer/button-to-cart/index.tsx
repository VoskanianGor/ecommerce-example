import classNames from 'classnames'
import type { FC, MouseEvent } from 'react'
import { useState } from 'react'
import type IProduct from '~interfaces/i-product'
import MinusIcon from '~assets/icons/minus.svg'
import PlusIcon from '~assets/icons/plus.svg'
import useCartStore from '~store/cart.store'
import styles from './styles.module.scss'

interface IButtonToCart {
	product: IProduct
}

const ButtonToCart: FC<IButtonToCart> = ({ product }) => {
	const [isInCart, setIsInCart] = useState(false)
	const [quantity, setQuantity] = useState(0)
	const { addToCart, removeFromCart } = useCartStore()

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		isInCart
			? removeFromCart(product.id)
			: addToCart({
					...product,
					quantity: quantity === 0 ? 1 : quantity,
			  })

		setIsInCart(!isInCart)
	}

	const increaseQuantity = () => setQuantity(prev => prev + 1)

	const decreaseQuantity = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0))

	return (
		<div className={styles.buttonWrapper}>
			<button
				className={classNames(styles.button, {
					[styles.inCart]: isInCart,
				})}
				onClick={handleClick}
				data-productid={product.id}
			>
				{isInCart ? 'В корзине' : 'В корзину'}
			</button>
			{!isInCart && (
				<div className={styles.control}>
					<button className={styles.controlElement} onClick={decreaseQuantity}>
						<MinusIcon />
					</button>
					{quantity}
					<button className={styles.controlElement} onClick={increaseQuantity}>
						<PlusIcon />
					</button>
				</div>
			)}
		</div>
	)
}

export default ButtonToCart
