import React from 'react';

import _get from 'lodash/get';

const TextInput = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  const fieldValue = _get(value, id);
  return (
    <div>
      <input
        type="text"
        id={id}
        name={id}
        value={fieldValue}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default TextInput;
