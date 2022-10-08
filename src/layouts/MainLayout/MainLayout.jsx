import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavDesktop from '../../components/Navigation/NavDesktop/NavDesktop';
import NavMobile from '../../components/Navigation/NavMobile/NavMobile';
import styles from './MainLayout.module.scss';

export default function MainLayout(props) {
    // ***********************************************
    // states, inits
    // ***********************************************

    const PageNotFound = lazy(() =>
        import('../../pages/PageNotFound/PageNotFound' /* webpackChunkName: "PageNotFound" */)
    )
    const PageHome = lazy(() => import('../../pages/PageHome/PageHome' /* webpackChunkName: "PageHome" */))
    const PageAbout = lazy(() => import('../../pages/PageAbout/PageAbout' /* webpackChunkName: "PageAbout" */))
    const PageGettingStarted = lazy(() =>
        import('../../pages/PageGettingStarted/PageGettingStarted' /* webpackChunkName: "PageGettingStarted" */)
    )

    const PageDesignKit = lazy(() =>
        import('../../pages/PageDesignKit/PageDesignKit' /* webpackChunkName: "PageDesignKit" */)
    )
    const PageResources = lazy(() =>
        import('../../pages/PageResources/PageResources' /* webpackChunkName: "PageResources" */)
    )
    const PageHelp = lazy(() => import('../../pages/PageHelp/PageHelp' /* webpackChunkName: "PageHelp" */))

    const PageTutorialsVideos = lazy(() =>
        import('../../pages/PageTutorials/PageVideos/PageVideos' /* webpackChunkName: "PageTutorialsVideos" */)
    )
    const PageTutorialsSessions = lazy(() =>
        import('../../pages/PageTutorials/PageSessions/PageSessions' /* webpackChunkName: "PageTutorialsSessions" */)
    )
    const PageTutorialsDocuments = lazy(() =>
        import('../../pages/PageTutorials/PageDocuments/PageDocuments' /* webpackChunkName: "PageTutorialsDocuments" */)
    )
    const PageTutorialsActivities = lazy(() =>
        import(
            '../../pages/PageTutorials/PageActivities/PageActivities' /* webpackChunkName: "PageTutorialsActivities" */
        )
    )

    /// ***********************************************
    // functions and logic
    // ***********************************************
    function doSomething() {}

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // render main component
    // ***********************************************

    return (
        <div className={[styles['main-layout'], ''].join(' ')}>
            <NavDesktop />
            <NavMobile />
            <Suspense
                fallback={
                    <div className={styles['loader-wrapper']}>
                        <CircularProgress size={70} />
                    </div>
                }
            >
                <Switch>
                    <Route path='/app/home' component={PageHome}></Route>
                    <Route path='/app/PageAbout' component={PageAbout}></Route>
                    <Route path='/app/PageGettingStarted' component={PageGettingStarted}></Route>

                    <Route path='/app/PageDesignKit' component={PageDesignKit}></Route>
                    <Route path='/app/PageResources' component={PageResources}></Route>
                    <Route path='/app/PageHelp' component={PageHelp}></Route>

                    <Route path='/app/PageTutorialsVideos' component={PageTutorialsVideos}></Route>
                    <Route path='/app/PageTutorialsDocuments' component={PageTutorialsDocuments}></Route>
                    <Route path='/app/PageTutorialsSessions' component={PageTutorialsSessions}></Route>
                    <Route path='/app/PageTutorialsActivities' component={PageTutorialsActivities}></Route>

                    {/* main layout resolves 404 too */}
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </div>
    )
}
