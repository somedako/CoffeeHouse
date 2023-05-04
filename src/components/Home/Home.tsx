import React from 'react';
import Best from '../BestCoffe/Best';

import styles from './Home.module.css';
import icon from '../icons/intro-beans-logo.svg';
import iconDark from '../icons/dark-beans-logo.svg';

const Home: React.FC = () => {
    return (
        <>
            <div className={styles.intro}>
                <h1 className={styles.introTitle}>
                    Everything You Love About Coffee
                </h1>
                <img className={styles.introIcon} src={icon} alt="icon" />
                <h2 className={styles.introSubtitle}>
                    We makes every day full of energy and taste
                    <br /> Want to try our beans?
                </h2>
                <button className={styles.introBtn}>More</button>
            </div>
            <div className={styles.about}>
                <div className="container">
                    <h2 className={styles.aboutTitle}>About us</h2>
                    <img src={iconDark} alt="icon" />
                    <div className={styles.aboutDescr}>
                        <p>
                            Extremity sweetness difficult behaviour he of. On
                            disposal of as landlord horrible. Afraid at highly
                            months do things on at. Situation recommend
                            objection do intention so questions. As greatly
                            removed calling pleased improve an. Last ask him
                            cold feel met spot shy want. Children me laughing we
                            prospect answered followed. At it went is song that
                            held help face.
                            <br />
                            <br /> Now residence dashwoods she excellent you.
                            Shade being under his bed her, Much read on as draw.
                            Blessing for ignorant exercise any yourself
                            unpacked. Pleasant horrible but confined day end
                            marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope.
                            Secure active living depend son repair day ladies
                            now.
                        </p>
                    </div>
                </div>
            </div>
            <Best />
        </>
    );
};

export default Home;
