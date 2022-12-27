import classNames from 'classnames'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import DiscountBadge from '~components/badges/discount'
import ButtonWithCircle from '~components/buttons/button-with-circle'
import type { FCC } from '~interfaces/fcc'
import styles from './styles.module.scss'

interface IBanner {
	intent: 'light' | 'dark'
	title: string
	link: string
	discount: number
	image: StaticImageData
}

const Banner: FCC<IBanner> = ({
	children,
	intent,
	title,
	link,
	image,
	discount,
}) => {
	return (
		<div className={classNames(styles.banner, styles[intent])}>
			<Image className={styles.image} src={image} alt={title} />
			<div className={styles.content}>
				<DiscountBadge amount={discount} className={styles.badge} />
				<h3 className={styles.title}>{children}</h3>
				<ButtonWithCircle
					link={link}
					intent={intent === 'light' ? 'dark' : 'light'}
				>
					Выбрать
				</ButtonWithCircle>
			</div>
		</div>
	)
}

export default Banner
