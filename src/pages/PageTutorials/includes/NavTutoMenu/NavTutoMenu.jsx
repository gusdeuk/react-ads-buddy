import ChevronDown from 'apollo-react-icons/ChevronDown';
import ChevronUp from 'apollo-react-icons/ChevronUp';
import IconButton from 'apollo-react/components/IconButton';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { menuItems } from '../../../../components/Navigation/NavData/NavData';
import styles from './NavTutoMenu.module.scss';

export default function NavTutoMenu() {
    // ***********************************************
    // states, inits
    // ***********************************************
    let [isTutorialPage, setIsTutorialPage] = useState(false)

    let [tutoMenuOpen, setTutoMenuOpen] = useState(true)

    const location = useLocation()

    /// ***********************************************
    // functions and logic
    // ***********************************************

    function toggleOpenTutorials() {
        setTutoMenuOpen(!tutoMenuOpen)
    }

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        // console.log('called use effect general')
    }, [])

    useEffect(() => {
        // console.log('changed location' + location.pathname)
        const currentPath = location.pathname
        if (currentPath.includes('/app/PageTutorials')) {
            setIsTutorialPage(true)
        }
    }, [location])
    // Only re-run the effect if location changes

    //------------------------------------------
    // Hook para catchear el resize
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        })
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
                if (window.innerWidth < 959) {
                    setTutoMenuOpen(false)
                } else {
                    setTutoMenuOpen(true)
                }
            }
            // Add event listener
            window.addEventListener('resize', handleResize)
            // Call handler right away so state gets updated with initial window size
            handleResize()
            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize)
        }, []) // Empty array ensures that effect is only run on mount
        return windowSize
    }
    useWindowSize()
    //------------------------------------------

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************

    return (
        <div className={[styles['nav-tuto-component']].join(' ')}>
            <div className={styles['mobile-collapser']}>
                <IconButton onClick={toggleOpenTutorials} size={'small'}>
                    <>
                        {tutoMenuOpen && <ChevronDown></ChevronDown>}
                        {!tutoMenuOpen && <ChevronUp></ChevronUp>}
                    </>
                </IconButton>
            </div>

            {tutoMenuOpen && (
                <>
                    {menuItems.map((data, key) => {
                        return (
                            <div key={key.toString()}>
                                {data.text === 'Tutorials' && (
                                    <div
                                        className={[
                                            'animate__animated animate__fadeIn animate__faster',
                                            styles['section-sub-content']
                                        ].join(' ')}
                                    >
                                        {/* ------------------------------------------------ */}
                                        {/* TUTORIALS SECTION > children*/}
                                        {data.menuItems &&
                                            data.menuItems.map((data, key) => {
                                                return (
                                                    <NavLink
                                                        exact={true}
                                                        to={data.pathname}
                                                        key={key.toString()}
                                                        activeClassName={styles['selected']}
                                                        //onClick={handleClickToPageFromSub}
                                                        className={styles['item-sub']}
                                                    >
                                                        <div className={styles['item-label']}>{data.text}</div>{' '}
                                                    </NavLink>
                                                )
                                            })}
                                        {/* ------------------------------------------------ */}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </>
            )}
        </div>
    )
}
