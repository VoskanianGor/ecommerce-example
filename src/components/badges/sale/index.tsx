import type { FC } from 'react'
import styles from './styles.module.scss'

interface ISaleBadge {
	amount: number
}

const SaleBadge: FC<ISaleBadge> = ({ amount }) => {
	return (
		<div className={styles.badge}>
			<span className={styles.text}>{amount}%</span>
		</div>
	)
}

export default SaleBadge
