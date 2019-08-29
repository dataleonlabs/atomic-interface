import React from 'react';
import { EmptyPromptProps as Props } from './props';
import { StyledEmptyPrompts, StyledContainer } from './style';
import { Col, Row } from 'reactstrap';

/**
 * EmptyPrompt
 */
const EmptyPrompt = (props: Props) => (
  <StyledContainer fluid={true}>
    <Row>
      <Col md={3} />
      <Col md={6}>
        <StyledEmptyPrompts>
          {props.children}
        </StyledEmptyPrompts>
      </Col>
    </Row>
  </StyledContainer>
)

export default EmptyPrompt;
