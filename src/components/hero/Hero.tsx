/** @format */

import { ReactNode, useEffect, useState, useMemo } from 'react';
import styles from './hero.module.css';

const Hero = (): ReactNode => {
  const texts = useMemo(
    () => [
      'Generative AI.',
      'Data products.',
      'Legacy modernization.',
      'Analytics dashboards.',
      'Regulatory reporting.',
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = 100;

    if (!isDeleting && textIndex === texts[index].length) {
      setTimeout(() => {
        setIsDeleting(true);
        setDisplayText('');
        setTextIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return;
    }

    if (isDeleting) {
      setIsDeleting(false);
      return;
    }

    const timeout = setTimeout(() => {
      setTextIndex((prev) => prev + 1);
      setDisplayText(texts[index].slice(0, textIndex + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting, index, texts]);

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
        <img
          alt='upperhorizon'
          src='/src/assets/images/upperhorizon_newnew.webp'
        />
      </div>
    </section>
  );
};

export default Hero;
