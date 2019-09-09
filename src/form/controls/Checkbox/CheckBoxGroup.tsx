import React, { ChangeEvent } from 'react';
import { Field, FieldProps } from 'formik';
import { CustomInput, FormText } from 'reactstrap';
import { CheckboxProps as Props } from './props';
import Control from '../../Control';


const CheckBoxGroup = (props: Props) => {

  const renderField = ({ field, form: { submitCount, errors, setFieldValue, } }: FieldProps<{}>) => {
    const { name, onBlur, value = [] } = field;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const checked = value.some(item => item === e.target.id)
      if (checked) {
        setFieldValue(name, value.filter(item => item !== e.target.id))
      } else {
        setFieldValue(name, [...value, e.target.id])
      }
    }

    const handleAllChange = () => {
      if (JSON.stringify(props.options) === JSON.stringify(value)) {
        setFieldValue(name, [])
      } else {
        setFieldValue(name, props.options)
      }
    }

    return (
      <React.Fragment>

        {Array.isArray(props.options) && props.options.length &&
          <>
            <CustomInput
              type='checkbox'
              id='all'
              label={'all'}
              checked={JSON.stringify(props.options) === JSON.stringify(value)}
              onChange={handleAllChange}
              onBlur={onBlur}
            />
            {props.options.map((option: any) => (
              <CustomInput
                key={option}
                type='checkbox'
                id={option}
                label={option}
                checked={value.some(item => item === option)}
                onChange={handleChange}
                onBlur={onBlur}
              />
            ))
            }

          </>
        }
        {submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)
          && <FormText color="danger">{errors[props.name]}</FormText>
        }
      </React.Fragment>
    );
  }

  return (
    <Control {...props} label={undefined}>
      <Field
        {...props}
        id={props.name}
        render={renderField}
      />
    </Control>
  )
}

export default CheckBoxGroup;
