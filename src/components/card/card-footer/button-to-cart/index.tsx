import classNames from 'classnames'
import type { FC, MouseEvent } from 'react'
import { useState } from 'react'
import MinusIcon from '~assets/icons/minus.svg'
import PlusIcon from '~assets/icons/plus.svg'
import styles from './styles.module.scss'

interface IButtonToCart {
	productId: number
}

const ButtonToCart: FC<IButtonToCart> = ({ productId }) => {
	const [isInCart, setIsInCart] = useState(false)

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		const id = e.currentTarget.dataset.productid

		setIsInCart(!isInCart)
	}

	return (
		<div className={styles.buttonWrapper}>
			<button
				className={classNames(styles.button, {
					[styles.inCart]: isInCart,
				})}
				onClick={handleClick}
				data-productid={productId}
			>
				{isInCart ? 'В корзине' : 'В корзину'}
			</button>
			{!isInCart && (
				<div className={styles.control}>
					<button className={styles.controlElement}>
						<MinusIcon />
					</button>
					{isInCart ? '1' : '0'}
					<button className={styles.controlElement}>
						<PlusIcon />
					</button>
				</div>
			)}
		</div>
	)
}

export default ButtonToCart
