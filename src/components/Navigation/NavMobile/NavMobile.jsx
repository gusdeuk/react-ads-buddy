import ArrowDown from 'apollo-react-icons/ArrowDown';
import ArrowRight from 'apollo-react-icons/ArrowRight';
import Close from 'apollo-react-icons/Close';
import IconMenu from 'apollo-react-icons/Menu';
import Button from 'apollo-react/components/Button';
import IconButton from 'apollo-react/components/IconButton';
import NavigationBar from 'apollo-react/components/NavigationBar';
import Typography from 'apollo-react/components/Typography';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as BuddyBallImage } from '../../../assets/images/buddy-ball-shadow.svg';
import { setIsLogged } from '../../../store/reducers/appGlobalDataSliceReducer';
import { menuItems } from '../NavData/NavData';
import styles from './NavMobile.module.scss';

export default function NavMobile(props) {
    // ***********************************************
    // states, inits
    // ***********************************************
    let [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    let [isTutorialPage, setIsTutorialPage] = useState(false)
    let [openTutorials, setOpenTutorials] = useState(false)

    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    const userName = useSelector((state) => state.appGlobalData.userName)
    const userEmail = useSelector((state) => state.appGlobalData.userEmail)
    const userRole = useSelector((state) => state.appGlobalData.userRole)

    /// ***********************************************
    // functions and logic
    // ***********************************************

    function toggleSubMenuLibrary() {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    function toggleOpenTutorials() {
        setOpenTutorials(!openTutorials)
    }
    function closeAllSubMenus() {
        setMobileMenuOpen(false)
    }

    function handleClickToPageFromSub() {
        closeAllSubMenus()
    }
    function handleLogout() {
        closeAllSubMenus()
        setTimeout(function () {
            // set global state as logged out
            dispatch(setIsLogged(false))
            // navigate to home
            history.push('/public/launch')
        }, 500)
    }

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
                setMobileMenuOpen(false)
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
    // HOOK DISABLE SCROLL
    // ***********************************************
    const useDisableBodyScroll = (openStateForMenu) => {
        useEffect(() => {
            if (openStateForMenu) {
                // document.body.style.overflow = 'hidden'
                document.getElementsByTagName('html')[0].style.overflow = 'hidden'
            } else {
                //document.body.style.overflow = 'unset'
                document.getElementsByTagName('html')[0].style.overflow = 'unset'
            }
        }, [openStateForMenu])
    }

    // On Menu OPEN >> Disable html / body scroll >> PASS STATE
    useDisableBodyScroll(mobileMenuOpen)

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
        closeAllSubMenus()
    }, [location])
    // Only re-run the effect if location changes

    // ***********************************************
    // child local components
    // ***********************************************
    const CustomNavBar = ({ history, location: { pathname } }) => {
        return (
            <NavigationBar
                className={[styles['nav-bar-mobile-home']].join(' ')}
                LogoComponent={() => (
                    <Typography
                        style={{
                            color: 'white',
                            lineHeight: '56px',
                            marginRight: 24,
                            cursor: 'pointer',
                            zIndex: 2,
                            whiteSpace: 'nowrap'
                        }}
                        onClick={() => history.push('/app/home')}
                    >
                        IQVIA <span style={{ fontWeight: 600 }}>ADS Buddy</span>
                    </Typography>
                )}
                waves
                maxWidth={'100%'}
                //profileMenuProps={profileMenuProps}
            />
        )
    }

    const ConnectedCustomNavBar = withRouter(CustomNavBar)
    // ***********************************************
    // render main component
    // ***********************************************

    return (
        <div
            className={[
                styles['nav-mobile-component'],
                'nav-mobile-wrapper animate__animated animate__fadeIn animate__faster	'
            ].join(' ')}
        >
            {/* ------------------------------------------------ */}
            {/* main level */}
            {/* ------------------------------------------------ */}

            {/*  ------------------------------------------------------------ */}
            {/* Static NAV BAR */}
            {/*  ------------------------------------------------------------ */}
            <ConnectedCustomNavBar></ConnectedCustomNavBar>

            <div className={styles['menu-mobile']}>
                {/* item with submenu */}

                <div className={[styles['btn-hamburguer']].join(' ')} onClick={toggleSubMenuLibrary}>
                    <IconMenu className={styles['menu-icon']}></IconMenu>
                </div>
            </div>

            {/* ------------------------------------------------ */}
            {/* submenus level */}
            {/* ------------------------------------------------ */}

            <CSSTransition
                in={mobileMenuOpen}
                timeout={800}
                classNames={{
                    enter: 'animate__animated animate__slideInRight animate__faster',
                    exit: 'animate__animated animate__slideOutRight animate__faster'
                }}
                mountOnEnter
                unmountOnExit
                // EVENTS
                // onEnter={() => testCallOnEnter('lala')}
                // onExited={() => testCallOnExit('lala')}
            >
                <>
                    <div className={[styles['expanded-panel'], 'custom-scroll-area vert-scroll tiny-thumb'].join(' ')}>
                        {/* ------------------------------------------------ */}
                        {/* TOP PANEL */}
                        <div className={styles['top-actions']}>
                            <BuddyBallImage className={styles['ball-logo']}></BuddyBallImage>

                            <div className={styles['user-name']}>{userName}</div>
                            <div className={styles['user-role']}>{userRole}</div>
                            <div className={styles['user-email']}>{userEmail}</div>

                            <Button
                                className={styles['btn-logout']}
                                variant='secondary'
                                size='small'
                                fullWidth
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </div>

                        {/* ------------------------------------------------ */}
                        {/* LINK LIST */}
                        <div className={[styles['content-nav']].join(' ')}>
                            <div className={styles['wrapper-list']}>
                                {menuItems.map((data, key) => {
                                    return (
                                        <div key={key.toString()}>
                                            {/* ------------------------------------------------ */}
                                            {/* SINGLE > items */}
                                            {data.text !== 'Tutorials' && (
                                                <NavLink
                                                    exact={true}
                                                    to={data.pathname}
                                                    activeClassName={styles['selected']}
                                                    onClick={handleClickToPageFromSub}
                                                    className={styles['item-single']}
                                                >
                                                    <div className={styles['item-label']}>{data.text}</div>
                                                </NavLink>
                                            )}
                                            {/* ------------------------------------------------ */}
                                            {/* TUTORIALS SECTION > collapser*/}
                                            {data.text === 'Tutorials' && (
                                                <div className={styles['item-section']} onClick={toggleOpenTutorials}>
                                                    <div className={styles['item-label']}>{data.text}</div>

                                                    {openTutorials && (
                                                        <ArrowDown className={styles['item-icon']}></ArrowDown>
                                                    )}
                                                    {!openTutorials && (
                                                        <ArrowRight className={styles['item-icon']}></ArrowRight>
                                                    )}
                                                </div>
                                            )}
                                            {data.text === 'Tutorials' && openTutorials && (
                                                <div
                                                    className={[
                                                        'animate__animated animate__fadeIn animate__faster',
                                                        styles['section-sub-content']
                                                    ].join(' ')}
                                                >
                                                    {/* ------------------------------------------------ */}
                                                    {/* TUTORIALS SECTION > children*/}
                                                    {data.text === 'Tutorials' &&
                                                        openTutorials &&
                                                        data.menuItems &&
                                                        data.menuItems.map((data, key) => {
                                                            return (
                                                                <NavLink
                                                                    exact={true}
                                                                    to={data.pathname}
                                                                    key={key.toString()}
                                                                    activeClassName={styles['selected']}
                                                                    onClick={handleClickToPageFromSub}
                                                                    className={styles['item-sub']}
                                                                >
                                                                    <div className={styles['item-label']}>
                                                                        {data.text}
                                                                    </div>{' '}
                                                                </NavLink>
                                                            )
                                                        })}
                                                    {/* ------------------------------------------------ */}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div
                        className={[
                            styles['expanded-overlay'],
                            'animate__animated animate__fadeIn animate__faster'
                        ].join(' ')}
                        onClick={closeAllSubMenus}
                    ></div>
                </>
            </CSSTransition>
        </div>
    )
}
