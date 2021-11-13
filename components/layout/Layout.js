import React, { Fragment } from 'react';
import MainHeader from './MainHeader';

import classes from '../../styles/components/layout/Layout.module.css';

const Layout = (props) => {
    return (
        <Fragment>
            <MainHeader/>
            <main className={classes.container}>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
