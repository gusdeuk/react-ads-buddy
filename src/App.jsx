import './styles/global-root.scss';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';
import PwaInstall from './components/PwaInstall/PwaInstall';
import PwaUpdate from './components/PwaUpdate/PwaUpdate';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MainLayout from './layouts/MainLayout/MainLayout';
import PublicLayout from './layouts/PublicLayout/PublicLayout';
import { MyCustomTheme } from './styles/theme/muiThemeConfig';

export default function App() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const isLogged = useSelector((state) => state.appGlobalData.isLogged)

    // ***********************************************
    // MUI Theming / makeStyles access to theme
    // ***********************************************
    // const useStyles = makeStyles((theme) => {
    //     {
    //         // some CSS that accesses the theme
    //     }
    // })

    // If you have this, consider moving it
    // inside of a component wrapped with <ThemeProvider />
    // const classes = useStyles()

    /// ***********************************************
    // functions and logic
    // ***********************************************

    function PrivateRoute({ children, ...rest }) {
        return (
            <Route
                {...rest}
                render={({ location }) => {
                    return isLogged === true ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/public/launch',
                                state: { from: location }
                            }}
                        />
                    )
                }}
            />
        )
    }

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={styles['app-wrapper']}>
            {/*// theme provider for material UI base stuff*/}

            <ThemeProvider theme={MyCustomTheme}>
                {/* CssBaseline for material UI base stuff*/}
                <CssBaseline />

                {/* PWA INSTALL >> Hidden initialy until user is logged */}
                <PwaInstall />

                {/* PWA UPDATE >> Hidden initialy until user is logged  */}
                <PwaUpdate />

                <Router>
                    {/* Scroll to top on route change */}
                    <ScrollToTop />
                    <Switch>
                        <Route path='/' exact>
                            <Redirect to='/public/launch' />
                        </Route>
                        <PrivateRoute path='/app'>
                            <MainLayout></MainLayout>
                        </PrivateRoute>
                        <Route path='/public' render={(props) => <PublicLayout />} />
                        {/* public layout resolves 404 >>> ADDD*/}
                        <Route path='/' render={(props) => <PublicLayout />} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    )
}
