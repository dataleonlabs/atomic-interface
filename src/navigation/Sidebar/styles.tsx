
import styled from 'styled-components'
import { ListGroupItem,NavLink } from 'reactstrap';

export const StyledListGroupItem = styled(ListGroupItem)`
border-radius: 0px!important;
  .dropdown-menu.show {
    display: block;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    border: 1px solid rgba(0,0,0,.1);
  }
`;
export const StyledNavLink = styled(NavLink)`

  .nav-link active {
    display: block;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    border: 1px solid rgba(0,0,0,.1);
  }
`;
