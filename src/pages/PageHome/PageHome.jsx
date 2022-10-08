import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import astronaut from '../../assets/images/astronaut.jpg';
import { ReactComponent as BgdMainShape } from '../../assets/images/bgd-main.svg';
import { ReactComponent as BuddyLogoHor } from '../../assets/images/logo-buddy-grad-left-right.svg';
import { ReactComponent as IqWater } from '../../assets/images/logo-iqvia-water-white.svg';
import CardsHome from './CardsHome/CardsHome';
import styles from './PageHome.module.scss';
import Stars from './Stars/Stars';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [animationTitle, setAnimationTitle] = useState(false)

    const userName = useSelector((state) => state.appGlobalData.userName)

    /// ***********************************************
    // functions and logic
    // ***********************************************

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        setTimeout(() => {
            setAnimationTitle(true)
        }, 300)
    })

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div
            className={[
                styles['page-home'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            {/*  ------------------------------------------------------------ */}
            {/*  TOP */}
            {/*  ------------------------------------------------------------ */}

            <div className={styles['top-hero']}>
                <CSSTransition
                    in={animationTitle}
                    timeout={3000}
                    classNames={{
                        enter: 'animate__animated animate__fadeIn animate__slower'
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    <div className={styles['hero-floating']}>
                        <div className={styles['welcome-txt']}>Hi {userName}, you landed on</div>
                        <div className={styles['buddy-logo-wrapper']}>
                            <BuddyLogoHor className={styles['buddy-logo']}></BuddyLogoHor>
                        </div>
                    </div>
                </CSSTransition>

                <div className={styles['astro-image-wrapper']}>
                    <div className={styles['stars']}>
                        <Stars></Stars>
                    </div>

                    <img alt='' className={styles['astro-image']} src={astronaut} />
                </div>

                {/*

                 */}
            </div>

            {/*  ------------------------------------------------------------ */}
            {/*  home-content */}
            {/*  ------------------------------------------------------------ */}

            <div className={[styles['home-content']].join(' ')}>
                <div className={styles['container-centered']}>
                    <div className={styles['cards-title']}>Let's get started</div>
                    <div className={styles['cards-wrapper']}>
                        <CardsHome />
                    </div>

                    <div className={styles['credits-wrapper']}>
                        <IqWater className={styles['iq-water']}></IqWater>

                        <div className={styles['app-version']}>
                            App Core Version: <b>{process.env.REACT_APP_MY_VERSION}</b>
                        </div>
                    </div>

                    <div className={styles['bgd-main-shape-wrapper']}>
                        <BgdMainShape className={styles['bgd-main-shape']}></BgdMainShape>
                    </div>
                </div>
            </div>

            {/*  ------------------------------------------------------------ */}
            {/*  super-bgd */}
            {/*  ------------------------------------------------------------ */}
            <div className={styles['super-bgd']}></div>
        </div>
    )
}
