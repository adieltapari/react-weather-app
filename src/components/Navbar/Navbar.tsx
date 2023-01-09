import Title from 'components/commons/Title';
import { FC } from 'react';
import styles from './navBar.module.scss';

const Navbar: FC = () => {
  return (
    <div className={styles.container}>
      <Title text="Navbar" center />
    </div>
  );
};

export default Navbar;
