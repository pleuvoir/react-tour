import styles from '../styles/CombineCard.module.css'

export const CombinedCard = (props) => {
    return <div className={styles.div}>{props.children}</div>
}

