/* istanbul ignore next */
import React from 'react';
import { Field, FieldProps } from 'formik';
import { AsyncSelectProps as Props } from './props';
import Control from '../../Control';
import { StyledAsyncSelectBase } from './style'
import { FormText } from 'reactstrap';
import { FormControlHelper } from '../../formControlHelper';

/**
 * Select render element
 */

interface State {
  onChanged: boolean
}

/* istanbul ignore next */
class AsyncSelect extends React.PureComponent<Props, State> {

  public static defaultProps: Partial<Props> = {
  }

  public state: State = {
    onChanged: false,
  }

  /* istanbul ignore next */
  public renderField = ({ field, form: { touched, values, submitCount, errors, setFieldValue } }: FieldProps<{}>) /* istanbul ignore next  */ => {
    const { name, ...rest } = this.props;

    /* istanbul ignore next  */
    const onChangeValue = (evt) => {
      this.setState({ onChanged: true }, () => {
        if (Array.isArray(evt)) {
          let items: string[]; items = [];
          evt.map((item) => {
            items.push(item.value);
          });
          setFieldValue(name, items);
        } else {
          if (evt) {
            setFieldValue(name, evt.value);
          } else {
            setFieldValue(name, undefined);
          }
        }
      });
    }

    /* istanbul ignore else */
    const objFormControlHelper = new FormControlHelper();
    if (objFormControlHelper.checkConditional(this.props.conditionnals, values)) {
      return <></>;
    }

    let value = field.value;
    if ((Object.keys(touched).length === 0) && (this.state.onChanged === false)) {
      if (Array.isArray(values[name])) {
        let val: string[]; val = [];
        values[name].map((item) => {
          value = (this.props.defaultOptions ? /* istanbul ignore next  */ this.props.defaultOptions.find(/* istanbul ignore next  */(option: any) => /* istanbul ignore next  */ option.value === item) : '') as any
          val.push(value);
        });
        value = val;
      } else {
        value = (this.props.defaultOptions ? /* istanbul ignore next  */ this.props.defaultOptions.find(/* istanbul ignore next  */(option: any) => /* istanbul ignore next  */ option.value === values[name]) : '') as any
      }
    }

    /* istanbul ignore next */
    return (
      <Control name={"as_" + name} {...rest}>
        <React.Fragment>
          <StyledAsyncSelectBase
            name={"as_" + name}
            {...field}
            value={value}
            {...rest}
            isDisabled={this.props.readOnly}
            onChange={onChangeValue}
          />
          {/* istanbul ignore next  */ submitCount > 0 && /* istanbul ignore next  */ (errors["as_" + name] ? true : false)
            && /* istanbul ignore next  */ <FormText color="danger">{errors["as_" + name]}</FormText>
          }
        </React.Fragment>
      </Control>
    )
  }

  public render() {
    const { name, ...rest } = this.props;

    return (
      <Field
        name={"as_" + name}
        {...rest}
        id={"as_" + name}
        render={this.renderField}
      />
    )
  }
}

/* istanbul ignore next */
export default AsyncSelect;
