import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCoffees } from '../../redux/coffee/coffeeSlice';
import { useDispatch, useSelector } from 'react-redux';

import iconDark from '../icons/dark-beans-logo.svg';
import styles from './OurCoffee.module.css';

const sort: string[] = ['Brazil', 'Kenya', 'Columbia'];

type Coffees = {
    id: number;
    imageUrl: string;
    title: string;
    country: string;
    description: string;
    price: number;
};

const OurCoffee: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCoffees());
    }, [dispatch]);
    const coffees: Coffees[] = useSelector((state) => state.coffee.coffees);
    return (
        <div className="container">
            <div className={styles.intro}>
                <h1 className={styles.introTitle}>Our Coffee</h1>
            </div>

            <div className={styles.beans}>
                <div>
                    <img
                        className={styles.beansImg}
                        src="/image/girl.jpg"
                        alt="girl"
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

            <div className={styles.searchBlock}>
                <div className={styles.input}>
                    <label htmlFor="">Looking for</label>
                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSearch(e.target.value)
                        }
                        value={search}
                        type="search"
                        name=""
                        id=""
                        placeholder="start tryping here..."
                    />
                </div>
                <div className={styles.filter}>
                    <h4>Or filter</h4>
                    <ul>
                        {sort.map((item, index) => (
                            <li
                                onClick={() => dispatch(getCoffees(item))}
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.coffeeItems}>
                {coffees
                    ?.filter((obj) => {
                        if (
                            obj.title
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            return true;
                        }

                        return false;
                    })
                    .map((item) => (
                        <div key={item.id} className={styles.card}>
                            <Link to={item.id.toString()}>
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
                    ))}
            </div>
        </div>
    );
};

export default OurCoffee;
