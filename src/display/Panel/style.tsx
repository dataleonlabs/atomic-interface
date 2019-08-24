
import styled from 'styled-components'
import { Card } from 'reactstrap';

export const StyledPanel = styled(Card)`
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 0.05rem 0.15rem rgba(0,0,0,.1);

  .card-header, .card-body {
    background-color: #fff;
  }
`;