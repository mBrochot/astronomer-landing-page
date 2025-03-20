/** @format */

import type { ReactNode } from 'react';
import { NewReportButton } from 'components/Header/components';
import styles from './PromoBanner.module.css';

const PromoBanner = (): ReactNode => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <button className={styles.leftPart}>
          <NewReportButton />
          <p className={styles.text}>
            The State of Apache Airflow®: see insights from over 5,000 data
            practitioners.&nbsp;&nbsp;
            <span style={{ color: 'var(--amethyst-400)' }}>Learn More</span>
          </p>
        </button>
        <div className={styles.rightPart}>
          <a href='#'>Support</a>
          <span style={{ fontFamily: 'var(--font-albert)', fontSize: '16px' }}>
            |
          </span>
          <a href='#'>Log In</a>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
