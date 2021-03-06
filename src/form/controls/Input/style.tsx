
import styled from 'styled-components'
import { Input as InputBootstrap, InputGroupAddon } from 'reactstrap';

export const StyledInputBootstrap = styled(InputBootstrap)`    
    border: 2px solid #dfe3e9;
    border-radius: 3px; 
    font-size: 0.9rem;
    height: calc(1.5em + .75rem + 6px);
    &:focus {
      outline: none !important;
      box-shadow: none;
      border-color: #80bdff;
    }
`;

export const StyledInputGroupAddonRight = styled(InputGroupAddon)`  
  border-radius: 3px!important;
  .input-group-text {
    background-color: #fcfcfc;
    border: 2px solid #dfe3e9;
    padding: 0.32rem .75rem;
    border-radius: 3px; 
    border-left: none;
  }
`;

export const StyledInputGroupAddonLeft = styled(InputGroupAddon)`   
  border-radius: 3px!important;
  .input-group-text {
    background-color: #fcfcfc;
    border: 2px solid #dfe3e9;
    padding: 0.32rem .75rem;
    border-radius: 3px; 
    border-right: none;
  }
`;