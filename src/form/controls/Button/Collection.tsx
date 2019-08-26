import React, { useState } from 'react';
import { ButtonCollectionProps as Props } from './props';
import Button from './index';
import { APIGatewayFetch } from 'yap-sdk';

const Collection = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const { children, ...rest } = props;

  /* istanbul ignore next  */
  async function onClick() {
    try {
      setLoading(true);
      if (typeof props.onLoading === 'function') {
        await props.onLoading();
      }

      const api = new APIGatewayFetch({ apiKey: props.apiKey, apiUrl: props.apiUrl });

      // Get content to display
      const data = await api[props.type]({ ...rest });
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
    <Button
      outline={rest.outline}
      active={rest.active}
      block={rest.block}
      color={rest.color}
      disabled={rest.disabled}
      size={rest.size}
      loading={loading}
      onClick={onClick}
      type="button"
    >
    <>{children}</>
    </Button>
  )
}

export default Collection
