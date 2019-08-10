
import styled from 'styled-components'
import TextareaAutosize from 'react-autosize-textarea';

export const StyledTextareaAutosize = styled(TextareaAutosize)`
    border-radius: 3px!important;
    border: 2px solid #dfe3e9;
    border-radius: 0px; 
    font-size: 0.9rem;
    &:focus {
      outline: none !important;
      box-shadow: none;
      border-color: #80bdff;
    }
`;