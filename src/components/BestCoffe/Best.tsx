import React from 'react';
import BestItem from './BestItem';
import styles from './Best.module.css';

type BestItem = {
    id: number;
    src: string;
    title: string;
    price: number;
};

const bestItem: BestItem[] = [
    {
        id: 1,
        src: 'image/coffee_1.jpg',
        title: 'Solimo Coffee Beans 2 kg',
        price: 10.73,
    },
    {
        id: 2,
        src: 'image/coffee_2.jpg',
        title: 'Presto Coffee Beans 1 kg',
        price: 15.99,
    },
    {
        id: 3,
        src: 'image/coffee_3.jpg',
        title: 'AROMISTICO Coffee 1 kg',
        price: 6.99,
    },
];

const Best: React.FC = () => {
    return (
        <div className={styles.best}>
            <div className="container">
                <h2 className={styles.bestTitle}>Our best</h2>
                <div className={styles.bestContainer}>
                    {bestItem.map((item) => (
                        <BestItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Best;
