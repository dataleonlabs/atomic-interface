
import styled from 'styled-components'
import { StyledInputBootstrap, StyledInputGroupAddonLeft } from '../Input/style';

export const StyledInputSearchBootstrap = styled(StyledInputBootstrap)`    
    border: 2px solid ${(props) => props.navBar ? '#fff' : '#dfe3e9'};
    &:focus {
      border-color: ${(props) => props.navBar ? '#fff' : '#80bdff'};
    }
`;

export const StyledInputSearchGroupAddonLeft = styled(StyledInputGroupAddonLeft)`   
  border-radius: 0px!important;
  .input-group-text {
    background-color: ${(props) => props.navBar ? '#fff' : '#fcfcfc'};
    border: 2px solid ${(props) => props.navBar ? '#fff' : '#dfe3e9'};
    border-right: none;
  }
`;