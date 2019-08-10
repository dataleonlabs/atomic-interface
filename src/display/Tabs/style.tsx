
import styled from 'styled-components'
import { NavItem, Nav } from 'reactstrap';


export const StyledNavItem = styled(NavItem)`
border-radius: 3px!important;
  .nav-link {
    cursor: pointer
  }

  .nav-link:hover {
    border-color: #fff #fff #dee2e6 #fff;
    border-bottom-width: 3px;
    margin-bottom: -2px;
  }

  .nav-link.active {
    border-color: #fff #fff #007bff #fff;
    border-bottom-width: 3px;
    margin-bottom: -1px;
  }
`;


export const StyledNav = styled(Nav)`
  border-bottom: 2px solid #dee2e6;
`;