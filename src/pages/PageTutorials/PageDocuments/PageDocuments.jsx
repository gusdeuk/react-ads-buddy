import Card from 'apollo-react/components/Card';
import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid';
import { useEffect } from 'react';

import IncHeaderIco from '../../includes/IncHeaderIco/IncHeaderIco';
import NavTutoMenu from '../includes/NavTutoMenu/NavTutoMenu';
import styles from './PageDocuments.module.scss';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************

    /// ***********************************************
    // functions and logic
    // ***********************************************

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
        <div
            className={[
                styles['page-base'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <div className={[styles['header']].join(' ')}>
                <IncHeaderIco titleHead={'Tutorials'} iconSvgId={'tutorials'} />
            </div>
            <div className={styles['content']}>
                <Card className={styles['base-card']}>
                    <Grid container spacing={0} className={styles['base-grid']}>
                        {/*  ------------------------------------------------------------ */}
                        {/* LEFT */}
                        {/*  ------------------------------------------------------------ */}
                        <Grid item xs={12} sm={12} md={3} lg={2} className={[styles['col'], styles['left']].join(' ')}>
                            <NavTutoMenu />
                        </Grid>
                        {/*  ------------------------------------------------------------ */}
                        {/* RIGHT */}
                        {/*  ------------------------------------------------------------ */}
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={9}
                            lg={10}
                            className={[styles['col'], styles['right']].join(' ')}
                        >
                            <div className={styles['text-title1']}>Documents</div>

                            <p className={styles['text-body1']}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                                ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
                                auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
                                maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque
                                sagittis orci ut diam condimentum, vel euismod erat placerat.
                            </p>

                            <p className={styles['text-body1']}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                                ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
                                auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
                                maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque
                                sagittis orci ut diam condimentum, vel euismod erat placerat.
                            </p>

                            <p className={styles['text-body1']}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                                ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
                                auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
                                maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque
                                sagittis orci ut diam condimentum, vel euismod erat placerat.
                            </p>

                            <Divider />
                            <p className={styles['text-body2']}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                            </p>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </div>
    )
}
