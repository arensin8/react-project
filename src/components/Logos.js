import React from 'react';

import styles from "./Logos.module.css";
import nike from "../images/nike.png";
import adidas from "../images/adidas.png";
import reebok from "../images/Reebok.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who supports us</h3>
            <div>
                <img src={nike} />
                <img src={adidas} />
                <img src={reebok} />
            </div>
        </div>
    );
};

export default Logos;