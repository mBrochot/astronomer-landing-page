/** @format */

import { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';
import styles from './PromoBanner.module.css';

const PromoBanner = (): ReactNode => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <button className={styles.leftPart}>
          <Button
            width='86px'
            height='20px'
            borderRadius='6.584px'
            fontSize='9.218px'
            fontFamily='var(--font-jetbrains)'
            fontWeight='800'
            letterSpacing='.922px'
            color='white'
            backgroundColor='var(--amethyst-500)'
          >
            NEW REPORT
          </Button>
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
