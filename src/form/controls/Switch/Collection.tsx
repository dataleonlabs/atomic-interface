import React, { useState, useEffect } from 'react';
import { CustomInput } from 'reactstrap';
import { SwitchCollectionProps as Props } from './props';
import Control from '../../Control';
import { APIGatewayFetch } from 'yap-sdk';

/**
 * Collection render element
 */
const Collection = (props: Props) => {

  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState(false)
  const { children, ...rest } = props;

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

  return (
    <Control {...props} label={undefined} type="text">
      <CustomInput
        {...props}
        id={props.name}
        loading={loading}
        onClick={onClick}
        checked={value}
        type='switch'
      />
      <>{children}</>
    </Control>
  )
}

export default Collection;
