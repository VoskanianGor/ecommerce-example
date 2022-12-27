import { proxy, subscribe, useSnapshot } from 'valtio'
import { EXCHANGE_RATE } from '~constants/index'
import type { ICart, ICartProduct } from '~interfaces/i-cart'
import { getLocal, setLocal } from '~utils/local-storage'

interface ICartStore {
	cart: ICart
	totalPrice: number
	addToCart: (product: ICartProduct) => void
	removeFromCart: (id: number) => void
	clearCart: () => void
}

const CART_LOCAL_KEY = 'cart'

const initialCart = getLocal<ICart>(CART_LOCAL_KEY) || {
	id: 1,
	userId: 1,
	date: new Date().toISOString(),
	products: [],
}

const cartStore = proxy<ICartStore>({
	cart: initialCart,
	addToCart: (product: ICartProduct) => {
		cartStore.cart.products?.push(product)
	},
	removeFromCart: (id: number) => {
		cartStore.cart.products = cartStore.cart.products?.filter(p => p.id !== id)
	},
	clearCart: () => {
		cartStore.cart.products = []
	},
	get totalPrice() {
		const total =
			this.cart.products?.reduce(
				(total: number, item: ICartProduct) =>
					total + item.price * item.quantity,
				0
			) || 0

		return Math.round(total * EXCHANGE_RATE) as number
	},
})

subscribe(cartStore, () => {
	setLocal(CART_LOCAL_KEY, cartStore.cart)
})

const useCartStore = () => useSnapshot(cartStore)

export const getIsInCart = (id: number) => {
	const {
		cart: { products },
	} = cartStore

	return products?.some(p => p.id === id) || false
}

export default useCartStore
