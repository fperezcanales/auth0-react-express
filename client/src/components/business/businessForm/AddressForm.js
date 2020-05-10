/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import * as Yup from 'yup';
import { getIn } from 'formik';
import { useAuth0 } from '../../../auth/react-auth0-spa';
import InputField from '../../../ui-kit/inputField/InputField';

export default function AddressForm({
  values,
  errors,
  // eslint-disable-next-line no-unused-vars
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
        label="Calle"
        id="addressStreet"
        name="addressStreet"
        onChange={onChange('addressStreet')}
        onBlur={handleBlur}
        value={values.addressStreet}
        type="text"
        error={
          getIn(touched, 'addressStreet') &&
          Boolean(getIn(errors, 'addressStreet'))
        }
        helperText={
          getIn(touched, 'addressStreet') && getIn(errors, 'addressStreet')
            ? getIn(errors, 'addressStreet')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Número"
        id="addressNumber"
        name="addressNumber"
        onChange={onChange('addressNumber')}
        onBlur={handleBlur}
        value={values.addressNumber}
        type="text"
        error={
          getIn(touched, 'addressNumber') &&
          Boolean(getIn(errors, 'addressNumber'))
        }
        helperText={
          getIn(touched, 'addressNumber') && getIn(errors, 'addressNumber')
            ? getIn(errors, 'addressNumber')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Detalle"
        id="addressDetail"
        name="addressDetail"
        onChange={onChange('addressDetail')}
        onBlur={handleBlur}
        value={values.addressDetail}
        type="text"
        error={
          getIn(touched, 'addressDetail') &&
          Boolean(getIn(errors, 'addressDetail'))
        }
        helperText={
          getIn(touched, 'addressDetail') && getIn(errors, 'addressDetail')
            ? getIn(errors, 'addressDetail')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Región"
        name="addressRegion"
        onChange={onChange('addressRegion')}
        onBlur={handleBlur}
        value={values.addressRegion}
        type="text"
        error={
          getIn(touched, 'addressRegion') &&
          Boolean(getIn(errors, 'addressRegion'))
        }
        helperText={
          getIn(touched, 'addressRegion') && getIn(errors, 'addressRegion')
            ? getIn(errors, 'addressRegion')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Ciudad"
        id="addressCity"
        name="addressCity"
        onChange={onChange('addressCity')}
        onBlur={handleBlur}
        value={values.addressCity}
        type="text"
        error={
          getIn(touched, 'addressCity') &&
          Boolean(getIn(errors, 'addressCity'))
        }
        helperText={
          getIn(touched, 'addressCity') && getIn(errors, 'addressCity')
            ? getIn(errors, 'addressCity')
            : 'Ej: Av normadie'
        }
      />
      <InputField
        label="Comuna"
        id="addressCommune"
        name="addressCommune"
        onChange={onChange('addressCommune')}
        onBlur={handleBlur}
        value={values.addressCommune}
        type="text"
        error={
          getIn(touched, 'addressCommune') &&
          Boolean(getIn(errors, 'addressCommune'))
        }
        helperText={
          getIn(touched, 'addressCommune') && getIn(errors, 'addressCommune')
            ? getIn(errors, 'addressCommune')
            : 'Ej: Av normadie'
        }
      />
    </>
  );
}

AddressForm.validationSchema = Yup.object().shape({
  addressStreet: Yup.string().required('Campo requerido'),
  addressNumber: Yup.string().required('Campo requerido'),
  addressDetail: Yup.string().required('Campo requerido'),
  addressRegion: Yup.string().required('Campo requerido'),
  addressCity: Yup.string().required('Campo requerido'),
  addressCommune: Yup.string().required('Campo requerido'),
});
AddressForm.title = 'Ingrese dirección comercial';
AddressForm.initialValues = {
  addressStreet: '',
  addressNumber: '',
  addressDetail: '',
  addressRegion: '',
  addressCity: '',
  addressCommune: '',
};
AddressForm.onSubmit = (onSubmit) => (data, options) => {
  const addressComercial = { addressComercial: { ...data } };
  onSubmit(addressComercial, options);
};
