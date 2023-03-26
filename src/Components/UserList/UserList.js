import './UserList.css';
import React from 'react';
import { FormattedMessage } from 'react-intl';
const UserList = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [userList, setUserList] = React.useState([]);
  const apiCall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUserList(data));
  };
  React.useEffect(() => apiCall(API_URL), []);
  return (
    <div className='userList'>
      <h1 className='userList__title'>
        <FormattedMessage id='users:title'></FormattedMessage>
      </h1>
      <table className='userList__table'>
        <thead className='userList__table-head'>
          <th className='userList__table-th'>ID</th>
          <th className='userList__table-th'>
            <FormattedMessage id='users:name'></FormattedMessage>
          </th>
          <th className='userList__table-th'>
            <FormattedMessage id='users:username'></FormattedMessage>
          </th>
          <th className='userList__table-th'>
            <FormattedMessage id='users:email'></FormattedMessage>
          </th>
          <th className='userList__table-th'>
            <FormattedMessage id='users:website'></FormattedMessage>
          </th>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr className='userList__table-tr' key={user.id}>
              <td className='userList__table-td'>{user.id}</td>
              <td className='userList__table-td'>{user.name}</td>
              <td className='userList__table-td'>{user.username}</td>
              <td className='userList__table-td'>{user.email}</td>
              <td className='userList__table-td'>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
