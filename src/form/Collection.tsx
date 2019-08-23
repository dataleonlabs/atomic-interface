import React from 'react';
// import { FormCollectionProps as Props } from './props';
import { APIGatewayFetch } from 'yap-sdk';
import Form from './index';

interface State {
  values: any
}

/**
 * FormCollection
 */
class FormCollection extends React.Component<any, State> {
  public static defaultProps: Partial<any> = {
  }

  public state = {
    values: {},
  }

  public async componentDidMount() {
    await this.onLoad();
  }

  /* istanbul ignore next  */
  public onLoad = async () => {
    const { children, ...rest } = this.props;
    try {
      if (this.props.id) {
        if (typeof this.props.onLoading === 'function') {
          await this.props.onLoading();
        }

        // Get content to display
        const api = new APIGatewayFetch({ apiKey: this.props.apiKey, apiUrl: this.props.apiUrl });
        const data = await api.findOne({
          ...rest,
          where: { ...rest.where, id: this.props.id }
        });

        this.setState({ values: data });
        if (typeof this.props.onLoaded === 'function') {
          await this.props.onLoaded(data);
        }
      }
    } catch (error) {
      if (typeof this.props.onError === 'function') {
        await this.props.onError(error);
      }
    }
  }

  /* istanbul ignore next  */
  public onSave = async () => {
    const { children, ...rest } = this.props;
    try {
      const api = new APIGatewayFetch({ apiKey: this.props.apiKey, apiUrl: this.props.apiUrl });
      if (this.props.id) {
        const data = await api.update({
          ...rest,
          values: this.state.values,
          where: { ...rest.where, id: this.props.id }
        });
        if (typeof this.props.onSave === 'function') {
          await this.props.onSave(data);
        }
      } else {
        const data = await api.create({
          ...rest,
          values: this.state.values,
          where: { ...rest.where }
        });
        if (typeof this.props.onSave === 'function') {
          await this.props.onSave(data);
        }
      }
    } catch (error) {
      if (typeof this.props.onError === 'function') {
        await this.props.onError(error);
      }
    }
  }

  public onSubmit = (vals: any) => {
    this.setState({ values: vals }, async () => {
      await this.onSave();
    })
  }

  public render() {
    const { children, ...rest } = this.props;
    return (
      <Form
        {...rest}
        initialValues={{ ...rest.initialValues, ...this.state.values }}
        onSubmit={this.onSubmit}
      >
        {children}
      </Form>
    )
  }
}

export default FormCollection
