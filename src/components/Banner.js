import React from 'react';
import baner from "../images/banner5.jpg";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.container} >
            <img src={baner} alt="banner" />
                <div className={styles.textContainer} >
                 <h1>Aren Sinaei</h1>
                    <p>
                    This is my <span>website</span>
                    </p>
                </div>
            </div>
    );
};

export default Banner;