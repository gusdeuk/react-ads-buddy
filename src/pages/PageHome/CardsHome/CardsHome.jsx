import Button from 'apollo-react/components/Button';
import Card from 'apollo-react/components/Card';
import Grid from 'apollo-react/components/Grid';
import Tag from 'apollo-react/components/Tag';
import Tooltip from 'apollo-react/components/Tooltip';
import Typography from 'apollo-react/components/Typography';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as IconAboutComponent } from '../../../assets/card-shapes/ico-about.svg';
import { ReactComponent as IconGettingComponent } from '../../../assets/card-shapes/ico-getting.svg';
import { ReactComponent as IconHelpComponent } from '../../../assets/card-shapes/ico-help.svg';
import { ReactComponent as IconKitComponent } from '../../../assets/card-shapes/ico-kit.svg';
import { ReactComponent as IconResourcesComponent } from '../../../assets/card-shapes/ico-resources.svg';
import { ReactComponent as IconTutorialsComponent } from '../../../assets/card-shapes/ico-tutorials.svg';
import styles from './CardsHome.module.scss';
import { listGridData } from './CardsHomeData';

export default function Component() {
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

    function getIcon(iconID) {
        return componentOf[iconID]
    }

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {})

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // child local components
    // ***********************************************
    const listItems = listGridData.map((data, key) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={key.toString()}>
            <Card className={[styles['card-content'], 'card-type-' + data.category].join(' ')}>
                <div className={[styles['card-head'], 'card-' + data.color].join(' ')}>
                    <div className={styles['card-icon']}>{getIcon(data.icon)}</div>
                </div>

                <div className={styles['card-body']}>
                    <div className={styles['card-title']}>
                        <Tooltip variant='dark' title={data.title} placement='top'>
                            <Typography variant='title1' noWrap style={{ fontWeight: 600 }}>
                                {data.title}
                            </Typography>
                        </Tooltip>
                    </div>
                    <div className={styles['card-text']}>
                        <p> {data.text}</p>
                    </div>
                </div>

                <div className={styles['card-footer']}>
                    <NavLink exact to={data.pathname} activeClassName={styles['selected']} className={styles['link']}>
                        <Button variant='text'>Go to Section</Button>
                    </NavLink>
                </div>
            </Card>
        </Grid>
    ))

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['component-cards']].join(' ')}>
            <Grid container spacing={3}>
                {listItems}
            </Grid>
        </div>
    )
}
