import React from 'react';

import { Field } from 'formik';

import _get from 'lodash/get';
import _find from 'lodash/find';

import { RadioGroup, TextInput } from './components';

const ExtraFields = ({ values, fields, id }) => {
  const selectedValue = _get(values, id);
  const extraFields = _find(fields, ['id', selectedValue]);

  if (extraFields && extraFields.fields) {
    return extraFields.fields.map(extra => (
      <NestedForm section={extra} values={values} />
    ));
  }

  return null;
};

const NestedForm = ({ section, values }) => {
  const { id, label, type, fields } = section;

  let Component;

  switch (type) {
    case 'RadioGroup':
      Component = RadioGroup;
      break;

    case 'TextInput':
      Component = TextInput;
      break;

    default:
      return null;
  }

  return (
    <>
      <Field component={Component} id={id} label={label} fields={fields} />

      {/* Conditionally rendered fields */}
      <ExtraFields id={id} values={values} fields={fields} />
    </>
  );
};

export default NestedForm;
