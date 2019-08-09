
import styled from 'styled-components'
import { DropdownMenu } from 'reactstrap';

export const StyledDropdownMenu = styled(DropdownMenu)`
border-radius: 0px!important;
  .dropdown-menu.show {
    display: block;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    border: 1px solid rgba(0,0,0,.1);
  }
`;