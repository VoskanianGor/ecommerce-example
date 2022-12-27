import classNames from 'classnames'
import type { FC } from 'react'
import type IProduct from '~interfaces/i-product'
import MinusIcon from '~assets/icons/minus.svg'
import PlusIcon from '~assets/icons/plus.svg'
import useToCart from '~hooks/use-to-cart'
import styles from './styles.module.scss'

interface IButtonToCart {
	product: IProduct
}

const ButtonToCart: FC<IButtonToCart> = ({ product }) => {
	const {
		quantity,
		isInCart,
		increaseQuantity,
		decreaseQuantity,
		handleClick,
	} = useToCart(product)

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
