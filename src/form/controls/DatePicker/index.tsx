import * as React from 'react';
import { DatePickerProps as Props } from './props'
import { Field, FieldProps } from 'formik';
import Control from '../../Control';
import "react-datepicker/dist/react-datepicker.css";
import { StyledReactDatePickerContainer } from "./style";
import ReactDatePicker from "react-datepicker";
import { FormControlHelper } from '../../formControlHelper';

/* istanbul ignore next */
class DatePicker extends React.PureComponent<Props> {

  /* istanbul ignore next */
  public static defaultProps: Partial<Props> = {
    dateFormat: "dd/MM/yyyy",
  }

  /* istanbul ignore next */
  public state = {
    date: null
  }

  /* istanbul ignore next */
  constructor(props: Props) {
    super(props);
    this.handleChange.bind(this);
  }

  /* istanbul ignore next */
  public componentDidMount() {
    if (this.props.options && this.props.options.selected) {
      this.setState({
        date: this.props.options && this.props.options.selected
      });
    }
  }

  /* istanbul ignore next */
  public handleChange = (setFieldValue: FieldProps<{}>['form']['setFieldValue']) => async (date: Date) /* istanbul ignore next  */ => {
    setFieldValue(this.props.name, date);
    /* istanbul ignore next */
    this.setState({ date });
  }

  /* istanbul ignore next */
  public render() {

    /* istanbul ignore next */
    const renderField = ({ field, form: { values, setFieldValue } }: FieldProps<{}>) => {
      /* istanbul ignore next */
      const objFormControlHelper = new FormControlHelper();

      /* istanbul ignore next */
      if (objFormControlHelper.checkConditional(this.props.conditionnals, values)) {
        return <></>;
      }

      /* istanbul ignore next */
      return (
        <Control {...this.props}>
          <React.Fragment>
            <StyledReactDatePickerContainer>
              <ReactDatePicker
                {...this.props.options}
                disabled={this.props.readOnly}
                dateFormat={this.props.dateFormat}
                selected={this.state.date}
                {...field}
                placeholderText={this.props.placeholder}
                onChange={this.handleChange(setFieldValue)} />
            </StyledReactDatePickerContainer>
          </React.Fragment>
        </Control>
      )
    }

    /* istanbul ignore next */
    return (
      <Field
        {...this.props}
        id={this.props.name}
        render={renderField}
      />
    )
  }
}

/* istanbul ignore next */
export default DatePicker