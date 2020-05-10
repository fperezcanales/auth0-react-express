/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { getIn } from 'formik';
import { useAuth0 } from '../../../auth/react-auth0-spa';
import InputField from '../../../ui-kit/inputField/InputField';

export default function PaymentForm({
  values,
  errors,
  touched,
  handleBlur,
  onChange,
}) {
  const { loading, user } = useAuth0();

  // eslint-disable-next-line no-constant-condition
  if (false && loading && !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <InputField
        label="Tipo de cuenta"
        id="accountType"
        name="accountType"
        onChange={onChange('accountType')}
        onBlur={handleBlur}
        value={values.accountType}
        type="text"
        error={
          getIn(touched, 'accountType') &&
          Boolean(getIn(errors, 'accountType'))
        }
        helperText={
          getIn(touched, 'accountType') && getIn(errors, 'accountType')
            ? getIn(errors, 'accountType')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Banco"
        id="accountBank"
        name="accountBank"
        onChange={onChange('accountBank')}
        onBlur={handleBlur}
        value={values.accountBank}
        type="text"
        error={
          getIn(touched, 'accountBank') &&
          Boolean(getIn(errors, 'accountBank'))
        }
        helperText={
          getIn(touched, 'accountBank') && getIn(errors, 'accountBank')
            ? getIn(errors, 'accountBank')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Nombre"
        id="accountName"
        name="accountName"
        onChange={onChange('accountName')}
        onBlur={handleBlur}
        value={values.accountName}
        type="text"
        error={
          getIn(touched, 'accountName') &&
          Boolean(getIn(errors, 'accountName'))
        }
        helperText={
          getIn(touched, 'accountName') && getIn(errors, 'accountName')
            ? getIn(errors, 'accountName')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Número cuenta"
        id="accountNumber"
        name="accountNumber"
        onChange={onChange('accountNumber')}
        onBlur={handleBlur}
        value={values.accountNumber}
        type="text"
        error={
          getIn(touched, 'accountNumber') &&
          Boolean(getIn(errors, 'accountNumber'))
        }
        helperText={
          getIn(touched, 'accountNumber') && getIn(errors, 'accountNumber')
            ? getIn(errors, 'accountNumber')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Fecha expiración tarjeta"
        name="accountExpireDate"
        onChange={onChange('accountExpireDate')}
        onBlur={handleBlur}
        value={values.accountExpireDate}
        type="text"
        error={
          getIn(touched, 'accountExpireDate') &&
          Boolean(getIn(errors, 'accountExpireDate'))
        }
        helperText={
          getIn(touched, 'accountExpireDate') && getIn(errors, 'accountExpireDate')
            ? getIn(errors, 'accountExpireDate')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Correo eletrónico"
        id="accountEmail"
        name="accountEmail"
        onChange={onChange('accountEmail')}
        onBlur={handleBlur}
        value={values.accountEmail}
        type="text"
        error={
          getIn(touched, 'accountEmail') &&
          Boolean(getIn(errors, 'accountEmail'))
        }
        helperText={
          getIn(touched, 'accountEmail') && getIn(errors, 'accountEmail')
            ? getIn(errors, 'accountEmail')
            : 'Ej: Av normadie'
        }
      />
    </>
  );
}

PaymentForm.title = 'Ingrese datos de su medio de pago';
PaymentForm.initialValues = {
  accountType: '',
  accountBank: '',
  accountName: '',
  accountNumber: '',
  accountExpireDate: '',
  accountEmail: '',
};
PaymentForm.onSubmit = (onSubmit) => (data, options) => {
  const paymentMethod = { paymentMethod: { ...data } };
  onSubmit(paymentMethod, options);
};
