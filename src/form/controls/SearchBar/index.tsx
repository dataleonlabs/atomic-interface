import React from 'react';
import { Field, FieldProps } from 'formik';
import { Search } from 'react-feather';
import { InputGroup } from 'reactstrap';
import { SearchBarProps as Props } from './props';
import { StyledInputSearchBootstrap, StyledInputSearchGroupAddonLeft } from './style';

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

  const renderField = ({ field }: FieldProps<{}>) => (
    <React.Fragment>
      <InputGroup>
        <StyledInputSearchGroupAddonLeft addonType="prepend" navBar={props.navBar}>
          <div className="input-group-text"><span style={{ marginRight: '5px' }}>{PrependIcon}</span>{PrependString}</div>
        </StyledInputSearchGroupAddonLeft>
        <StyledInputSearchBootstrap placeholder={props.placeholder} {...field} navBar={props.navBar} type={props.closeIcon ? "search" : "input"} />
      </InputGroup>
    </React.Fragment>
  );

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
