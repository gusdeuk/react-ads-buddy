import Accordion from 'apollo-react/components/Accordion';
import AccordionDetails from 'apollo-react/components/AccordionDetails';
import AccordionSummary from 'apollo-react/components/AccordionSummary';
import Typography from 'apollo-react/components/Typography';
import React from 'react';
import { useEffect } from 'react';
import { isDesktop, isMobile } from 'react-device-detect';

import styles from './IncAdditionalnfo.module.scss';

export default function IncInfo() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [accordionExpandedPanelA, setAccordionExpandedPanelA] = React.useState(false)
    const [accordionExpandedPanelB, setAccordionExpandedPanelB] = React.useState(false)
    const [accordionExpandedPanelC, setAccordionExpandedPanelC] = React.useState(false)
    const [accordionExpandedPanelD, setAccordionExpandedPanelD] = React.useState(false)
    const [accordionExpandedPanelE, setAccordionExpandedPanelE] = React.useState(false)

    /// ***********************************************
    // functions and logic
    // ***********************************************
    const handleAccordionChange = (panel) => (event, newExpanded) => {
        //console.log(isMobile)
        if (!isMobile) {
            if (panel === 'panelA') {
                setAccordionExpandedPanelA(!accordionExpandedPanelA)
                setAccordionExpandedPanelB(false)
                setAccordionExpandedPanelC(false)
                setAccordionExpandedPanelD(false)
                setAccordionExpandedPanelE(false)
            }
            if (panel === 'panelB') {
                setAccordionExpandedPanelA(false)
                setAccordionExpandedPanelB(!accordionExpandedPanelB)
                setAccordionExpandedPanelC(false)
                setAccordionExpandedPanelD(false)
                setAccordionExpandedPanelE(false)
            }
            if (panel === 'panelC') {
                setAccordionExpandedPanelA(false)
                setAccordionExpandedPanelB(false)
                setAccordionExpandedPanelC(!accordionExpandedPanelC)
                setAccordionExpandedPanelD(false)
                setAccordionExpandedPanelE(false)
            }
            if (panel === 'panelD') {
                setAccordionExpandedPanelA(false)
                setAccordionExpandedPanelB(false)
                setAccordionExpandedPanelC(false)
                setAccordionExpandedPanelD(!accordionExpandedPanelD)
                setAccordionExpandedPanelE(false)
            }
            if (panel === 'panelE') {
                setAccordionExpandedPanelA(false)
                setAccordionExpandedPanelB(false)
                setAccordionExpandedPanelC(false)
                setAccordionExpandedPanelD(false)
                setAccordionExpandedPanelE(!accordionExpandedPanelE)
            }
        } else {
            if (panel === 'panelA') {
                setAccordionExpandedPanelA(!accordionExpandedPanelA)
            }
            if (panel === 'panelB') {
                setAccordionExpandedPanelB(!accordionExpandedPanelB)
            }
            if (panel === 'panelC') {
                setAccordionExpandedPanelC(!accordionExpandedPanelC)
            }
            if (panel === 'panelD') {
                setAccordionExpandedPanelD(!accordionExpandedPanelD)
            }
            if (panel === 'panelE') {
                setAccordionExpandedPanelE(!accordionExpandedPanelE)
            }
        }
    }

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        // ------------------------------
        // test device detect library
        // https://github.com/duskload/react-device-detect/tree/master/docs
        if (isDesktop) {
            setAccordionExpandedPanelA(true)
        } else {
            setAccordionExpandedPanelA(false)
        }
    }, [])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['inc-add-info']].join(' ')}>
            <div className={[styles['acc-container']]}>
                {/*  ------------------------------------------------------------ */}
                {/* Section A */}
                {/*  ------------------------------------------------------------ */}

                <Accordion expanded={accordionExpandedPanelA} onChange={handleAccordionChange('panelA')}>
                    <AccordionSummary className={styles['acc-item-title']}>
                        <Typography>Lorem ipsum dolor sit amet</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles['acc-item-content']}>
                        <ul className={styles['list-data']}>
                            <li>
                                <b>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </b>
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ul>

                        <ul className={[styles['list-links']]}>
                            <li>
                                <a href='https://www.iqvia.com/' target='_blank'>
                                    https://www.iqvia.com/
                                </a>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                {/*  ------------------------------------------------------------ */}
                {/* Section B */}
                {/*  ------------------------------------------------------------ */}
                <Accordion expanded={accordionExpandedPanelB} onChange={handleAccordionChange('panelB')}>
                    <AccordionSummary className={styles['acc-item-title']}>
                        <Typography>Lorem ipsum dolor sit amet</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles['acc-item-content']}>
                        <ul className={styles['list-data']}>
                            <li>
                                <b>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </b>
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ul>

                        <ul className={[styles['list-links']]}>
                            <li>
                                <a href='https://www.iqvia.com/' target='_blank'>
                                    https://www.iqvia.com/
                                </a>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                {/*  ------------------------------------------------------------ */}
                {/* Section C */}
                {/*  ------------------------------------------------------------ */}
                <Accordion expanded={accordionExpandedPanelC} onChange={handleAccordionChange('panelC')}>
                    <AccordionSummary className={styles['acc-item-title']}>
                        <Typography>Lorem ipsum dolor sit amet</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles['acc-item-content']}>
                        <ul className={styles['list-data']}>
                            <li>
                                <b>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </b>
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ul>

                        <ul className={[styles['list-links']]}>
                            <li>
                                <a href='https://www.iqvia.com/' target='_blank'>
                                    https://www.iqvia.com/
                                </a>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                {/*  ------------------------------------------------------------ */}
                {/* Section D */}
                {/*  ------------------------------------------------------------ */}
                <Accordion expanded={accordionExpandedPanelD} onChange={handleAccordionChange('panelD')}>
                    <AccordionSummary className={styles['acc-item-title']}>
                        <Typography>Lorem ipsum dolor sit amet</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles['acc-item-content']}>
                        <ul className={styles['list-data']}>
                            <li>
                                <b>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </b>
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ul>

                        <ul className={[styles['list-links']]}>
                            <li>
                                <a href='https://www.iqvia.com/' target='_blank'>
                                    https://www.iqvia.com/
                                </a>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                {/*  ------------------------------------------------------------ */}
                {/* Section E */}
                {/*  ------------------------------------------------------------ */}
                <Accordion expanded={accordionExpandedPanelE} onChange={handleAccordionChange('panelE')}>
                    <AccordionSummary className={styles['acc-item-title']}>
                        <Typography>Lorem ipsum dolor sit amet</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles['acc-item-content']}>
                        <ul className={styles['list-data']}>
                            <li>
                                <b>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </b>
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ul>

                        <ul className={[styles['list-links']]}>
                            <li>
                                <a href='https://www.iqvia.com/' target='_blank'>
                                    https://www.iqvia.com/
                                </a>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}
