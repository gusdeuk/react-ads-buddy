import { useEffect } from 'react';

import styles from './Stars.module.scss';

export default function Component() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const starsData = [{}]
    for (let n = 0; n < 120; n++) {
        starsData.push({
            key: n
        })
    }
    /// ***********************************************
    // functions and logic
    // ***********************************************

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {})

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['component-clx-star']].join(' ')}>
            {starsData.map((data, key) => (
                <div className='clx-star' key={key.toString()}></div>
            ))}
        </div>
    )
}
