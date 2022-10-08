import NavigationBar from 'apollo-react/components/NavigationBar';
import Typography from 'apollo-react/components/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

import { setIsLogged } from '../../../store/reducers/appGlobalDataSliceReducer';
import { menuItems } from '../NavData/NavData';
import styles from './NavDesktop.module.scss';

export default function NavDesktop(props) {
    // ***********************************************
    // states, inits
    // ***********************************************

    const userName = useSelector((state) => state.appGlobalData.userName)
    const userEmail = useSelector((state) => state.appGlobalData.userEmail)
    const userRole = useSelector((state) => state.appGlobalData.userRole)

    const profileMenuProps = {
        name: userName,
        title: userRole,
        email: userEmail,
        logoutText: 'Log Out',
        logoutButtonProps: { onClick: handleLogout },
        menuItems: []
    }

    const history = useHistory()
    const dispatch = useDispatch()

    // ***********************************************
    // functions and logic
    // ***********************************************

    function handleLogout() {
        setTimeout(function () {
            // set global state as logged out
            dispatch(setIsLogged(false))
            // navigate to home
            history.push('/public/launch')
        }, 500)
    }
    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // child local components
    // ***********************************************
    const CustomNavBar = ({ history, location: { pathname } }) => {
        return (
            <NavigationBar
                className={styles['nav-bar']}
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
                menuItems={menuItems}
                profileMenuProps={profileMenuProps}
                onClick={({ pathname }) => history.push(pathname)}
                checkIsActive={(item) =>
                    item.pathname
                        ? item.pathname === pathname
                        : item.menuItems.some((item) => item.pathname === pathname)
                }
                waves
                maxWidth={'100%'}
                // otherButtons={
                //     <NavigationBarButton
                //       open={pathname === '/apps'}
                //       icon={<AppIcon />}
                //       handleClick={() => history.push('/apps')}
                //     />
                //   }
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
                styles['nav-desktop-component'],
                'nav-desktop-wrapper animate__animated animate__fadeInDown animate__faster'
            ].join(' ')}
        >
            <ConnectedCustomNavBar />
        </div>
    )
}
