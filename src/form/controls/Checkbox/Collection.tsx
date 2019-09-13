import React, { useState, useEffect } from 'react';
import { CustomInput, FormText } from 'reactstrap';
import { CheckboxCollectionProps as Props } from './props';
import Control from '../../Control';
import { APIGatewayFetch } from 'yap-sdk';
import { FieldProps, Field } from 'formik';
import { FormControlHelper } from '../../formControlHelper';

/**
 * Collection render element
 */
const Collection = (props: Props) => {

  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState(false)
  const { children, apiKey, apiUrl, fieldId, fieldUpdate, onLoading, onLoaded, ...rest } = props;

  useEffect(() => {
    loadValue();
  }, [loadValue])

  /* istanbul ignore next  */
  async function loadValue() /* istanbul ignore next  */ {
    try /* istanbul ignore next  */ {
      const api = new APIGatewayFetch({ apiKey: props.apiKey, apiUrl: props.apiUrl });

      // Get content to display
      const data = await api.findOne({
        ...rest,
        where: { [props.fieldId.key]: props.fieldId.value },
      });
      setValue(data[props.fieldUpdate] || false);
    } catch (error) {
      if (typeof props.onError === 'function') {
        await props.onError(error);
        setLoading(false);
      }
    }
  }

  /* istanbul ignore next  */
  async function onClick() /* istanbul ignore next  */ {
    try /* istanbul ignore next  */ {
      const newValue = !value;
      setLoading(true);
      setValue(newValue)
      if (typeof props.onLoading === 'function') {
        await props.onLoading();
      }

      const api = new APIGatewayFetch({ apiKey: props.apiKey, apiUrl: props.apiUrl });

      // Get content to display
      const data = await api.update({
        ...rest,
        where: { [props.fieldId.key]: props.fieldId.value },
        values: { [props.fieldUpdate]: newValue }
      });
      setLoading(false);
      if (typeof props.onLoaded === 'function') {
        await props.onLoaded(data);
      }
    } catch (error) {
      if (typeof props.onError === 'function') {
        await props.onError(error);
        setLoading(false);
      }
    }
  }

  const renderField = ({ field, form: { values, submitCount, errors } }: FieldProps<{}>) => {
    
    const objFormControlHelper=new FormControlHelper();
    if(objFormControlHelper.checkConditional(props.conditionnals, values)){
      return <></>;
    }

    return (
      <Control {...props} label={undefined} type="text">
        <CustomInput
          {...field}
          {...rest}
          id={props.name}
          loading={String(loading)}
          onClick={onClick}
          defaultChecked={value || false}
          invalid={submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)}
          type='checkbox'
        />
        {submitCount > 0 && /* istanbul ignore next  */ (errors[props.name] ? true : false)
          && <FormText color="danger">{errors[props.name]}</FormText>
        }
        <>{children}</>
      </Control>
    )
  }

  return (
    <Field
      {...props}
      id={props.name}
      render={renderField}
    />
  )
}

export default Collection;
