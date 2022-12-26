import Link from 'next/link'
import type { FC } from 'react'
import type IRating from '~interfaces/i-rating'
import getNoun from '~utils/get-noun'
import Stars from './stars'
import styles from './styles.module.scss'

const Rating: FC<IRating> = ({ rate, count }) => {
	return (
		<div className={styles.rating}>
			<div className={styles.stars}>
        <Stars />
      </div>
			{/* TODO: redirect to reviews page or open review modal */}
			<Link href={''} className={styles.reviews}>
				{`${count} ${getNoun(count, ['отзыв', 'отзыва', 'отзывов'])}`}
			</Link>
		</div>
	)
}

export default Rating
