
import styled from 'styled-components'
import { ChooseProps as Props } from './props'

export const StyledUncontrolledChoose = styled.div < { icon: Props['icon'], backgroundColorOnHover: Props['backgroundColorOnHover'], active: Props['active'], backgroundColorOnActive: Props['backgroundColorOnActive'] }>`
  .choose-content {
    padding: 20px 20px 35px ${({ icon }) => {
      if (!icon) {
        return "20px"
      }
      return "55px"
  }};
    cursor: pointer;
    max-width: 300px;
    width: 100%;
    position: relative;
    background-color: ${({ backgroundColorOnActive, active }) => {
      if(active){
        return backgroundColorOnActive  
      }     
    }}
  }
  .choose-content .custom-control-label::before {
    opacity: 0;
  }
  .choose-content-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 5px 9px;
  }
  .choose-content label {
    margin-bottom: 5px;
    display: block;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    cursor: pointer;
  }
  .choose-content svg {
    position: absolute;
    top: 25px;
    left: 20px;
    color: #2f97ff;
  }
  .choose-content:hover {
    background-color: ${({ backgroundColorOnHover }) => {
      return backgroundColorOnHover
    }}
  }
`;