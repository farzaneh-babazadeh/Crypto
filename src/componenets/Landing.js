import React,{ useEffect,useState} from 'react';
// API
import { getCoin } from '../services/api';

//Style
import styles from './Landing.module.css'

//Componenets
import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {

    const[coins, setCoins]=useState([]);
    const[search,setSearch]=useState("");
    
    useEffect(()=>{
        fetchAPI()

    },[])
    const fetchAPI = async()=>{
        setCoins(await getCoin());
    } 

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>   
            
            <input className={styles.input} type='text ' placeholder='Search' value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
            {
                coins.length? <div className={styles.coinContainer}>
                {
                    //  coins.map(coin=><p key={coin.id}>{coin.name}</p>)
                    searchCoins.map(coin=><Coin key={coin.id}  name={coin.name} image={coin.image} 
                        symbol={coin.symbol} currentPrice={coin.current_price} 
                        marketCap ={coin.market_cap }   priceChange={coin.price_change_percentage_24h} />)
                }
            </div> :

                <Loader/>  
            }
           
        </>
    );
};

export default Landing;