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
    dateFormat: "dd/MM/yyyy"
  }

  public state = {
    startDate: new Date()
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public componentDidMount() {
  }


  /* istanbul ignore next */
  public handleChange(date: Date) /* istanbul ignore next */ {
    this.setState({
      startDate: date
    });
    /* istanbul ignore next */
    this.handleChange = this.handleChange.bind(this);
  }
  public render() {

    const renderField = ({ field, form: { values } }: FieldProps<{}>) => {

      const objFormControlHelper = new FormControlHelper();
      if (objFormControlHelper.checkConditional(this.props.conditionnals, values)) {
        return <></>;
      }

      return (
        <Control {...this.props}>
          <React.Fragment>
            <StyledReactDatePickerContainer>
              <ReactDatePicker  {...this.props.options} disabled={this.props.disabled} dateFormat={this.props.dateFormat} selected={this.state.startDate} {...field} onChange={this.handleChange} />
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