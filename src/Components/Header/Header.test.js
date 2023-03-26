import Header from './Header';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Spanish from '../../lang/es.json';
import English from '../../lang/en.json';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  let component;

  test('changes the displayed language when the "ES" button is clicked', () => {
    component = render(
      <MemoryRouter>
        <IntlProvider locale='ES-es' messages={Spanish}>
          <Header setMessages={() => console.log('juancfer')} />
        </IntlProvider>
      </MemoryRouter>
    );

    const headerLanguage = component.container.querySelector('.header__logo');
    expect(headerLanguage).toHaveTextContent(Spanish['header.logo']);
  });

  test('changes the displayed language when the "EN" button is clicked', () => {
    component = render(
      <MemoryRouter>
        <IntlProvider locale='En-en' messages={English}>
          <Header setMessages={() => console.log('juancfer')} />
        </IntlProvider>
      </MemoryRouter>
    );

    const headerLanguage = component.container.querySelector('.header__logo');
    expect(headerLanguage).toHaveTextContent(English['header.logo']);
  });

  test('Check header elements are in documents', () => {
    component = render(
      <MemoryRouter>
        <IntlProvider locale='En-en' messages={English}>
          <Header setMessages={() => console.log('juancfer')} />
        </IntlProvider>
      </MemoryRouter>
    );

    const navHome = component.container.querySelector('.header__home');
    expect(navHome).toBeInTheDocument();
    const navUsers = component.container.querySelector('.header__users');
    expect(navUsers).toBeInTheDocument();
    const navCreateUser = component.container.querySelector('.header__create-user');
    expect(navCreateUser).toBeInTheDocument();
  });
});
