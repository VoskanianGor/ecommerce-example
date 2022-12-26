import type { FC } from 'react'
import type IProduct from '~interfaces/i-product'
import CardBody from './card-body'
import CardFooter from './card-footer'
import CardPreview from './card-preview'
import styles from './styles.module.scss'

const Card: FC<IProduct> = props => {
	return (
		<div className={styles.card} title={props.description}>
			<CardPreview
				src={props.image}
				alt={props.title}
				ratingCount={props.rating.count}
			/>
			<CardBody {...props} />
			<CardFooter productId={props.id} />
		</div>
	)
}

export default Card
