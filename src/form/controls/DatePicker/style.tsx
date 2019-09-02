
import styled from 'styled-components';


export const StyledReactDatePickerContainer = styled.div`
  .react-datepicker{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    background-color: #fff;
    color: #000;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 0px;
    display: inline-block;
    position: relative;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    font-family: 'IBM Plex Sans',sans-serif!important;
  }
  .react-datepicker-ignore-onclickoutside {
    border: 2px solid #dfe3e9;
  }
  input{
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    border-radius: 0px!important;
    border: 2px solid #dfe3e9;
    border-radius: 0px;
    font-size: 0.9rem;
    height: calc(1.5em + .75rem + 6px);

    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .react-datepicker div{
    border-radius: 0px;
  }
  .react-datepicker__day--selected, .react-datepicker__day--in-range{
    background-color: #fff;
    border: 1px solid #007bff;
    color: #007bff;
  }
  .react-datepicker__day--selected:hover,  .react-datepicker__day--in-range:hover{
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