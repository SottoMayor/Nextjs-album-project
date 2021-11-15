import React from 'react';
import classes from '../../styles/components/UI/AlertError.module.css';

const AlertError = (props) => {
    return (
        <div className={classes.alert}>
            {props.children}
        </div>
    )
}

export default AlertError
