import { FC } from 'react'
import Card from '~components/card'
import IProduct from '~interfaces/i-product'

interface IProductCards {
	products: IProduct[]
}

const ProductCards: FC<IProductCards> = ({ products }) => {
	return (
		<>
			{products.map(product => (
				<Card key={product.id} {...product} />
			))}
		</>
	)
}

export default ProductCards
