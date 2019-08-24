import React from 'react';
import { FieldArrayProps as Props } from './props';
import { FieldArray as FieldArrayBase } from 'formik';

/**
 * FieldArray render element
 */
const FieldArray = (props: Props) => {
  const { children, ...rest } = props;
  const renderField = (arrayHelpers: any) => (
    <>
      {(typeof children === 'function') &&
        (children as /* tslint:disable */ Function /* tslint:enable */)(arrayHelpers)
      }
    </>
  );

  return (
    <FieldArrayBase
      {...rest}
      render={renderField}
    />
  )
}

export default FieldArray;
