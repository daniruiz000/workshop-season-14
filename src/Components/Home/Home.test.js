import Home from './Home';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Spanish from '../../lang/es.json';

describe('Home', () => {
  let component;

  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <IntlProvider locale='ES-es' messages={Spanish}>
          <Home />
        </IntlProvider>
      </MemoryRouter>
    );
  });

  test('Check h2 element is in document', () => {
    const welcome = component.getByTestId('home-welcome');
    expect(welcome).toBeInTheDocument();
  });

  test('Check p elements are in document', () => {
    const userManagement = component.getByTestId('home-userManagement');
    expect(userManagement).toBeInTheDocument();

    const apiDisclaimer = component.getByTestId('home-apiDisclaimer');
    expect(apiDisclaimer).toBeInTheDocument();
  });
});
