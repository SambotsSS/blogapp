import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
            </h1>
        <div className={styles.post}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className={styles.postDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut nostrum, doloremque assumenda tempore perferendis harum facere unde rem quos. Ad accusamus facilis, in sequi nulla repellat. Quis, blanditiis laboriosam!</p>
                <button className={styles.button}>Read More</button>
            </div>
        </div>
        </div>

    )
}

export default featured
