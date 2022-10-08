import AppleIcon from '@mui/icons-material/Apple';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import InstallDesktopRoundedIcon from '@mui/icons-material/InstallDesktopRounded';
import Button from 'apollo-react/components/Button';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './PwaInstall.module.scss';

export default function PwaInstall(props) {
    // ***********************************************
    // states, inits
    // ***********************************************
    let [showInstallBanner, setShowInstallBanner] = useState(false)
    let [showSucessBanner, setShowSucessBanner] = useState(false)
    let [showIOSBanner, setShowIOSBanner] = useState(false)
    let [deferredPrompt, setDeferredPrompt] = useState(null)

    const isLogged = useSelector((state) => state.appGlobalData.isLogged)

    // ***********************************************
    // functions and logic
    // ***********************************************
    function installAppNow() {
        deferredPrompt.prompt()

        deferredPrompt.userChoice.then((choice) => {
            if (choice.outcome === 'accepted') {
                console.log('user accepted the prompt... installing')
                handleInstallSuccess()
            } else {
                console.log('user denied install')
            }
        })
    }

    function handleInstallSuccess() {
        setShowInstallBanner(false)
        setShowSucessBanner(true)
        setShowIOSBanner(false)
        console.log('showing succes banner')
    }

    function handleInstallOffer() {
        setShowInstallBanner(true)
    }

    function handleIOSOffer() {
        setShowIOSBanner(true)
    }

    function dismissAllBanners() {
        setShowSucessBanner(false)
        setShowInstallBanner(false)
        setShowIOSBanner(false)
        console.log('hiding succes banners')
    }

    function isIOS() {
        return (
            ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
                navigator.platform
            ) ||
            // iPad on iOS 13 detection
            (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
        )
    }

    function getPWADisplayMode() {
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches
        if (document.referrer.startsWith('android-app://')) {
            return 'twa'
            /* @ts-ignore */
        } else if (navigator.standalone || isStandalone) {
            return 'standalone'
        }
        return 'browser'
    }

    // test
    console.log('PWA DISPLAY MODE ' + getPWADisplayMode())

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        const handlerBeforeInstall = (event) => {
            event.preventDefault()
            setDeferredPrompt(event)

            handleInstallOffer()
            console.log('beforeinstallprompt v4')
        }
        // add listener
        window.addEventListener('beforeinstallprompt', handlerBeforeInstall)

        //-----------------
        // detect/check ios + NOT standalone mode to show the IOS banner
        // window.navigator.standalone
        // window.clientInformation.standalone

        if (isIOS() && getPWADisplayMode() !== 'standalone') {
            handleIOSOffer()
        }

        // remove listener at the end
        return () => window.removeEventListener('beforeinstallprompt', handlerBeforeInstall)
    }, [])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <>
            {showInstallBanner && isLogged && (
                <div
                    className={[
                        styles['pwa-install-component'],
                        styles['white'],
                        'animate__animated animate__fadeInUp  animate__faster	'
                    ].join(' ')}
                    style={{ borderColor: '#9e54b0' }}
                >
                    <div className={[styles['col'], styles['icon']].join(' ')}>
                        <InstallDesktopRoundedIcon style={{ color: '#9e54b0' }} />
                    </div>
                    <div className={[styles['col'], styles['text']].join(' ')}>
                        <div className={styles['title']}>Do you want to Install this Web App?</div>
                        <div>
                            Have a <b>better experience</b> and use off-line as needed!{' '}
                            <b>It will require just a few seconds.</b>
                        </div>
                    </div>
                    <div className={[styles['col'], styles['actions']].join(' ')}>
                        <Button variant='secondary' size='small' onClick={dismissAllBanners}>
                            Remind later
                        </Button>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Button variant='primary' size='small' onClick={installAppNow}>
                            Install now!
                        </Button>
                    </div>
                </div>
            )}
            {showSucessBanner && (
                <div
                    className={[
                        styles['pwa-install-component'],
                        styles['white'],
                        'animate__animated animate__fadeInUp  animate__faster'
                    ].join(' ')}
                    style={{ borderColor: '#00c221' }}
                >
                    <div className={[styles['col'], styles['icon']].join(' ')}>
                        <CheckCircleOutlineRoundedIcon style={{ color: '#00c221' }} />
                    </div>
                    <div className={[styles['col'], styles['text']].join(' ')}>
                        <div className={styles['title']}>
                            Application installed successfully. Now you can run this app off-line as needed.
                        </div>
                        <div>
                            In <b>Desktop devices</b>, you can pin it to the MAC-OS dock or Windows Task Bar. In{' '}
                            <b>Android devices</b>, you'll find the icon with your installed Apps.
                        </div>
                    </div>
                    <div className={[styles['col'], styles['actions']].join(' ')}>
                        <Button variant='primary' size='small' onClick={dismissAllBanners}>
                            Got It!
                        </Button>
                    </div>
                </div>
            )}
            {showIOSBanner && isLogged && (
                <div
                    className={[
                        styles['pwa-install-component'],
                        styles['white'],
                        'animate__animated animate__fadeInUp  animate__faster	'
                    ].join(' ')}
                    style={{ borderColor: '#ff9300' }}
                >
                    <div className={[styles['col'], styles['icon']].join(' ')}>
                        <AppleIcon style={{ color: '#ff9300', position: 'relative', top: '-3px' }} />
                    </div>
                    <div className={[styles['col'], styles['text']].join(' ')}>
                        <div className={styles['title']}>IOS Mobile Devices: New Add to Home Screen feature</div>
                        <div>
                            Using <b>Safari browser</b>, find and tap on the <b>"Add to Home Screen"</b> option to
                            install this application in your phone.
                        </div>
                    </div>
                    <div className={[styles['col'], styles['actions']].join(' ')}>
                        <Button variant='primary' size='small' onClick={dismissAllBanners}>
                            Got It!
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}
