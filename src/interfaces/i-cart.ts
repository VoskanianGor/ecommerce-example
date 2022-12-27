import type IProduct from './i-product'

interface ICart {
	id: number
	userId: number
	date: string
	products?: IProduct[]
}

export default ICart
