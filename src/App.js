import React from 'react';
import './App.css';
import HomePage from './Components/Pages/Homepage';
import Header from './Components/Header/Header';
import UserList from './Components/UserList/UserList';
import CreateUser from './Components/CreateUser/CreateUser';
import Spanish from './lang/es.json';
import English from './lang/en.json';
import { IntlProvider } from 'react-intl';
import { HashRouter, Route, Routes } from 'react-router-dom';

const locale = navigator.language;
let defaultMessages;

switch (locale) {
  case 'es-ES':
    defaultMessages = Spanish;

    break;
  case 'en-EN':
    defaultMessages = English;

    break;

  default:
    defaultMessages = English;

    break;
}
function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <HashRouter>
      <IntlProvider locale={locale} messages={messages}>
        <div className='App'>
          <Header setMessages={setMessages} />
        </div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/users' element={<UserList />}></Route>
          <Route path='/create-user' element={<CreateUser />}></Route>
        </Routes>
      </IntlProvider>
    </HashRouter>
  );
}

export default App;
