import React from 'react';
import styles from './styles.module.css';
import './styles.css'

const Header = ()=>{
  return (
    <div className={['debug', styles.container].join(' ')}>
      <div className={styles.left}>LOGO</div>
      <div className={styles.right}>awator</div>
      {/* 中间区域div必须放在最后 */}
      <div className={styles.content}>wellcome</div>
    </div>
  )
}

export default Header;
