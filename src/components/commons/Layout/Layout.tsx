import { ReactNode, FC } from 'react';
import c from 'classnames';
import { motion } from 'framer-motion';
import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
  center?: boolean;
}

const Layout: FC<Props> = ({ children, center = false }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={c(styles.layout, center && styles.center)}
      transition={{ ease: 'easeOut', delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
