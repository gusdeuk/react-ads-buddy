import Button from 'apollo-react/components/Button';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { NavLink } from 'react-router-dom';

import AniNotFound from '../../animations/react-lottie/not-found.json';
import styles from './PageNotFound.module.scss';

export default function NotFound() {
    // ***********************************************
    // states, inits
    // ***********************************************

    /// ***********************************************
    // functions and logic
    // ***********************************************
    function doSomething() {}
    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['page-error'], styles['page-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
            <div className={[styles['content']].join(' ')}>
                <div className={'clx-headline-title blue center'}>Page not found</div>

                <div style={{}}>
                    <Lottie
                        loop
                        animationData={AniNotFound}
                        play
                        style={{ width: 200, height: 200, margin: '0 auto' }}
                    />
                </div>
                <NavLink exact to='/app/home' activeClassName={styles['selected']} className={styles['link']}>
                    <Button variant='primary' fullWidth style={{ marginTop: '10px' }}>
                        Home
                    </Button>
                </NavLink>
            </div>
        </div>
    )
}
