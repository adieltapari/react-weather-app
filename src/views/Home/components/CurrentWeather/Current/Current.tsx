import Title from 'components/commons/Title';
import { FC } from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { observer } from 'mobx-react-lite';

import Text from '../../../../../components/commons/Text';
import styles from './current.module.scss';

const Current: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.contentDescrp}>
          <TiWeatherCloudy size={35} />
          <Text text=" Algo Nublado" bold />
        </div>
        <div className={styles.contentDescrp}>
          <AiOutlineArrowUp size={17} />
          <Text text="23°" bold />
          <AiOutlineArrowDown size={17} />
          <Text text="13°" bold />
        </div>
      </div>
      <div>
        <div className={styles.contentTemp}>
          <Title text="35°" center large />
        </div>
        <div className={styles.contentHumedity}>
          <Text text="Humedity " marginRight={10} bold />
          <Text text="33°" bold />
        </div>
      </div>
    </div>
  );
};

export default observer(Current);
