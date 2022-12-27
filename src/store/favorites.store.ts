import { proxy, subscribe, useSnapshot } from 'valtio'
import type { ICartProduct } from '~interfaces/i-cart'
import IProduct from '~interfaces/i-product'
import { getLocal, setLocal } from '~utils/local-storage'

interface IFavoriteStore {
	favorites: IProduct[]
	addToFavorites: (product: IProduct) => boolean
	removeFromFavorites: (id: number) => boolean
}

const initialFavorites = getLocal<IProduct[]>('favorites') || []

const favoriteStore = proxy<IFavoriteStore>({
	favorites: initialFavorites,
	addToFavorites: product => {
		favoriteStore.favorites.push(product)

		return true
	},
	removeFromFavorites: id => {
		favoriteStore.favorites = favoriteStore.favorites.filter(p => p.id !== id)

		return false
	},
})

subscribe(favoriteStore, () => {
	setLocal('favorites', favoriteStore.favorites)
})

const useFavoriteStore = () => useSnapshot(favoriteStore)

export const getIsFavorite = (id: number) => {
	const { favorites } = favoriteStore

	return favorites.some(p => p.id === id)
}

export default useFavoriteStore
