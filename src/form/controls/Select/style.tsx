
import styled from 'styled-components'
import SelectBase from 'react-select';
import CreatableSelect from 'react-select/creatable';

export const StyledSelectBase = styled(SelectBase) <{ readonly: boolean }>`  
    * {       
      border-radius: 0px!important;      
    }    
  border-radius: 3px!important;
  > div:first-child {
      border: 2px solid #dfe3e9;
      border-radius: 0px; 
      font-size: 0.9rem;
      &:focus {
        border: 2px solid #dfe3e9;
        outline: none !important;
        box-shadow: none;
        border-color: #80bdff;
      }
  }

  .react-select__control--is-focused, .react-select__control--is-focused:hover {
      border: 1px solid #80bdff;
      border-radius: 0px!important;
  }
  .react-select__control{
    ${({ readonly }) => {
    /* istanbul ignore next */
    if (readonly === true) /* istanbul ignore next */ {
      return 'pointer-events: none !important; background-color: silver !important'
    }
  }}
  }
`;

export const StyledCreatableSelect = styled(CreatableSelect) <{ readonly: boolean }>`
    * {       
      border-radius: 0px!important;      
    }    
    border-radius: 0px!important;
  > div:first-child {
      border: 1px solid #dfe3e9;
      border-radius: 0px; 
      font-size: 0.9rem;
      &:focus {
        border: 1px solid #dfe3e9;
        outline: none !important;
        box-shadow: none;
        border-color: #80bdff;
      }
  }
  
  .react-select__control--is-focused, .react-select__control--is-focused:hover {
     border: 1px solid #80bdff;
     border-radius: 0px!important;
  }
  .react-select__control{
  ${({ readonly }) => {
    /* istanbul ignore next */
    if (readonly === true) /* istanbul ignore next */ {
      return 'pointer-events: none !important; background-color: silver !important'
    }
  }}
}
`;