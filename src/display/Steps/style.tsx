
import styled from 'styled-components'

export const StyledStep = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: flex-start;
    li:last-child #arrow{
      display: none;          
    }
  `;

export const StyledStepItem = styled.li`
    display: inline-block;
    position: relative;
    a {
      text-decoration: none !important;
    }    
  `;


export const StyledStepItemActive = styled.li`
    display: inline-block;
    position: relative;
    a span{
      color: #0168fa;
    }
    a > span:first-child {
      color: #fff;
      background-color: #0168fa;
      border:none;
    }
  `;

export const StyledStepItemComplete = styled.li`
    display: inline-block;
    position: relative;
    a span{
      color: #10b759;
    }
    a > span:first-child {
      color: #fff;
      background-color: #10b759;
      border:none;
    }
  `;

export const StyledStepLink = styled.a`
    display: flex;
    align-items: center;
    color: #1b2e4b;  
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
    padding-right:10px;
    #arrow{
      display: inline;
      padding-left: 10px;
      color: silver;      
    }
  `;

export const StyledStepContent = styled.div`
  
`;

export const StyledStepNumber = styled.span`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto, sans-serif;
    color: #8392a5;
    border: 2px solid #8392a5;
    border-radius: 100%;
  `;

export const StyledStepTitle = styled.span`
    margin-left: 5px;
    display: flex;
    overflow: hidden;          
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: transparent;
  `;

export const StyledStepDesc = styled.p`
    margin:0px;
    padding:0px;
    margin-left: 5px;
    display: block;
    font-size: 11px;
    font-weight: 400;
    color: #8392a5;
    background-color: transparent;
  `;

export const StyledStepIcon = styled.span`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 2px solid #8392a5;
    color: #8392a5;
    border-radius: 100%;
  `;




