import { FormattedMessage } from 'react-intl';
import './Header.css'
import { Link } from 'react-router-dom';
import Spanish from '../../lang/es.json';
import English from '../../lang/en.json';
const Header = ({ setMessages }) => {
  return (
    <nav>
      <div className='header' data-testid='header-component'>
        <h2 className='header__logo'>
          {' '}
          <FormattedMessage id='header.logo' />
        </h2>
        <div className='header__links'>
          <Link to={'/'} className='header__home'>
            <FormattedMessage id='header.home' />
          </Link>
          <Link to={'/users'} className='header__users'>
            <FormattedMessage id='header.users' />
          </Link>
          <Link to={'/create-user'} className='header__create-user'>
            <FormattedMessage id='header.createUser' />
          </Link>
        </div>
        <div className='header__buttons'>
          <button className='header__button-spanish' onClick={() => setMessages(Spanish)}>
            <FormattedMessage id='header.spanish' />
          </button>
          <button className='header__button-english' onClick={() => setMessages(English)}>
            <FormattedMessage id='header.english' />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
