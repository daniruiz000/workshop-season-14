import React from 'react';
import { FormattedMessage } from 'react-intl';
const UserList = () => {
  const API_URL = process.env.REACT_APP_APIURL;
  const [userList, setUserList] = React.useState([]);
  const apiCall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
      });
  };
  React.useEffect(() => apiCall(API_URL), []);
  return (
    <div>
      <h1>
        <FormattedMessage id="users:title"></FormattedMessage>
        <table>
          <thead>
            <th>ID</th>
            <th>
              <FormattedMessage id="users:name"></FormattedMessage>
            </th>
            <th>
              <FormattedMessage id="users:username"></FormattedMessage>
            </th>
            <th>
              <FormattedMessage id="users:email"></FormattedMessage>
            </th>
            <th>
              <FormattedMessage id="users:website"></FormattedMessage>
            </th>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td >{user.id}</td>
                <td >{user.name}</td>
                <td >{user.username}</td>
                <td >{user.email}</td>
                <td >{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </h1>
    </div>
  );
};
export default UserList;
