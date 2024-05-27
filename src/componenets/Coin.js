import React from 'react';

//Style
import styles from './Coin.module.css'

const Coin = (props) => {
        return (
        <div className={styles.container}>
            <img className={styles.image}src={props.image} alt='name'/>
            <span className={styles.name}>{props.name}</span>
            <span className={styles.symbol}>{props.symbol.toUpperCase()}</span>
            <span className={styles.price}>${props.currentPrice.toLocaleString()}</span>
            <span className={props.priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{props.priceChange.toFixed(2)}</span>
            <span className={styles.marketCap}>${props.marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;