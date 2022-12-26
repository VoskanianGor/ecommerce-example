import Image from 'next/image'
import CardBody from './card-body'
import CardFooter from './card-footer'
import styles from './styles.module.scss'

const data = {
	id: 1,
	title:
		'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
	price: 109.95,
	description:
		'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
	category: "men's clothing",
	image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
	rating: {
		rate: 3.9,
		count: 1,
	},
}

const Card = () => {
	return (
		<div className={styles.card} title="sdfsdfsdfsd">
			<Image
        className={styles.image}
				src={data.image}
				alt={data.title}
				width={220}
				height={220}
				priority
			/>
			<CardBody {...data} />
			<CardFooter productId={data.id} />
		</div>
	)
}

export default Card
