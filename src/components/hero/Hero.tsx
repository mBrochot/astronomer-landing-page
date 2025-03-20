/** @format */

import { ReactNode, useMemo } from 'react';
import useTypewriter from 'hooks/useTypewriter';
import styles from './hero.module.css';

const Hero = (): ReactNode => {
  const texts = useMemo(
    () => [
      'Generative AI.',
      'I’m open to work.',
      'Data products.',
      'I’m open to work.',
      'Legacy modernization.',
      'I’m open to work.',
      'Analytics dashboards.',
      'I’m open to work.',
      'Regulatory reporting.',
    ],
    []
  );

  const displayText = useTypewriter(texts);

  return (
    <section className={styles.starField}>
      <div>
        <p className={styles.heroTitle}>Delivering data for</p>
        <p className={styles.heroAnimation}>
          <span className={styles.typewriterText}>{displayText}</span>
        </p>
        <p className={styles.heroDescription}>
          Take Apache Airflow® to the next level with Astro. From AI and Large
          Language Models to data-driven applications, Astronomer delivers
          reliability at any scale and accelerates innovation.
        </p>
      </div>
      <div className={styles.horizon}>
        <img alt='upperhorizon' src='/assets/images/upperhorizon_newnew.webp' />
      </div>
    </section>
  );
};

export default Hero;
