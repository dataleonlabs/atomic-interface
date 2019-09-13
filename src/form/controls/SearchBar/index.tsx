import React from 'react';
import { Field, FieldProps } from 'formik';
import { Search } from 'react-feather';
import { InputGroup } from 'reactstrap';
import { SearchBarProps as Props } from './props';
import { StyledInputSearchBootstrap, StyledInputSearchGroupAddonLeft } from './style';
import { FormControlHelper } from '../../formControlHelper';

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */

/**
 * SearchBar render element
 */
const SearchBar = (props: Props) => {
  const PrependIcon = props.leftAddonIcon || <Search />
  const PrependString = props.leftAddonString || 'search'

  const renderField = ({ field, form: { values } }: FieldProps<{}>) => {

    const objFormControlHelper=new FormControlHelper();
    if(objFormControlHelper.checkConditional(props.conditionnals, values)){
      return <></>;
    }

    return (
      <React.Fragment>
        <InputGroup>
          <StyledInputSearchGroupAddonLeft addonType="prepend" navbar={props.navBar}>
            <div className="input-group-text"><span style={{ marginRight: '5px' }}>{PrependIcon}</span>{PrependString}</div>
          </StyledInputSearchGroupAddonLeft>
          <StyledInputSearchBootstrap placeholder={props.placeholder} {...field} navbar={props.navBar} type={props.closeIcon ? "search" : "input"} />
        </InputGroup>
      </React.Fragment>
    )
  }

  return (
    <Field
      {...props}
      id={props.name}
      bsSize={props.controlSize || 'md'}
      render={renderField}
    />
  )
}

export default SearchBar;
