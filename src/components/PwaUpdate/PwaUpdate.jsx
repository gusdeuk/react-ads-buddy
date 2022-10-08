import UpdateIcon from '@mui/icons-material/Update';
import Button from 'apollo-react/components/Button';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ServiceWorkerUpdateListener } from '../../serviceWorkerUpdateListener';
import styles from './PwaUpdate.module.scss';

export default function PwaUpdateApp(props) {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [registration, setRegistration] = useState(null)
    const [swListener, setSwListener] = useState({})
    const [showUpdateWaiting, setshowUpdateWaiting] = useState(false)

    const isLogged = useSelector((state) => state.appGlobalData.isLogged)

    // ***********************************************
    // functions and logic
    // ***********************************************
    const handleUpdate = () => {
        swListener.skipWaiting(registration.waiting)
    }

    const dismissUpdate = () => {
        setshowUpdateWaiting(false)
    }

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        async function InitSWupdate() {
            if (process.env.NODE_ENV !== 'development') {
                let listener = new ServiceWorkerUpdateListener()
                setSwListener(listener)

                listener.onupdateinstalling = (installingEvent) => {
                    console.log('SW installed', installingEvent)
                }

                listener.onupdatewaiting = (waitingEvent) => {
                    console.log('new update waiting', waitingEvent)
                    setshowUpdateWaiting(true)
                }

                listener.onupdateready = (event) => {
                    console.log('updateready event')
                    window.location.reload()
                }
                navigator.serviceWorker.getRegistration().then((reg) => {
                    listener.addRegistration(reg)

                    setRegistration(reg)
                })

                return () => listener.removeEventListener()
            } else {
                //do nothing because no sw in development
            }
        }

        InitSWupdate()
    }, [])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <>
            {showUpdateWaiting && isLogged && (
                <div
                    className={[
                        styles['pwa-updateapp-component'],
                        styles['white'],
                        'animate__animated animate__fadeInUp animate__faster	'
                    ].join(' ')}
                >
                    <div className={[styles['col'], styles['icon']].join(' ')}>
                        <UpdateIcon />
                    </div>
                    <div className={[styles['col'], styles['text']].join(' ')}>
                        <div className={styles['title']}>New content update available</div>
                        <span>
                            Please <b>refresh</b> this web app <b>as soon as possible</b> to enjoy the latest fresh end
                            engaging content!
                        </span>
                    </div>
                    <div className={[styles['col'], styles['actions']].join(' ')}>
                        <Button variant='secondary' size='small' onClick={dismissUpdate}>
                            Remind later
                        </Button>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Button variant='primary' size='small' onClick={handleUpdate}>
                            Refresh now!
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}
