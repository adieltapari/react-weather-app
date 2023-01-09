import { FC } from 'react';
import Current from '../CurrentWeather/Current';
import styles from './currentCities.module.scss';

const CurrentCities: FC = () => {
  return (
    <div className={styles.container}>
      <Current />
      <Current />
      <Current />
      <Current />
      <Current />
    </div>
  );
};

export default CurrentCities;
