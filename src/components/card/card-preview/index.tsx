import Image from 'next/image'
import type { FC } from 'react'
import BestsellerBadge from '~components/badges/bestseller'
import styles from './styles.module.scss'

interface ICardPreview {
	src: string
	alt: string
  ratingCount: number
}

const RATING_COUNT_THRESHOLD = 300

const CardPreview: FC<ICardPreview> = ({ src, alt, ratingCount }) => {
	return (
		<div className={styles.preview}>
			{ratingCount >= RATING_COUNT_THRESHOLD && <BestsellerBadge />}
			<Image
				className={styles.image}
				src={src}
				alt={alt}
				width={220}
				height={220}
				priority
			/>
		</div>
	)
}

export default CardPreview
