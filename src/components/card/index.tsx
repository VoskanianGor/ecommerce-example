import styles from './styles.module.scss'

const Card = () => {


  return (
    <div className={styles.card}>
      <div>
        card image
      </div>
      <div>
        card body
      </div>
      <div>
        card footer
      </div>
    </div>
  )
}

export default Card