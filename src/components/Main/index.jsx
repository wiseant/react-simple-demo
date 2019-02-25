import React, { Component } from 'react';
import styles from './styles.module.css';
import './styles.css'

class Main extends Component {
  render() {
    return (
      <main className={['debug', styles.main].join(' ')}>
        <div className={styles.left}>Left</div>
        <div className={styles.content}>Content</div>
      </main>
    )
  }

}

export default Main;
