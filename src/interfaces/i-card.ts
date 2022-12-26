import type IRating from './i-rating'

interface ICard {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: IRating
}

export default ICard
