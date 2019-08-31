import React from 'react';
import { storiesOf } from '@storybook/react';
import Spacer from './index';
import Text from '../Text/index';
import { Col } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('UI Elements|Spacer', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={11} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Spacer</h4>
        <p>The <b>Spacer</b> component is a fancy break tag. Use it to add vertical space between items. Please do not stack them. If passed without a <b>size</b> prop, it will default to the large size, which matches the margins of <b>Spacer</b> elements.</p>
        <hr />
        <Text> sm: 15px </Text>
        <Spacer size="sm" />
        <Text> md: 30px </Text>
        <Spacer size="md" />
        <Text> lg: 60px </Text>
        <Spacer size="lg" />
        <Text> xlg: 100px </Text>
        <Spacer size="xlg" />        
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Text> sm: 15px </Text>
<Spacer size="sm" />
<Text> md: 30px </Text>
<Spacer size="md" />
<Text> lg: 60px </Text>
<Spacer size="lg" />
<Text> xlg: 100px </Text>
<Spacer size="xlg" />`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />
      </Col>      
    </React.Fragment>
  ))

