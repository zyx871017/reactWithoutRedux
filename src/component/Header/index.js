import React from 'react';
import styles from './index.css';
import reactSvg from 'static/img/react.svg'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={styles.headerExtension}>
            <div className={styles.headerContent}>
                <img src={reactSvg} style={{width: 40, height: 40}} alt=""/>
                <span>zyxReact</span>
            </div>
        </div>;
    }
}

export default Header;


