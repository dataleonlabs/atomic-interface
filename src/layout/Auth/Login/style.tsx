import styled from 'styled-components'
import { Card, Container } from 'reactstrap';


export const StyledCard = styled(Card)`
  border: none;  
  margin-left: 20px;
  margin-right: 20px;

  .card-body{
    background-color: 'white';
    margin-left:30px;
    margin-right: 30px;
    padding-bottom:30px;
    padding-top: 30px;
  }
`;

export const StyledFormContainer = styled.div`
  margin: auto;
  margin-top: 120px;
  max-width: 300px;
`;
export const StyledContainer = styled(Container)`
  background-color: #f8fafb;
  height: 100vh;
`;