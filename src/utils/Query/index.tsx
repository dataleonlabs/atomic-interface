import React from 'react';
import { Props } from './props';
import { APIGatewayFetch } from 'yap-sdk';

class Query extends React.Component<Props> {

  public static defaultProps: Partial<Props> = {
    limit: 0,
    offset: 0,
    values: {},
    where: {}
  }

  public async componentDidMount() {
    await this.fetch();
  }

  public fetch = async () => {
    const { children, ...rest } = this.props;
    if (typeof children === 'function') {
      try {
        const api = new APIGatewayFetch({
          apiKey: this.props.apiKey,
          apiUrl: this.props.apiUrl
        });

        children({ data: null, error: null, onLoading: true });
        const data = await api[this.props.type]({ ...rest });
        children({ data, error: null, onLoading: false });
      } catch (error) {
        children({ data: null, error, onLoading: false });
      }
    }
  }

  public render() {
    return (<></>);
  }
}

export default Query
