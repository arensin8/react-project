import React, { Component } from 'react';
import styles from "./Cards.module.css";
import pr1 from "../images/pr1.jpg";
import pr2 from "../images/pr2.jpg";
import pr3 from "../images/pr3.jpg";
import pr4 from "../images/pr4.jpg";

import Card from './Card';


class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={pr1} name="Only & Sons oversized T-shirt" price="25 $"/>
                <Card image={pr2} name="Tommy Hilfiger T-shirt" price="20 $"/>
                <Card image={pr3} name="Reebok red trainer" price="60 $"/>
                <Card image={pr4} name="Nike sweatpants in black" price="50 $"/>
            </div>
        );
    }
}

export default Cards;