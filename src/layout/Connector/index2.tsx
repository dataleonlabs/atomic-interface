/* istanbul ignore next */
import * as React from 'react';
import 'whatwg-fetch';
import { StyledContainer } from './style';
import { Col, Row } from 'reactstrap';
import Badge from '../../display/Badge/index';
import ReactFromJSON from "react-from-json";



const entry = [{
  type: "Header",
  props: {
    children: "Wahlburger",
  }
},
{
  type: "Description",
  props: {
    children: "This is header description",
  }
}, {
  type: "Badge",
  props: {
    color: "primary",
    children: "Badge 4",
  }
}];

const mapping = {
  Header: ({ children }) => (
    <h1>{children}</h1>
  ),
  Description: ({ children }) => <p>{children}</p>,
  Badge: ({ children, props }) => (
    <Badge {...props}>{children}</Badge>
  )
};

/**
 * Connector
 */
/* istanbul ignore next */
class Connector extends React.Component {




  /* istanbul ignore next */
  public render() {

    return (
      <React.Fragment>
        <StyledContainer fluid={true}>
          <Row>
            <Col md={10}>
              {entry.map((item) =>
                <ReactFromJSON entry={item} mapping={mapping} />
              )}
            </Col>
          </Row>
        </StyledContainer>
      </React.Fragment >
    )
  }
}

/* istanbul ignore next */
export default Connector;