import { useEffect, useState } from 'react'
import type IProduct from '~interfaces/i-product'
import useFavoriteStore, { getIsFavorite } from '~store/favorites.store'

const useToFavorite = (id: number, product: IProduct) => {
	const { addToFavorites, removeFromFavorites } = useFavoriteStore()
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		setIsFavorite(getIsFavorite(id))
	}, [id])

	const handleClick = () => {
		isFavorite ? removeFromFavorites(id) : addToFavorites(product)
		setIsFavorite(!isFavorite)
	}

	return { isFavorite, handleClick }
}

export default useToFavorite
