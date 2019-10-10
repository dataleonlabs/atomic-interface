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
    label: "Date Picker",
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
    if (this.props.options != null && this.props.options.startDate != null && this.props.options.endDate) {
      if ((date >= this.props.options.startDate) && (date <= this.props.options.endDate)) {
        this.setState({
          startDate: date
        });
      }
    } else {
      this.setState({
        startDate: date
      });
    }


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
              <ReactDatePicker  {...this.props.options} disabled={this.props.readOnly} dateFormat={this.props.dateFormat} selected={this.state.startDate} {...field} onChange={this.handleChange(setFieldValue)} />
            </StyledReactDatePickerContainer>
          </React.Fragment>
        </Control>
      )
    }

    return (
      <Control {...this.props} label={undefined}>
        <Field
          {...this.props}
          id={this.props.name}
          render={renderField}
        />
      </Control>
    )
  }
}

export default DatePicker