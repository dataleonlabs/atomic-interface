import React from 'react';
import { Response as Stats, Props } from './props';
import { APIGatewayFetch } from 'yap-sdk';

class Query extends React.Component<Props, Stats> {

  public static defaultProps: Partial<Props> = {
    limit: 0,
    offset: 0,
    values: {},
    where: {}
  }

  public state = {
    data: null,
    error: null,
    onLoading: false,
  };

  public async componentDidMount() {
    await this.fetch();
  }

  public async componentDidUpdate(prevProps: any) {
    if (this.props !== prevProps.where) {
      this.fetch()
    }
  }

  public fetch = async () => {
    const api: any = new APIGatewayFetch({
      apiKey: this.props.apiKey,
      apiUrl: this.props.apiUrl
    });

    this.setState({ data: null, error: {}, onLoading: true }, async () => {
      try {
        const data = await api[this.props.type]({ ...this.props });
        this.setState({ data, error: null, onLoading: false });
      } catch (error) {
        this.setState({ data: null, error, onLoading: false });
      }
    })
  }

  public render() {
    return (
        <>
        {(typeof this.props.children === 'function')
          && (this.props.children as /* tslint:disable */ Function /* tslint:enable */)({ ...this.state })}
        </>
    );
  }
}

export default Query
