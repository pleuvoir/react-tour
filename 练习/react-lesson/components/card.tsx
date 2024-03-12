interface CardProps {
    title: string
    age: number
    desc?: string  // 使用 ? 符号使 desc 成为可选属性
}

import styles from '../styles/Card.module.css'


function Card(props: CardProps) {
    return (
        <div className={styles.test}>
            <ol>
                <li>{props.title}</li>
                <li>{props.age}</li>
                <li>{props.desc}</li>
            </ol>
        </div>
    )
}


export default Card