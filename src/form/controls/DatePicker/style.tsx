
import styled from 'styled-components';


export const StyledReactDatePickerContainer = styled.div`
  .react-datepicker{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    background-color: #fff;
    color: #000;
    border: 0px solid #aeaeae;
    border-radius: 0px;
    display: inline-block;
    position: relative;
    box-shadow: 1px 1px 7px #000;
  }
  .react-datepicker div{
    border-radius: 0px;
  }
  .react-datepicker__day--selected{
    background-color: #fff;
    border: 1px solid #007bff;    
    color: #007bff;
  }
  .react-datepicker__day--selected:hover{
    background-color: #007bff;
    color: #fff;
  }
  .react-datepicker__header{
    background-color: #fff;
  }
  .react-datepicker__triangle{
    border-bottom-color: #fff !important;
  }
`