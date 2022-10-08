import EyeHideIcon from 'apollo-react-icons/EyeHidden';
import EyeShowIcon from 'apollo-react-icons/EyeShow';
import Button from 'apollo-react/components/Button';
import TextField from 'apollo-react/components/TextField';
import { useEffect, useRef, useState } from 'react';
import { isDesktop, isMobile } from 'react-device-detect';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ReactComponent as ApolloWater } from '../../assets/images/apollo-water-white.svg';
import bgdImage from '../../assets/images/bgd-warp.jpg';
import { ReactComponent as BuddyBallImage } from '../../assets/images/buddy-ball-shadow.svg';
import { ReactComponent as BuddyLogoVert } from '../../assets/images/logo-buddy-grad-top-bottom.svg';
import { ReactComponent as IqWater } from '../../assets/images/logo-iqvia-water-white.svg';
import { setIsLogged, setUserName } from '../../store/reducers/appGlobalDataSliceReducer';
import styles from './PageLaunch.module.scss';

export default function Launch(props) {
    // ***********************************************
    // states, inits
    // ***********************************************

    let [isClosing, setIsClosing] = useState(false)
    let [hasError, setHasError] = useState(false)
    let [showPassword, setShowPassword] = useState(false)

    let [enableSecondStep, setEnableSecondStep] = useState(false)

    const history = useHistory()
    const dispatch = useDispatch()

    // CLEANER >> USE REFS FOR FIELDS!!!!
    // declare REFS  for text fields (User and pass)
    const userTextFieldRef = useRef() //creating a refernce for User Component
    const passTextFieldRef = useRef() //creating a refernce for Pass Component

    /// ***********************************************
    // functions and logic
    // ***********************************************
    function handleClickLoginMobile() {
        setEnableSecondStep(true)
    }

    // ***********************************************
    // child local components
    // ***********************************************
    function LoginPanel() {
        // this runs always (no second parameter, [])
        useEffect(() => {
            const listener = (event) => {
                if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                    event.preventDefault()
                    handleClickLogin()
                }
            }
            document.addEventListener('keydown', listener)
            return () => {
                document.removeEventListener('keydown', listener)
            }
        })

        function handleClickLogin() {
            // clear errors
            setHasError(false)
            // get password value >>> from REF
            let passcheck = passTextFieldRef.current.value
            if (passcheck) {
                if (
                    passcheck.toLowerCase() === 'x' ||
                    passcheck.toLowerCase() === 'ñañaña' ||
                    passcheck.toLowerCase() === 'nianiania' ||
                    passcheck.toLowerCase() === 'gorila' ||
                    passcheck.toLowerCase() === 'saraza'
                ) {
                    setIsClosing(true)
                    // get user name value from REF
                    let userNamePassed = userTextFieldRef.current.value

                    setTimeout(() => {
                        // set global state >> as logged in
                        dispatch(setIsLogged(true))
                        // set user name state global >> pass string
                        dispatch(setUserName(userNamePassed))

                        // navigate to home
                        history.push('/app/home')
                    }, 1600)
                } else {
                    setHasError(true)
                }
            } else {
                setHasError(true)
            }
        }

        function toggleShowHide(e) {
            // fire from toggle icon only
            if (e.target.tagName !== 'INPUT' && e.target.tagName.toLowerCase !== 'LABEL') {
                setShowPassword(!showPassword)
            }
        }

        // ***********************************************
        // use effect
        // ***********************************************
        useEffect(() => {
            // while mounting this page-url
            // set global state as logged OUT
            dispatch(setIsLogged(false))
            dispatch(setUserName(''))
        }, [])

        // ***********************************************
        // render child component
        // ***********************************************
        return (
            <div className={styles['login-panel']}>
                <div>
                    <TextField
                        className={styles['login-user-text-field']}
                        fullWidth
                        label='Username'
                        type='text'
                        placeholder=''
                        defaultValue='Apollonaut'
                        inputRef={userTextFieldRef}
                        readOnly
                        spellCheck='false'
                    />
                </div>
                <div className={`${hasError ? 'animate__animated animate__fast animate__shakeX' : ''}`}>
                    <TextField
                        className={styles['login-pass-text-field']}
                        fullWidth
                        label='Password'
                        type={showPassword ? 'text' : 'password'}
                        // disable spell ckeck
                        spellCheck='false'
                        inputRef={passTextFieldRef}
                        error={hasError}
                        helperText={hasError ? "That's not the magic word!" : ' '}
                        onClick={toggleShowHide}
                        icon={showPassword ? <EyeHideIcon /> : <EyeShowIcon />}
                    />
                </div>

                <div>
                    <Button variant={'primary'} onClick={handleClickLogin} fullWidth type='submit'>
                        Enter
                    </Button>
                </div>
            </div>
        )
    }

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div
            className={[
                styles['page-launch'],
                styles['page-wrapper'],
                `${enableSecondStep ? styles['enable-second-step'] : ''}`
            ].join(' ')}
        >
            {/*  ------------------------------------------------------------ */}
            {/*  LEFT */}
            {/*  ------------------------------------------------------------ */}
            <div
                className={[
                    styles['left-wrap'],
                    'animate__animated animate__fast',
                    `${!isMobile ? ' animate__slideInLeft' : ''}`,
                    `${isMobile ? ' animate__fadeInUp' : ''}`,
                    `${isClosing && !isMobile ? 'animate__slideOutLeft' : ''}`,
                    `${isClosing && isMobile ? 'animate__fadeOutUp' : ''}`
                ].join(' ')}
            >
                <div className={styles['login-form']}>
                    <BuddyBallImage className={styles['ball-logo']}></BuddyBallImage>

                    <div className={styles['left-title']}>Log in</div>
                    <LoginPanel></LoginPanel>
                </div>

                <div className={styles['login-bottom']}>
                    <IqWater className={styles['iq-water']}></IqWater>

                    <div className={styles['app-version']}>
                        App Core version: <b>{process.env.REACT_APP_MY_VERSION}</b>
                    </div>
                </div>
            </div>

            {/*  ------------------------------------------------------------ */}
            {/*  RIGHT */}
            {/*  ------------------------------------------------------------ */}

            <div
                className={[
                    styles['right-wrap'],
                    'animate__animated animate__fast',
                    `${!isMobile ? ' animate__slideInRight' : ''}`,
                    `${isMobile ? ' animate__fadeIn' : ''}`,
                    `${isClosing && !isMobile ? 'animate__slideOutRight' : ''}`,
                    `${isClosing && isMobile ? 'animate__fadeOutUp' : ''}`
                ].join(' ')}
            >
                <div className={styles['content-wrapper']}>
                    <div className={styles['welcome-text']}>Welcome to</div>
                    <div className={styles['buddy-logo']}>
                        <BuddyLogoVert></BuddyLogoVert>
                    </div>
                    <div className={styles['detail-text']}>
                        Here you will find tutorials, documentation, assets, and everything you may need in order to
                        master the Apollo Design System.
                    </div>
                    {/* TODO: Hide in desktop */}
                    <Button
                        className={styles['login-jump-button']}
                        variant={'primary'}
                        onClick={handleClickLoginMobile}
                        fullWidth
                        type='submit'
                    >
                        Login
                    </Button>
                </div>

                <div className={styles['right-bottom']}>
                    <ApolloWater className={styles['apollo-water']}></ApolloWater>
                </div>
                <div className={styles['bgd-wrapper']}>
                    <img alt='' className={styles['warp-bgd']} src={bgdImage} />
                </div>
            </div>
        </div>
    )
}
