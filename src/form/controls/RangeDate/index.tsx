/* istanbul ignore next  */
import React from 'react';
import { Field, FieldProps } from 'formik';
import { FormGroup, FormText } from 'reactstrap';
import { RangeDateProps as Props } from './props';
import Control from '../../Control';
import { FormControlHelper } from '../../formControlHelper';
import { StyledDivContainer } from './style';
import ReactDatePicker from "react-datepicker";
import { StyledReactDatePickerContainer } from '../DatePicker/style';
/**
 * RangeDate render element
 */

/* istanbul ignore next  */
class RangeDate extends React.PureComponent<Props> {

  public state = {
    dateMin: null,
    dateMax: null
  }

  /* istanbul ignore next  */
  public defaultProps: Partial<Props> = {
    dateFormat: "dd/MM/yyyy",
  }

  /* istanbul ignore next  */
  public renderField = ({ field, form: { values, submitCount, errors, setFieldValue } }: FieldProps<{}>) => {
    const { minPlaceholder, maxPlaceholder, name, nameMin, nameMax, label, ...rest } = this.props;

    /* istanbul ignore next  */
    const changeValueMin = (date: Date) => {
      const val = { [nameMin]: date, [nameMax]: values[name] && values[name][nameMax] }
      setFieldValue(name, val);
      this.setState({
        dateMin: date
      });
    }

    /* istanbul ignore next  */
    const changeValueMax = (date: Date) => {
      const val = { [nameMin]: values[name] && values[name][nameMin], [nameMax]: date }
      setFieldValue(name, val);
      this.setState({
        dateMax: date
      });
    }

    const objFormControlHelper = new FormControlHelper();

    /* istanbul ignore else  */
    if (objFormControlHelper.checkConditional(this.props.conditionnals, values)) {
      return <></>;
    }

    return (
      <FormGroup>
        <Control label={label} name={"default_" + name} {...rest}>
          <StyledDivContainer>
            <StyledReactDatePickerContainer>
              <ReactDatePicker
                name={nameMin}
                {...field}
                id={nameMin}
                disabled={this.props.readOnly}
                dateFormat={this.props.dateFormat}
                selected={this.state.dateMin || values[name] && values[name].min}
                {...field}
                onChange={changeValueMin}
                placeholderText={minPlaceholder}
              />
            </StyledReactDatePickerContainer>
          </StyledDivContainer>
          <StyledDivContainer>
            <StyledReactDatePickerContainer>
              <ReactDatePicker
                name={nameMax}
                {...field}
                id={nameMax}
                disabled={this.props.readOnly}
                dateFormat={this.props.dateFormat}
                selected={this.state.dateMax || values[name] && values[name].max}
                {...field}
                onChange={changeValueMax}
                placeholderText={maxPlaceholder}
              />
            </StyledReactDatePickerContainer>
          </StyledDivContainer>
          {
            submitCount > 0 && /* istanbul ignore next  */ (errors["default_" + name] ? true : false)
            && /* istanbul ignore next  */ <FormText color="danger">{errors["default_" + name]}</FormText>
          }
        </Control >
      </FormGroup >
    )
  }

  public render() {

    const { minPlaceholder, maxPlaceholder, name, label, ...rest } = this.props;
    return (
      <Field
        {...rest}
        name={"default_" + name}
        id={"default_" + name}
        bsSize={this.props.controlSize || 'md'}
        render={this.renderField}
      />
    )
  }
}
export default RangeDate;
