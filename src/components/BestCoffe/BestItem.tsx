import React from 'react';
import styles from './BestItem.module.css';

type BestItemProps = {
    src: string;
    price: number;
    title: string;
};

const BestItem: React.FC<BestItemProps> = ({ src, price, title }) => {
    return (
        <div className={styles.bestInner}>
            <div className={styles.bestItem}>
                <img className={styles.bestImg} src={src} alt="best" />
                <h2 className={styles.bestTitle}>{title}</h2>
                <p className={styles.bestPrice}>{price}$</p>
            </div>
        </div>
    );
};

export default BestItem;
