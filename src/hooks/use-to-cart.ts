import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import type IProduct from '~interfaces/i-product'
import useCartStore, { getIsInCart } from '~store/cart.store'

const useToCart = (product: IProduct) => {
	const [isInCart, setIsInCart] = useState(false)
	const [quantity, setQuantity] = useState(0)
	const { addToCart, removeFromCart } = useCartStore()

	useEffect(() => {
		setIsInCart(getIsInCart(product.id))
	}, [product.id])

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

	return { quantity, isInCart, handleClick, increaseQuantity, decreaseQuantity }
}

export default useToCart
