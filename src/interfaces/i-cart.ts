import type IProduct from './i-product'

interface ICartProduct extends IProduct {
	quantity: number
}
interface ICart {
	id: number
	userId: number
	date: string
	products?: ICartProduct[]
}

export type { ICart, ICartProduct }
