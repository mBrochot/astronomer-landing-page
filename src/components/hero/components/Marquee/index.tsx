/** @format */

import type { ReactNode } from 'react';
import { brands } from 'data/hero';
import styles from './Marquee.module.css';

const Marquee = (): ReactNode => {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {[...brands, ...brands].map((props, index) => {
            return (
              <img
                key={props.name + index}
                src={props.src}
                alt={props.name}
                width={props.width}
                height={props.height}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
