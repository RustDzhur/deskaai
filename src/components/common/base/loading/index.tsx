import React from 'react';
import styles from './style.module.css';
import {colors} from '../../../common';

interface ILoadingProps {
  type?: 'area' | 'app';
  size?: number;
}
const Loading = (
  {type = 'area', size = 25, color = colors.slate200}: ILoadingProps = {
    type: 'area',
  }
) => {
  return (
    <div
      className={styles.spinner}
      style={{
        // @ts-ignore
        '--spinner-size': `${size}px`,
        '--spinner-color': color,
      }}
      // {...props}
    >
      <div className={styles.spinnerAnimationContainer}>
        <div />
      </div>
    </div>
  );
};
export default Loading;
