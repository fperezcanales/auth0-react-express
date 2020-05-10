/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Formik } from 'formik';
import { useAuth0 } from '../../auth/react-auth0-spa';
import './form.css';
import Wizard from '../../ui-kit/wizard/Wizard';
import AddressForm from './businessForm/AddressForm';
import ReceiptForm from './businessForm/ReceiptForm';
import PaymentForm from './businessForm/PaymentForm';

const BusinessProfile = () => {
  const { loading, user } = useAuth0();
  const pages = [PaymentForm, ReceiptForm, AddressForm];
  const [apc, setApc] = React.useState({});
  // eslint-disable-next-line no-constant-condition
  if (false && loading && !user) {
    return <div>Loading...</div>;
  }

  const renderPage = ({ navigateNext, pageIndex, isLast, Page, NextPage }) => {
    const onSubmit = (data, { resetForm }) => {
      navigateNext();
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
              <div>
                <Page apc={apc} onChange={onChange} {...props} />
                <section style={{ margin: '20px 20px 40px 20px' }}>
                  <label> L</label>
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

export default BusinessProfile;
