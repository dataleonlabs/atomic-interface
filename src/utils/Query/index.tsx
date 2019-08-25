import React from 'react';
import { QueryProps as Props, Stats } from './props';
import { APIGatewayFetch } from 'yap-sdk';

class Query extends React.Component<Props, Stats> {

  public static defaultProps: Partial<Props> = {
    limit: 0,
    offset: 0,
    values: {},
    where: {}
  }

  public state = {
    contentRendered: null,
    onRendering: false
  }

  public async componentDidMount() {
    await this.fetch();
  }

  public async componentDidUpdate() {
    await this.fetch();
  }

  public fetch = async () => {
    const { children, ...rest } = this.props;

    try {
      const api = new APIGatewayFetch({ apiKey: this.props.apiKey, apiUrl: this.props.apiUrl });
      if (typeof children === 'function') {
        const contentRendered = children({ data: null, error: null, onLoading: true, loaded: false });
        if (contentRendered) {
          this.setState({ contentRendered, onRendering: true });
        }
      }

      if (typeof this.props.onLoading === 'function') {
        await this.props.onLoading();
      }

      // Get content to display
      const data = await api[this.props.type]({ ...rest });
      if (typeof this.props.onLoaded === 'function') {
        await this.props.onLoaded(data);
      }

      if (typeof children === 'function') {
        const contentRendered = children({ data, error: null, onLoading: false, loaded: true });
        if (contentRendered) {
          this.setState({ contentRendered, onRendering: true });
        }
      }
    } catch (error) /* istanbul ignore next */ {
    /* istanbul ignore if */
      if (typeof this.props.onError === 'function') {
      /* istanbul ignore next */
        await this.props.onError(error && error.error ? error.error : error);
      }

    /* istanbul ignore next */
      if (typeof children === 'function') {
        const contentRendered = children({ data: null, error: error && error.error ? error.error : error, onLoading: false, loaded: true });
        if (contentRendered) {
          this.setState({ contentRendered, onRendering: true });
        }
      }
    }

  }

  public render() {
    if (this.state.onRendering === true) {
      return this.state.contentRendered;
    }

    return (<></>);
  }
}

export default Query
