import React from 'react';

import 'assets/scss/component/forms/_form.scss'

import FormInput from './Input';
import FormLabel from './Label';
import FormSelect from './Select';
import FormTextarea from './Textarea';
import FormGroup from './Group';
import FormGroupText from './GroupText';

type FormProps = {
  className?: string;
  action?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  method?: 'get' | 'post' | string;
}

const Form: React.FC<FormProps> = ({ children, className, action, target, method }) => {
  return (
    <form 
      action={action} 
      target={target} 
      method={method} 
      className={`form${className ? ' '+className : ''}`}
    >
      {children}
    </form>
  );
}

export default Object.assign(Form, {
  Group: FormGroup,
  GroupText: FormGroupText,
  Input: FormInput,
  Label: FormLabel,
  Select: FormSelect,
  Textarea: FormTextarea
});
