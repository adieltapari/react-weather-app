import Title from 'components/commons/Title';
import { FC } from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';

import Text from '../../../../../components/commons/Text';
import styles from './current.module.scss';

const Current: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Title text="Calafate" />
        <div className={styles.contentDescrp}>
          <TiWeatherCloudy size={35} />
          <Text text=" Algo Nublado" />
        </div>
        <div className={styles.contentDescrp}>
          <AiOutlineArrowUp size={17} />
          <Text text="23°" />
          <AiOutlineArrowDown size={17} />
          <Text text="13°" />
        </div>
      </div>
      <div>
        <div className={styles.contentTemp}>
          <Title text="35°" center large />
        </div>
        <div className={styles.contentHumedity}>
          <Text text="Humedity " marginRight={10} />
          <Text text="33°" />
        </div>
      </div>
    </div>
  );
};

export default Current;
