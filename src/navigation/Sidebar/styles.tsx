
import styled from 'styled-components'
import { ListGroupItem,NavLink,Nav, Navbar } from 'reactstrap';

export const StyledListGroupItem = styled(ListGroupItem)`
border-radius: 0px!important;
  .dropdown-menu.show {
    display: block;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    border: 1px solid rgba(0,0,0,.1);
  }
`;

export const StyledNavLink = styled(NavLink)`

  ul.nav-link.active {
    display: block;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    border: 1px solid rgba(0,5,0,.1);
  }
  ul,ul.nav_link.flex-column{
    list-style: none
  }
  li.nav-item.active {
    display: block;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    border: 1px solid rgba(0,0,5,.1);
  }

`;

export const StyledSidebar = styled(Nav)`

  .sidebarNav ul li.active {
    display: block;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    border: 1px solid rgba(0,5,0,.1);
  }
  ul,ul.nav_link.flex-column{
    list-style: none
  }
  li.nav-item.active {
    display: block;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    border: 1px solid rgba(0,0,5,.1);
  }

`;
export const StyledSidebarNav = styled(Navbar)`

nav.sidebar 
{
  display: block;
}


 
`;