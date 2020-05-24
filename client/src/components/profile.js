/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useAuth0 } from '../auth/react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h3>User name: {user && user.name}</h3>
        <p>Email: {user && user.email}</p>
        <p>ID token content:</p>
        <pre>
          <code>{user && JSON.stringify(user, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export default Profile;
