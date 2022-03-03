import styles from '../styles/city.module.scss'
import { useState } from 'react'

export default function City() {
    
    const clickForest = () => {
        if (!ludusSelected) {
            setForestSelected(!forestSelected)
            setBackgroundShadowed(!backgroundShadowed)
            setLudusShadowed(!ludusShadowed)
        }
    }
    const clickLudus = () => {
        if (!forestSelected){
            setLudusSelected(!ludusSelected)
            setBackgroundShadowed(!backgroundShadowed)
            setForestShadowed(!forestShadowed)
        }
    }

    const [backgroundShadowed, setBackgroundShadowed] = useState(false);

    const [forestShadowed, setForestShadowed] = useState(false);
    const [forestSelected, setForestSelected] = useState(false);

    const [ludusShadowed, setLudusShadowed] = useState(false);
    const [ludusSelected, setLudusSelected] = useState(false);


    const forestShadowedOrNot = forestShadowed ? styles.forestShadowed: '';
    const forestSelectedOrNot = forestSelected ? styles.forestSelected: '';

    const ludusShadowedOrNot = ludusShadowed ? styles.ludusShadowed: '';
    const ludusSelectedOrNot = ludusSelected ? styles.ludusSelected: '';
    
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
        </main>
    )
}