import { FC } from 'react';
import Current from './Current/Current';
import Forecast from './Forecast';
import styles from './currentWeather.module.scss';

const CurrentWeather: FC = () => {
  return (
    <div className={styles.container}>
      <Current />
      <Forecast />
    </div>
  );
};

export default CurrentWeather;
