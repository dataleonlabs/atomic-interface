import React from 'react';
import { Field, FieldProps } from 'formik';
import { Search } from 'react-feather';
import { Input as SearchBarBootstrap, InputGroup, InputGroupAddon } from 'reactstrap';
import { SearchBarProps as Props } from './props';

/**
 * wrap function for grid bootstrap
 * @param component compenent receive data
 * @param field wrap function data
 */

/*
  style for search icon
   border: 1px solid #ced4da;
   border-radius: .25rem;
   border-top-left-radius: 0;
   border-bottom-left-radius: 0;
   border-right: none;
   display: flex;
   align-items: center;
   padding-left: 5px; 

   style for input
   border-left: none;
 */

const wrapperSearchBar = (component: JSX.Element, field: Props) => {
  const PrependIcon = field.leftAddonIcon || <Search />
  const PrependString = field.leftAddonString || 'search'
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend" tag='button' >
        <span style={{marginRight:'5px'}}>{PrependIcon}</span>{PrependString}
      </InputGroupAddon>
      {component}
    </InputGroup>
  );
};


/**
 * SearchBar render element
 */
const SearchBar = (props: Props) => {
  const { value, ...rest } = props;
  const renderField = ({ field }: FieldProps<{}>) => (
    <React.Fragment>
      {wrapperSearchBar(<SearchBarBootstrap  {...rest} {...field} type="search" />, props)}
    </React.Fragment>
  );

  return (
    <Field id={props.name} render={renderField} />
  )
}

export default SearchBar;
