import Title from 'components/commons/Title';
import { FC } from 'react';
import styles from './forecast.module.scss';

const Forecast: FC = () => {
  return (
    <div className={styles.container}>
      <Title text="List Forecast" center />
    </div>
  );
};

export default Forecast;
