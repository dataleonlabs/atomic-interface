
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
.sidebar #title
{
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
  color: brown;
  margin-top: 8px;
}

.sidebar ul ul li a.badge svg
{
  margin-right: 5px;
  margin-left: 10px;

}


.sidebar #itemname
{
  marginRight:'5px',
  float:'right',
}
// remove and keep in stories
.sidebar ul ul li a.badge
{
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100px;
  text-align: left;
  
}
 
`;