import React from 'react';
import { Field, FieldProps } from 'formik';
import { Input as SearchBarBootstrap, InputGroup, InputGroupAddon } from 'reactstrap';
import { Search } from 'react-feather';
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
        {PrependIcon}
        {PrependString}
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
  return (
    <Field
      id={props.name}
      render={({ field }: FieldProps<{}>) => (
        <React.Fragment>
          {wrapperSearchBar(<SearchBarBootstrap  {...rest} type="search" />, props)}
        </React.Fragment>
      )}
    />
  )
}

export default SearchBar;
