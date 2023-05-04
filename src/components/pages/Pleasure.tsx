import React, { useEffect } from 'react';

import { getCoffees } from '../../redux/coffee/coffeeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import iconDark from '../icons/dark-beans-logo.svg';
import styles from './Pleasure.module.css';

const Pleasure: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCoffees());
    }, [dispatch]);
    const coffees = useSelector((state: {}) => state.coffee.coffees);
    return (
        <div className="container">
            <div className={styles.introPleasure}>
                <h1 className={styles.pleasureTitle}>For your pleasure</h1>
            </div>

            <div className={styles.beans}>
                <div>
                    <img
                        className={styles.beansImg}
                        src="/image/cup.jpg"
                        alt="cup"
                    />
                </div>

                <div className={styles.about}>
                    <h2 className={styles.aboutTitle}>About our beans</h2>
                    <img src={iconDark} alt="icon" />
                    <div className={styles.aboutDescr}>
                        <p>
                            Extremity sweetness difficult behaviour he of. On
                            disposal of as landlord horrible.
                            <br />
                            <br />
                            Afraid at highly months do things on at. Situation
                            recommend objection do intention so questions. As
                            greatly removed calling pleased improve an. Last ask
                            him cold feel met spot shy want. Children me
                            laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.coffeeItems}>
                {coffees?.map(
                    (item: {
                        id: number;
                        imageUrl: string;
                        title: string;
                        country: string;
                        price: number;
                    }) => (
                        <div key={item.id} className={styles.card}>
                            <Link to={`about/${item.id.toString()}`}>
                                <img src={item.imageUrl} alt="coffee" />
                                <div>
                                    <h4>{item.title}</h4>
                                    <div className={styles.cardDesc}>
                                        <p>{item.country}</p>
                                        <p>{item.price}$</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Pleasure;
