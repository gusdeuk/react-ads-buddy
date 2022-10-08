import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import styles from './PublicLayout.module.scss';

export default function PublicLayout(props) {
    // ***********************************************
    // states, inits
    // ***********************************************

    const PageLaunch = lazy(() => import('../../pages/PageLaunch/PageLaunch' /* webpackChunkName: "PageLaunch" */))
    const PageNotFound = lazy(() =>
        import('../../pages/PageNotFound/PageNotFound' /* webpackChunkName: "PageNotFound" */)
    )

    /// ***********************************************
    // functions and logic
    // ***********************************************

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // render main component
    // ***********************************************

    return (
        <div className={styles['public-layout']}>
            <Suspense
                fallback={
                    <div className={styles['loader-wrapper']}>
                        <CircularProgress size={70} />
                    </div>
                }
            >
                <Switch>
                    <Route path='/public/launch' render={(props) => <PageLaunch />} />
                    {/* public layout resolves 404 */}
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </div>
    )
}
