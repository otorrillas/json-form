import React from 'react';

import { Field } from 'formik';

import RadioOption from './RadioOption';

// Radio group
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        {children}
      </fieldset>
    </div>
  );
};

const RadioGroup = ({ value, id, label, fields }) => (
  <RadioButtonGroup value={value} id={id} label={label}>
    {fields.map(option => {
      return (
        <Field
          component={RadioOption}
          key={option.id}
          id={option.id}
          name={id}
          label={option.label}
        />
      );
    })}
  </RadioButtonGroup>
);

export default RadioGroup;
