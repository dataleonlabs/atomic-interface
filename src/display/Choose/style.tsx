
import styled from 'styled-components'

export const StyledUncontrolledChoose = styled.div`
  .customCheck {
    padding: 25px 20px 35px 55px;
    cursor: pointer;
    max-width: 365px;
    width: 100%;
  }
  .custom-checkbox .custom-control-label::before {
    opacity: 0;
  }
  .custom-checkbox label {
    margin-bottom: 5px;
    display: block;
    font-weight: 600;
    font-size: 16px;
  }
  .custom-checkbox svg {
    position: absolute;
    top: 25px;
    left: 20px;
    color: #2f97ff;
  }
  .customCheck:hover {
    background-color: #f5f6fd;
  }
`;