import { useEffect } from 'react';

import { ReactComponent as IconAboutComponent } from '../../../assets/card-shapes/ico-about.svg';
import { ReactComponent as IconGettingComponent } from '../../../assets/card-shapes/ico-getting.svg';
import { ReactComponent as IconHelpComponent } from '../../../assets/card-shapes/ico-help.svg';
import { ReactComponent as IconKitComponent } from '../../../assets/card-shapes/ico-kit.svg';
import { ReactComponent as IconResourcesComponent } from '../../../assets/card-shapes/ico-resources.svg';
import { ReactComponent as IconTutorialsComponent } from '../../../assets/card-shapes/ico-tutorials.svg';
import styles from './IncHeaderIco.module.scss';

HeaderIco.defaultProps = {
    iconSvgId: 'about',
    titleHead: 'This is a Title'
}

export default function HeaderIco(props) {
    // ***********************************************
    // states, inits
    // ***********************************************

    /// ***********************************************
    // functions and logic
    // ***********************************************

    const componentOf = {
        kit: <IconKitComponent></IconKitComponent>,
        getting: <IconGettingComponent></IconGettingComponent>,
        about: <IconAboutComponent></IconAboutComponent>,
        help: <IconHelpComponent></IconHelpComponent>,
        resources: <IconResourcesComponent></IconResourcesComponent>,
        tutorials: <IconTutorialsComponent></IconTutorialsComponent>
    }

    function getIcon(iconKey) {
        return componentOf[iconKey]
    }
    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['inc-header-ico']].join(' ')}>
            <div className={styles['icon']}>{getIcon(props.iconSvgId)}</div>
            <div className={styles['text']}>{props.titleHead}</div>
        </div>
    )
}
