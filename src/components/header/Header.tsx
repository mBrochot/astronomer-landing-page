/** @format */

import { ReactNode } from 'react';
import { PromoBanner } from './index';
import styles from './header.module.css';

const Header = (): ReactNode => {
  return (
    <>
      <PromoBanner />
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src='/src/assets/logos/astronomer.svg' alt='astronomer' />
        </div>
        <div className={styles.hamburgerBox}>
          <div className={styles.burger} />
          <div className={styles.burger} />
          <div className={styles.burger} />
        </div>
      </div>
    </>
  );
};

export default Header;
