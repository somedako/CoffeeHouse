import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './CoffeeItem.module.css';
import iconDark from '../icons/dark-beans-logo.svg';

const CoffeeItem: React.FC = () => {
    const coffees = useSelector((state: any) => state.coffee.coffees);
    const params = useParams();

    const coffee = coffees.find(
        (coffee: any) => coffee.id.toString() === params.id
    );

    return (
        <>
            <div className={styles.intro}>
                <h1 className={styles.introTitle}>Our Coffee</h1>
            </div>

            <div className={styles.beans}>
                <div>
                    <img
                        className={styles.beansImg}
                        src={coffee.imageUrl}
                        alt="coffee"
                    />
                </div>

                <div className={styles.about}>
                    <h2 className={styles.aboutTitle}>About it</h2>
                    <img src={iconDark} alt="icon" />
                    <div className={styles.aboutDescr}>
                        <p>Country: {coffee.country}</p>
                        <p>Description: {coffee.description}</p>
                        <p>Price: {coffee.price}$</p>
                    </div>
                </div>
            </div>
            <Link className={styles.itemLink} to={'/about'}>
                Go back
            </Link>
        </>
    );
};

export default CoffeeItem;
