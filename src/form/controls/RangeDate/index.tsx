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

class RangeDate extends React.PureComponent<Props> {

  public state = {
    dateMin: null,
    dateMax: null
  }

  public defaultProps: Partial<Props> = {
    dateFormat: "dd/MM/yyyy",
  }  

  public renderField = ({ field, form: { values, submitCount, errors, setFieldValue } }: FieldProps<{}>) => {
    const { minPlaceholder, maxPlaceholder, name, label, ...rest } = this.props;

    const changeValueMin = (date: Date) => {
      const val = { min: date, max: values[name] && values[name].max }
      setFieldValue(name, val);
      this.setState({
        dateMin: date
      });
    }

    const changeValueMax = (date: Date) => {
      const val = { min: values[name] && values[name].min, max: date }
      setFieldValue(name, val);
      this.setState({
        dateMax: date
      });
    }

    const objFormControlHelper = new FormControlHelper();
    if (objFormControlHelper.checkConditional(this.props.conditionnals, values)) {
      return <></>;
    }

    return (
      <FormGroup>
        <Control label={label} name={"default_" + name} {...rest}>
          <StyledDivContainer>
            <StyledReactDatePickerContainer>
              <ReactDatePicker
                name={"min"}
                {...field}              
                id={"min"}              
                disabled={this.props.readOnly}
                dateFormat={this.props.dateFormat}
                selected={this.state.dateMin || values[name].min}
                {...field}
                onChange={changeValueMin}
                placeholderText={minPlaceholder}
              />
            </StyledReactDatePickerContainer>
          </StyledDivContainer>
          <StyledDivContainer>
            <StyledReactDatePickerContainer>
              <ReactDatePicker
                name={"max"}
                {...field}              
                id={"max"}
                disabled={this.props.readOnly}
                dateFormat={this.props.dateFormat}
                selected={this.state.dateMax || values[name].max}
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
