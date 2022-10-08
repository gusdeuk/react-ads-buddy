import React, { useEffect, useState } from 'react';

import classes from './TestComponent.module.scss';

export default function TestComponent(props) {
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
    return <button className={classes['Test-component']}>{props.label}</button>
}
