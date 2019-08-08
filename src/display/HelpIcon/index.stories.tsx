import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import HelpIcon from './index';

storiesOf('UI Elements|HelpIcon', module)
  .add('Example', () => (
    <React.Fragment>
    <Col sm={4} style={{ marginTop: 30, marginLeft: 30 }}>
      <h4>help icon</h4>
      <span>
        <HelpIcon header='Help' target='help'>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </HelpIcon>
      </span>
    </Col>
  </React.Fragment>
  ))
