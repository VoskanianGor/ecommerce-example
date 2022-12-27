import classNames from 'classnames'
import Link from 'next/link'
import type { FCC } from '~interfaces/fcc'
import styles from './styles.module.scss'

interface IButtonWithCircle {
	intent: 'light' | 'dark'
	link: string
}

const ButtonWithCircle: FCC<IButtonWithCircle> = ({
	children,
	intent,
	link,
}) => {
	return (
		<Link href={link}>
			<button className={classNames(styles.button, styles[intent])}>
				{children}
				<span className={styles.circle} />
			</button>
		</Link>
	)
}

export default ButtonWithCircle
