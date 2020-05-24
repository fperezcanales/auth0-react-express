/* eslint-disable camelcase */
import React from 'react';
import { Formik } from 'formik';
import { useAuth0 } from '../../auth/react-auth0-spa';
import './form.css';
import Wizard from '../../ui-kit/wizard/Wizard';
import AddressForm from './businessForm/AddressForm';
import ReceiptForm from './businessForm/ReceiptForm';
import PaymentForm from './businessForm/PaymentForm';

const BusinessProfileForm = () => {
  const { loading, user } = useAuth0();
  const pages = [ReceiptForm, PaymentForm, AddressForm];
  const [apc, setApc] = React.useState({});
  const { getTokenSilently } = useAuth0();

  const postData = async (data, indexPage) => {

    const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

    const token = await getTokenSilently();

    let methodService = 'PUT';
    let paramId = '';
    if (indexPage === 0) {
      methodService = 'POST';
    } else {
      // eslint-disable-next-line no-underscore-dangle
      paramId = '/'.concat(apc._id);
    }

    const res = await fetch(`${baseUrl}/api/business${paramId}`, {
      method: methodService,
      body: JSON.stringify(data),
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
        setApc(json.data);
      })
      .catch((err) => console.log(err));
  };

  // eslint-disable-next-line no-constant-condition
  if (false && loading && !user) {
    return <div>Loading...</div>;
  }

  const renderPage = ({ navigateNext, pageIndex, isLast, Page, NextPage }) => {

    const onSubmit = (data, { resetForm }) => {
      postData(data, pageIndex).then(() => {
        if (isLast) {
          alert(JSON.stringify(apc));
        } else {
          resetForm({ values: NextPage.initialValues });
          navigateNext();
        }
      });
    };
    return (
      <Formik
        initialValues={Page.initialValues}
        validateOnMount={true}
        validationSchema={Page.validationSchema}
        onSubmit={Page.onSubmit(onSubmit)}
      >
        {(props) => {
          const {
            handleSubmit,
            handleChange,
            setFieldTouched,
            isValid,
          } = props;

          const onChange = (name) => (event) => {
            handleChange(event);
            setFieldTouched(name, true, false);
          };

          return (
            <form onSubmit={handleSubmit}>
              <h1>{Page.title}</h1>
              <pre>
                <code>{JSON.stringify(apc, null, 2)}</code>
              </pre>
              <div className="sections-body">
                <Page apc={apc} onChange={onChange} {...props} />
                <section style={{ margin: '20px' }}>
                  <input type="submit" disabled={!isValid} value='Siguiente' />
                </section>
              </div>
            </form>
          );
        }}
      </Formik>
    );
  };
  return <Wizard pages={pages}>{renderPage}</Wizard>;
};

export default BusinessProfileForm;
