import styled from 'styled-components'
import { Navbar } from 'reactstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: #fff!important;
  border-bottom: solid 1px #F1F1F1!important;
  .nav-link {
    color: #212529!important;
  }
  .nav-item {
    button {
      padding: .175rem .75rem;
      font-size: 0.9rem;
      margin-left: 15px;
    }

    .Icon {
      position: relative;
      vertical-align: text-bottom;
    }
  }
`;