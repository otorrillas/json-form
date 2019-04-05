import React from 'react';

import { Formik } from 'formik';

import NestedForm from '../nested-form/NestedForm';
import form from './form.json';

const Form = () => (
  <Formik>
    {({ values }) => (
      <div>
        <h1>{form.heading}</h1>

        {form.sections.map(section => (
          <NestedForm section={section} values={values} />
        ))}
      </div>
    )}
  </Formik>
);

export default Form;
