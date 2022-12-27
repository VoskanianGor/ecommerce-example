import { proxy, subscribe, useSnapshot } from 'valtio'
import type ICart from '~interfaces/i-cart'
import type IProduct from '~interfaces/i-product'
import { getLocal, removeLocal, setLocal } from '~utils/local-storage'

interface ICartStore {
	cart: ICart
	addToCart: (product: IProduct) => void
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
	addToCart: (product: IProduct) => {
		cartStore.cart.products?.push(product)
	},
	removeFromCart: (id: number) => {
		cartStore.cart.products = cartStore.cart.products?.filter(p => p.id !== id)
	},
	clearCart: () => {
		cartStore.cart.products = []
		removeLocal(CART_LOCAL_KEY)
	},
})

subscribe(cartStore, () => {
	setLocal(CART_LOCAL_KEY, cartStore.cart)
})

const useCartStore = () => useSnapshot(cartStore)

export default useCartStore
