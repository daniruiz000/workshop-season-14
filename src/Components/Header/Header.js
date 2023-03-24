import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Spanish from '../../lang/es.json';
import English from '../../lang/en.json';
const Header = ({ setMessages }) => {
  return (
    <nav>
      <div>
        <h2>
          {' '}
          <FormattedMessage id="header.logo" />
        </h2>
        <Link to={'/'}>
          <FormattedMessage id="header.home" />
        </Link>
        <Link to={'/users'}>
          <FormattedMessage id="header.users" />
        </Link>
        <Link to={'/create-user'}>
          <FormattedMessage id="header.createUser" />
        </Link>
        <button onClick={() => setMessages(Spanish)}>
          <FormattedMessage id="header.spanish" />
        </button>
        <button onClick={() => setMessages(English)}>
          <FormattedMessage id="header.english" />
        </button>
      </div>
    </nav>
  );
};
export default Header;
