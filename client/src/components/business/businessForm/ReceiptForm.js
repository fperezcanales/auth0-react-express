/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import * as Yup from 'yup';
import { getIn } from 'formik';
import { useAuth0 } from '../../../auth/react-auth0-spa';
import InputField from '../../../ui-kit/inputField/InputField';

export default function ReceiptForm({
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
        label="Nombre de empresa"
        id="businessName"
        name="businessName"
        onChange={onChange('businessName')}
        onBlur={handleBlur}
        value={values.businessName}
        type="text"
        error={
          getIn(touched, 'businessName') &&
          Boolean(getIn(errors, 'businessName'))
        }
        helperText={
          getIn(touched, 'businessName') && getIn(errors, 'businessName')
            ? getIn(errors, 'businessName')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="RUT Negocio"
        id="businessDNI"
        name="businessDNI"
        onChange={onChange('businessDNI')}
        onBlur={handleBlur}
        value={values.businessDNI}
        type="text"
        error={
          getIn(touched, 'businessDNI') &&
          Boolean(getIn(errors, 'businessDNI'))
        }
        helperText={
          getIn(touched, 'businessDNI') && getIn(errors, 'businessDNI')
            ? getIn(errors, 'businessDNI')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Representante legal"
        id="businessRepresentative"
        name="businessRepresentative"
        onChange={onChange('businessRepresentative')}
        onBlur={handleBlur}
        value={values.businessRepresentative}
        type="text"
        error={
          getIn(touched, 'businessRepresentative') &&
          Boolean(getIn(errors, 'businessRepresentative'))
        }
        helperText={
          getIn(touched, 'businessRepresentative') && getIn(errors, 'businessRepresentative')
            ? getIn(errors, 'businessRepresentative')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Correo electrónico"
        name="businessEmail"
        onChange={onChange('businessEmail')}
        onBlur={handleBlur}
        value={values.businessEmail}
        type="text"
        error={
          getIn(touched, 'businessEmail') &&
          Boolean(getIn(errors, 'businessEmail'))
        }
        helperText={
          getIn(touched, 'businessEmail') && getIn(errors, 'businessEmail')
            ? getIn(errors, 'businessEmail')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Fono"
        id="businessFono"
        name="businessFono"
        onChange={onChange('businessFono')}
        onBlur={handleBlur}
        value={values.businessFono}
        type="text"
        error={
          getIn(touched, 'businessFono') &&
          Boolean(getIn(errors, 'businessFono'))
        }
        helperText={
          getIn(touched, 'businessFono') && getIn(errors, 'businessFono')
            ? getIn(errors, 'businessFono')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Actividad económica"
        id="businessEconomicActivity"
        name="businessEconomicActivity"
        onChange={onChange('businessEconomicActivity')}
        onBlur={handleBlur}
        value={values.businessEconomicActivity}
        type="text"
        error={
          getIn(touched, 'businessEconomicActivity') &&
          Boolean(getIn(errors, 'businessEconomicActivity'))
        }
        helperText={
          getIn(touched, 'businessEconomicActivity') && getIn(errors, 'businessEconomicActivity')
            ? getIn(errors, 'businessEconomicActivity')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Logo"
        id="businessLogo"
        name="businessLogo"
        onChange={onChange('businessLogo')}
        onBlur={handleBlur}
        value={values.businessLogo}
        type="text"
        error={
          getIn(touched, 'businessLogo') &&
          Boolean(getIn(errors, 'businessLogo'))
        }
        helperText={
          getIn(touched, 'businessLogo') && getIn(errors, 'businessLogo')
            ? getIn(errors, 'businessLogo')
            : 'Ej: Av normadie'
        }
      />
    </>
  );
}

/*ReceiptForm.validationSchema = Yup.object().shape({
  businessName: Yup.string().required('Campo requerido'),
  businessDNI: Yup.string().required('Campo requerido'),
  businessRepresentative: Yup.string().required('Campo requerido'),
  businessEmail: Yup.string().required('Campo requerido'),
  businessFono: Yup.string().required('Campo requerido'),
  businessEconomicActivity: Yup.string().required('Campo requerido'),
  businessLogo: Yup.string().required('Campo requerido'),
}); */
ReceiptForm.title = 'Ingrese datos de su negocio';
ReceiptForm.initialValues = {
  businessName: '',
  businessDNI: '',
  businessRepresentative: '',
  businessEmail: '',
  businessFono: '',
  businessEconomicActivity: '',
  businessLogo: '',
};
ReceiptForm.onSubmit = (onSubmit) => (data, options) => {
  const businessActivity = { businessActivity: { ...data } };
  onSubmit(businessActivity, options);
};
