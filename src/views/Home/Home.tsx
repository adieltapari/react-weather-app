import Layout from 'components/commons/Layout';
import Navbar from 'components/Navbar';
import { FC } from 'react';
import CurrentCities from './components/CurrentCities';
import CurrentWeather from './components/CurrentWeather';
// import styles from './home.module.scss';

const Home: FC = () => {
  return (
    <Layout>
      <div>
        <Navbar />
      </div>
      <div>
        <CurrentWeather />
      </div>
      <div>
        <CurrentCities />
      </div>
    </Layout>
  );
};

export default Home;
