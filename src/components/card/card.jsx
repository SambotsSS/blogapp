import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const card = ({key,item}) => {
    return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et qui, officiis, sed fugit reiciendis molestias commodi alias voluptas quibusdam harum dolor velit nobis consequuntur, quasi ad a quis inventore illo sequi? Incidunt!</p>
                <Link href="/">Read More</Link>
            </div>
            </div>
    )
}

export default card
