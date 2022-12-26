import type IRating from './i-rating'

interface IProduct {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: IRating
}

export default IProduct
