import React from 'react';
import styles from './index.css';
import loadingImg from './../../static/img/Loading.png';

export default function () {
    return <div className={styles.loadingContent}>
        <img src={loadingImg} alt=""/>
    </div>
}