
import styled from 'styled-components'
import { Input as InputBootstrap, InputGroupAddon } from 'reactstrap';

export const StyledInputBootstrap = styled(InputBootstrap)`
    * {       
      border-radius: 0px!important;
    }
    border: 2px solid #dfe3e9;
    border-radius: 0px; 
    font-size: 0.9rem;
    height: calc(1.5em + .75rem + 6px);
    &:focus {
      outline: none !important;
      box-shadow: none;
      border-color: #80bdff;
    }
`;

export const StyledInputGroupAddonRight = styled(InputGroupAddon)`
* {       
  border-radius: 0px!important;
}
border-radius: 0px!important;
  .input-group-text {
    background-color: #fcfcfc;
    border: 2px solid #dfe3e9;
    padding: 0.32rem .75rem;
    border-radius: 0px; 
    border-left: none;
  }
`;

export const StyledInputGroupAddonLeft = styled(InputGroupAddon)`
* {       
  border-radius: 0px!important;
}
border-radius: 0px!important;
  .input-group-text {
    background-color: #fcfcfc;
    border: 2px solid #dfe3e9;
    padding: 0.32rem .75rem;
    border-radius: 0px; 
    border-right: none;
  }
`;