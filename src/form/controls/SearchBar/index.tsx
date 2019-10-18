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
class SearchBar extends React.PureComponent<Props> {

  public static defaultProps: Partial<Props> = {
    hideLeftAddonLabel: false,
  }

  public render() {

    const PrependIcon = this.props.leftAddonIcon || <Search />
    const PrependString = this.props.leftAddonString ? this.props.leftAddonString : 'search';

    const renderField = ({ field, form: { values } }: FieldProps<{}>) => {

      const objFormControlHelper = new FormControlHelper();
      if (objFormControlHelper.checkConditional(this.props.conditionnals, values)) {
        return <></>;
      }

      return (
        <React.Fragment>
          <InputGroup>
            <StyledInputSearchGroupAddonLeft addonType="prepend" navbar={this.props.navBar}>
              <div className="input-group-text"><span style={{ marginRight: '5px' }}>{PrependIcon}</span>{!this.props.hideLeftAddonLabel && PrependString}</div>
            </StyledInputSearchGroupAddonLeft>
            <StyledInputSearchBootstrap placeholder={this.props.placeholder} {...field} navbar={this.props.navBar} type={this.props.closeIcon ? "search" : "input"} />
          </InputGroup>
        </React.Fragment>
      )
    }

    return (
      <Field
        {...this.props}
        id={this.props.name}
        bsSize={this.props.controlSize || 'md'}
        render={renderField}
      />
    )
  }
}

export default SearchBar;
