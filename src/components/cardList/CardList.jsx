import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Card from "../card/card";

const CardList = ({ data }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {data?.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default CardList;
