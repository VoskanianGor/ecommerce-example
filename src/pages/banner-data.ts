import type { StaticImageData } from 'next/image'
import BannerImage1 from '~assets/images/banner-image-1.png'
import BannerImage2 from '~assets/images/banner-image-2.png'

export interface IBanner {
	id: number
	title: string
	discount: number
	image: StaticImageData
	link: string
	intent: 'light' | 'dark'
}

const bannerData: IBanner[] = [
	{
		id: 1,
		title: 'на товары для кабинета',
		discount: -25,
		image: BannerImage1,
		link: '/shop',
		intent: 'dark',
	},
	{
		id: 2,
		title: 'Скидка \n на периферию для компьютера',
		discount: 10,
		image: BannerImage2,
		link: '/shop',
		intent: 'light',
	},
]

export default bannerData
