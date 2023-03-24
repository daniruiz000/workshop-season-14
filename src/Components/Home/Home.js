import { FormattedMessage } from 'react-intl';
const Home = () => {
  return (
    <div>
      <h2><FormattedMessage id="home:welcome" /></h2>
      <p><FormattedMessage id="home:userManagement" /></p>
      <p><FormattedMessage id="home:apiDisclaimer" /></p>
    </div>
  );
};

export default Home;
