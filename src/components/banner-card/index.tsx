import type { FC } from 'react'
import type { IBanner } from 'src/pages/banner-data'
import ArrowIcon from '~assets/icons/arrow.svg'
import Banner from '~components/banner'
import styles from './styles.module.scss'

interface IBannerCard {
	title: string
	bannerData: IBanner[]
}

const bannerCard: FC<IBannerCard> = ({ bannerData, title }) => {
	return (
		<div className={styles.bannerCard}>
			<h2 className={styles.title}>{title}</h2>
			<ArrowIcon className={styles.icon} />
			{bannerData.map(banner => (
				<Banner key={banner.id} {...banner}>
					{banner.title}
				</Banner>
			))}
		</div>
	)
}

export default bannerCard
