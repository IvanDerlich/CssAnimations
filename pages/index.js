import styles from '../styles/city.module.scss'
import { useState } from 'react'

export default function City() {
    
    const clickForest = () => {
        if (!ludusSelected && !coliseumSelected && !marketSelected) {
            setForestSelected(!forestSelected)
            setBackgroundShadowed(!backgroundShadowed)
            setLudusShadowed(!ludusShadowed)
            setColiseumShadowed(!coliseumShadowed)
            setMarketShadowed(!marketShadowed)
        }
    }
    const clickLudus = () => {
        if (!forestSelected && !coliseumSelected && !marketSelected){
            setLudusSelected(!ludusSelected)
            setBackgroundShadowed(!backgroundShadowed)
            setForestShadowed(!forestShadowed)
            setColiseumShadowed(!coliseumShadowed)
            setMarketShadowed(!marketShadowed)
        }
    }

    const clickColiseum = () => {
        if (!forestSelected && !ludusSelected && !marketSelected){
            setColiseumSelected(!coliseumSelected)
            setBackgroundShadowed(!backgroundShadowed)
            setForestShadowed(!forestShadowed)
            setLudusShadowed(!ludusShadowed)
            setMarketShadowed(!marketShadowed)
        }
    }

    const clickMarket = () => {
        if (!forestSelected && !ludusSelected && !coliseumSelected){
            setMarketSelected(!marketSelected)
            setBackgroundShadowed(!backgroundShadowed)
            setForestShadowed(!forestShadowed)
            setLudusShadowed(!ludusShadowed)
            setColiseumShadowed(!coliseumShadowed)
        }
    }

    const [backgroundShadowed, setBackgroundShadowed] = useState(false);

    const [forestShadowed, setForestShadowed] = useState(false);
    const [forestSelected, setForestSelected] = useState(false);
    const forestShadowedOrNot = forestShadowed ? styles.forestShadowed: '';
    const forestSelectedOrNot = forestSelected ? styles.forestSelected: '';

    const [coliseumShadowed, setColiseumShadowed] = useState(false);
    const [coliseumSelected, setColiseumSelected] = useState(false);
    const coliseumShadowedOrNot = coliseumShadowed ? styles.coliseumShadowed: '';
    const coliseumSelectedOrNot = coliseumSelected ? styles.coliseumSelected: '';


    const [ludusShadowed, setLudusShadowed] = useState(false);
    const [ludusSelected, setLudusSelected] = useState(false);
    const ludusShadowedOrNot = ludusShadowed ? styles.ludusShadowed: '';
    const ludusSelectedOrNot = ludusSelected ? styles.ludusSelected: '';

    const [marketShadowed, setMarketShadowed] = useState(false);
    const [marketSelected, setMarketSelected] = useState(false);
    const marketShadowedOrNot = marketShadowed ? styles.marketShadowed: '';
    const marketSelectedOrNot = marketSelected ? styles.marketSelected: '';
    
    return(        
        <main 
            className={`${styles.background} ${backgroundShadowed ? styles.backgroundShadowed : ''}`}
        >
            <div
                className={`${styles.building} ${styles.forest} ${forestSelectedOrNot} ${forestShadowedOrNot}`} 
                onClick={clickForest}
            ></div>
            <div 
                className={`${styles.building} ${styles.ludus} ${ludusSelectedOrNot} ${ludusShadowedOrNot}`} 
                onClick={clickLudus}
            ></div>
            <div 
                className={`${styles.building} ${styles.coliseum} ${coliseumSelectedOrNot} ${coliseumShadowedOrNot}`} 
                onClick={clickColiseum}
            ></div>
            <div 
                className={`${styles.building} ${styles.market} ${marketSelectedOrNot} ${marketShadowedOrNot}`} 
                onClick={clickMarket}
            ></div>
        </main>
    )
}