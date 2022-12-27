import classNames from 'classnames'
import { NextPage } from 'next'
import Head from 'next/head'
import BannerCard from '~components/banner-card'
import Cart from '~components/cart'
import Favorite from '~components/favorite'
import ProductCards from '~components/product-cards'
import IProduct from '~interfaces/i-product'
import bannerData from '../constants/banner-data'
import styles from './styles.module.scss'

interface IHome {
	products: IProduct[]
}

export async function getServerSideProps() {
	const res = await fetch('https://fakestoreapi.com/products')
	const products = (await res.json()) as IProduct[]

	return {
		props: {
			products,
		},
	}
}

const Home: NextPage<IHome> = ({ products }) => {
	return (
		<>
			<Head>
				<title>Wonderful things</title>
				<meta
					name="description"
					content="Shop our wide selection of high-quality outdoor gear and equipment for all your adventures. From tents and sleeping bags to backpacks and hiking boots, we have everything you need for your next outdoor adventure. Find great deals on top brands and free shipping on all orders."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className={classNames('container', styles.section)}>
				<Cart />
				<Favorite />
				<div className={styles.cards}>
					<BannerCard
						bannerData={bannerData}
						title="Всё для комфортной работы"
					/>
					<ProductCards products={products} />
				</div>
			</section>
		</>
	)
}

export default Home
