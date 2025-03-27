import React, { useEffect } from 'react';

import type { FieldProps } from '@fluentui/react-components';
import { Field, Input } from '@fluentui/react-components';

type ValidationState = 'success' | 'error' | 'warning' | 'none';

const validationMessages: { [key in ValidationState]: string } = {
  success: 'Email vyplněn!',
  error: 'Musí mít alespoň 3 znaky',
  none: 'Toto pole je povinné',
  warning: '',
};

export const EmailField = (props: Partial<FieldProps>) => {
  const [value, setValue] = React.useState('');
  const [state, setState] = React.useState<ValidationState | undefined>();

  const validate = (val: string) => {
    if (!val) {
      setState('none');
    } else if (val.length < 3) {
      setState('error');
    } else {
      setState(undefined);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    validate(e.target.value);
  };

  return (
    <Field
      onChange={handleChange}
      label="Zadejte email"
      validationState={state}
      validationMessage={state && validationMessages[state]}
      {...props}
    >
      <Input />
    </Field>
  );
};
