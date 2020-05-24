/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../../auth/react-auth0-spa';

// import './../table.css';

const BusinessProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [businesses, setBusinesses] = useState();
  const { getTokenSilently } = useAuth0();

  const fetchData = async () => {
    const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

    const token = await getTokenSilently();

    const res = await fetch(`${baseUrl}/api/business`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      },
    });
    res
      .json()
      .then((json) => {
        setBusinesses(json.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(
    () => {
      fetchData();
    },
    // eslint-disable-next-line
    []
  );

  if (isLoading) {
    return (
      <>
        <div className="container">
          <h1>Star Wars Characters!</h1>
          <p>Loading People...</p>
        </div>
      </>
    );
  }

  const renderRows = () => {
    return businesses.map((business) => {
      const { businessActivity, paymentMethod, addressComercial } = business;
      const {
        businessName,
        businessDNI,
        businessRepresentative,
        businessEmail,
        businessFono,
      } = businessActivity;
      return (
        <li className="table-row" key={businessName}>
          <div className="col col-1">{businessName}</div>
          <div className="col col-2">{businessDNI}</div>
          <div className="col col-3">{businessRepresentative}</div>
          <div className="col col-4">{businessEmail}</div>
          <div className="col col-5">{businessFono}</div>
        </li>
      );
    });
  };

  return (
    <>
      <div className="container">
        <h1>Star Wars Characters!</h1>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Name</div>
            <div className="col col-2">Gender</div>
            <div className="col col-3">Species</div>
            <div className="col col-4">Birth Year</div>
            <div className="col col-5">Height</div>
          </li>
          {renderRows()}
        </ul>
      </div>
    </>
  );
};

export default BusinessProfile;
