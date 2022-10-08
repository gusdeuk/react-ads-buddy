import React, { useEffect, useState } from 'react';

import styles from './HeadLineDuoTitle.module.scss';

HeadLineDuoTitle.defaultProps = {
    color: 'blue',
    align: 'left',
    children: 'Lorem ipsum',
    hasDivider: false,
    hasMargin: false,
    hasPadding: false,
    hasBgd: false,
    small: false
}

export default function HeadLineDuoTitle(props) {
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
    // render main component
    // ***********************************************
    return (
        <div
            className={[
                styles['headline-duo-title'],
                styles[props.color],
                styles[props.align],
                props.hasMargin ? styles['hasMargin'] : '',
                props.hasBgd ? styles['hasBgd'] : ''
            ].join(' ')}
        >
            <div
                className={[
                    styles['linear-text'],
                    props.small ? styles['small'] : '',
                    props.hasPadding ? styles['hasPadding'] : ''
                ].join(' ')}
            >
                {props.children}
            </div>
            {props.hasDivider && <div className={styles['linear-divider']}>&nbsp;</div>}
        </div>
    )
}
