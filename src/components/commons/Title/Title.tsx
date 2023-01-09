import { FC } from 'react';
import c from 'classnames';
import styles from './title.module.scss';

interface Props {
  text: string;
  center?: boolean;
  medium?: boolean;
}

const Title: FC<Props> = ({ text, center = false, medium }) => {
  return (
    <div className={c(styles.title, center && styles.center, medium && styles.medium)}>
      {text}
    </div>
  );
};

export default Title;
