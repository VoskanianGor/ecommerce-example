import classNames from 'classnames'
import type { FC } from 'react'
import styles from './styles.module.scss'

interface IDiscountBadge {
	amount: number
	className?: string
}

const DiscountBadge: FC<IDiscountBadge> = ({ amount, className = '' }) => {
	return (
		<div className={classNames(styles.badge, className)}>
			<span className={styles.text}>{amount}%</span>
		</div>
	)
}

export default DiscountBadge
