import './Home.css'
import { FormattedMessage } from 'react-intl';
const Home = () => {
  return (
    <div className='home'>
      <h2 data-testid='home-welcome' className='home__title'>
        <FormattedMessage id='home:welcome' />
      </h2>
      <p data-testid='home-userManagement' className='home__text'>
        <FormattedMessage id='home:userManagement' />
      </p>
      <p data-testid='home-apiDisclaimer' className='home__text'>
        <FormattedMessage id='home:apiDisclaimer' />
      </p>
    </div>
  );
};

export default Home;
