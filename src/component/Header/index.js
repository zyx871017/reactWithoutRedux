import React from 'react';
import styles from './index.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={styles.headerExtension}>
            <div className={styles.headerContent}>
                <img src="" alt=""/>
                <span>zyxReact</span>
            </div>
        </div>;
    }
}


