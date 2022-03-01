import styles from '../styles/city.module.scss'
import { useState } from 'react'

export default function City() {
    const clickedForestStyles = {
        transform: 'scale(1.4,1.4) translate(4.5vh,4vh)'
    }
    const shadowBackground = {
        filter: 'brightness(15%)'
    }
    const clickForest = () => {
        setShadowedBackground(!shadowedBackground)
        setForestSelected(!forestSelected)
    }

    const [shadowedBackground, setShadowedBackground] = useState(false);
    const [forestSelected, setForestSelected] = useState(false);
    return(        
        <main 
            className={styles.background}
            style={shadowedBackground ? shadowBackground: {}}      
        >
            <div 
                style={forestSelected ? clickedForestStyles: {}} 
                className={styles.forest} 
                onClick={clickForest}
            ></div>
        </main>
    )
}