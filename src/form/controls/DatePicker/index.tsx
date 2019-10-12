import * as React from 'react';
import { DatePickerProps as Props } from './props'
import { Field, FieldProps } from 'formik';
import Control from '../../Control';
import "react-datepicker/dist/react-datepicker.css";
import { StyledReactDatePickerContainer } from "./style";
import ReactDatePicker from "react-datepicker";
import { FormControlHelper } from '../../formControlHelper';

class DatePicker extends React.PureComponent<Props> {

  public static defaultProps: Partial<Props> = {
    dateFormat: "dd/MM/yyyy",
  }

  public state = {
    startDate: new Date()
  }

  constructor(props: Props) {
    super(props);
    this.handleChange.bind(this);
  }

  componentDidMount() {
    this.handleChange.bind(this);
    if (this.props.options && this.props.options.selected) {
      this.setState({
        startDate: this.props.options && this.props.options.selected
      });
    }
  }

  /* istanbul ignore next */
  public handleChange = (setFieldValue: FieldProps<{}>['form']['setFieldValue']) => async (date: Date) /* istanbul ignore next  */ => {
    setFieldValue(this.props.name, date);

    this.setState({
      startDate: date
    });

    /* istanbul ignore next */
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {

    const renderField = ({ field, form: { values, setFieldValue } }: FieldProps<{}>) => {

      const objFormControlHelper = new FormControlHelper();
      if (objFormControlHelper.checkConditional(this.props.conditionnals, values)) {
        return <></>;
      }

      return (
        <Control {...this.props}>
          <React.Fragment>
            <StyledReactDatePickerContainer>
              <ReactDatePicker
                {...this.props.options}
                disabled={this.props.readOnly}
                dateFormat={this.props.dateFormat}
                selected={this.state.startDate}
                {...field}
                placeholderText={this.props.placeholder}
                onChange={this.handleChange(setFieldValue)} />
            </StyledReactDatePickerContainer>
          </React.Fragment>
        </Control>
      )
    }

    return (
      <Field
        {...this.props}
        id={this.props.name}
        render={renderField}
      />
    )
  }
}

export default DatePicker