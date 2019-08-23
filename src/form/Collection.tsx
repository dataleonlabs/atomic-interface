import React, { useState, useEffect } from 'react';
// import { FormCollectionProps as Props } from './props';
import { APIGatewayFetch } from 'yap-sdk';
import Form from './index';

const FormCollection = (props: any) => {
  const [values, setValues] = useState({})
  const { children, ...rest } = props;

  /* istanbul ignore next  */
  async function onLoad() {
    try {
      if (props.id) {
        if (typeof props.onLoading === 'function') {
          await props.onLoading();
        }

        // Get content to display
        const api = new APIGatewayFetch({ apiKey: props.apiKey, apiUrl: props.apiUrl });
        const data = await api.findOne({
          ...rest,
          where: { ...rest.where, id: props.id }
        });

        setValues(data);
        if (typeof props.onLoaded === 'function') {
          await props.onLoaded(data);
        }
      }
    } catch (error) {
      if (typeof props.onError === 'function') {
        await props.onError(error);
      }
    }
  }

  /* istanbul ignore next  */
  async function onSave() {
    try {
      const api = new APIGatewayFetch({ apiKey: props.apiKey, apiUrl: props.apiUrl });
      if (props.id) {
        const data = await api.update({
          ...rest,
          values,
          where: { ...rest.where, id: props.id }
        });
        if (typeof props.onSave === 'function') {
          await props.onSave(data);
        }
      } else {
        const data = await api.create({
          ...rest,
          values,
          where: { ...rest.where }
        });
        if (typeof props.onSave === 'function') {
          await props.onSave(data);
        }
      }
    } catch (error) {
      if (typeof props.onError === 'function') {
        await props.onError(error);
      }
    }
  }

  useEffect(() => {
    onLoad(); 
  }, []);

  const onSubmit = (vals: any) => {
    setValues(vals);
    onSave();
  }

  return (
    <Form
      {...rest}
      initialValues={{ ...rest.initialValues, ...values }}
      onSubmit={onSubmit}
    >
      {children}
    </Form>
  )
}

export default FormCollection
