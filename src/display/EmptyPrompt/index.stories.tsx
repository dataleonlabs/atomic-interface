import React from 'react';
import { storiesOf } from '@storybook/react';
import EmptyPrompt from './index';
import Icon from './Icon';
import Title from './Title';
import BodyText from './BodyText';
import ActionPanel from './ActionPanel';
import Spacer from '../Spacer/index';
import Button from '../../form/controls/Button/index';
import { Col, Row, Container } from 'reactstrap';
import { Info } from 'react-feather';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('UI Elements|EmptyPrompt', module)
  .add('Example', () => (
    <React.Fragment>
      <Container>
        <Row>
          <Col size={10} style={{ marginTop: 30 }}>
            <h4>Emptry Prompt</h4>
            <p>Use the <b>EuiEmptyPrompt</b> as a placeholder for an empty table or list of content.</p>
          </Col>
        </Row>
      </Container>
      <EmptyPrompt>
        <Icon>
          <Info size={60} />
        </Icon>
        <Spacer size="sm" />
        <Title size="large">
          You have no spice
            </Title>
        <Spacer size="sm" />
        <BodyText size="small">
          <p>Navigators use massive amounts of spice to gain a limited form of prescience. This allows them to safely navigate interstellar space, enabling trade and travel throughout the galaxy.</p>
          <p>You’ll need spice to rule Arrakis, young Atreides.</p>
        </BodyText>
        <Spacer size="sm" />
        <ActionPanel>
          <Button color="primary">Button 1</Button>
        </ActionPanel>
      </EmptyPrompt>
      <Container>
        <Row>
          <Col size={10} style={{ marginTop: 30 }}>
            <h6><strong>Code</strong></h6>        
            <hr/>         
            <CodeMirror
              value={`<EmptyPrompt>
  <Icon>
    <Info size={60} />
  </Icon>
  <Spacer size="sm" />
  <Title size="large">
    You have no spice
      </Title>
  <Spacer size="sm" />
  <BodyText size="small">
    <p>Navigators use massive amounts of spice to gain a limited form of prescience. This allows them to safely navigate interstellar space, enabling trade and travel throughout the galaxy.</p>
    <p>You’ll need spice to rule Arrakis, young Atreides.</p>
  </BodyText>
  <Spacer size="sm" />
  <ActionPanel>
    <Button color="primary">Button 1</Button>
  </ActionPanel>
</EmptyPrompt>`}
              options={{
                mode: 'jsx',
                lineNumbers: false,
                readOnly: true            
              }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )).add('Example Custom sizes', () => (
    <React.Fragment>
      <Container>
        <Row>
          <Col size={10} style={{ marginTop: 30 }}>
            <h4>Emptry Prompt | Custom sizes</h4>
            <p>You can control sizes with the <b>size</b> props for all 3 <b>BodyText</b>, <b>Title</b> and <b>Icon</b>.</p>
          </Col>
        </Row>
      </Container>
      <EmptyPrompt>
        <Icon>
          <Info size={40} />
        </Icon>
        <Spacer size="sm" />
        <Title size="medium">
          You have no spice
            </Title>
        <Spacer size="sm" />
        <BodyText size="xsmall">
          <p>Navigators use massive amounts of spice to gain a limited form of prescience. This allows them to safely navigate interstellar space, enabling trade and travel throughout the galaxy.</p>
          <p>You’ll need spice to rule Arrakis, young Atreides.</p>
        </BodyText>
        <Spacer size="sm" />
        <ActionPanel>
          <Button color="primary">Button 1</Button>
        </ActionPanel>
      </EmptyPrompt>
      <Container>
        <Row>
          <Col size={10} style={{ marginTop: 30 }}>
            <h6><strong>Code</strong></h6>        
            <hr/>         
            <CodeMirror
              value={`<EmptyPrompt>
  <Icon>
    <Info size={40} />
  </Icon>
  <Spacer size="sm" />
  <Title size="medium">
    You have no spice
      </Title>
  <Spacer size="sm" />
  <BodyText size="xsmall">
    <p>Navigators use massive amounts of spice to gain a limited form of prescience. This allows them to safely navigate interstellar space, enabling trade and travel throughout the galaxy.</p>
    <p>You’ll need spice to rule Arrakis, young Atreides.</p>
  </BodyText>
  <Spacer size="sm" />
  <ActionPanel>
    <Button color="primary">Button 1</Button>
  </ActionPanel>
</EmptyPrompt>`}
              options={{
                mode: 'jsx',
                lineNumbers: false,
                readOnly: true            
              }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )).add('Example Less Content', () => (
    <React.Fragment>
      <Container>
        <Row>
          <Col size={10} style={{ marginTop: 30 }}>
            <h4>Emptry Prompt | Less content</h4>
            <p>You can remove parts of the prompt to simplify it, if you wish.</p>            
          </Col>
        </Row>
      </Container>
      <EmptyPrompt>
        <Spacer size="sm" />
        <Title size="medium">
          You have no spice
            </Title>
        <Spacer size="sm" />
        <ActionPanel>
          <Button color="primary">Button 1</Button>
        </ActionPanel>
      </EmptyPrompt>
      <Container>
        <Row>
          <Col size={10} style={{ marginTop: 30 }}>
            <h6><strong>Code</strong></h6>        
            <hr/>         
            <CodeMirror
              value={`<EmptyPrompt>
  <Spacer size="sm" />
  <Title size="medium">
    You have no spice
      </Title>
  <Spacer size="sm" />
  <ActionPanel>
    <Button color="primary">Button 1</Button>
  </ActionPanel>
</EmptyPrompt>`}
              options={{
                mode: 'jsx',
                lineNumbers: false,
                readOnly: true            
              }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )).add('Example Button Left & Right', () => (
    <React.Fragment>
      <Container>
        <Row>
          <Col size={10} style={{ marginTop: 30 }}>
            <h4>Emptry Prompt | More actions</h4>
            <p>You can also put multiple actions. Be sure to list primary actions first and secondary actions last.</p>
          </Col>
        </Row>
      </Container>
      <EmptyPrompt>
        <Icon>
          <Info size={40} />
        </Icon>
        <Spacer size="sm" />
        <Title size="medium">
          You have no spice
            </Title>
        <Spacer size="sm" />
        <BodyText size="xsmall">
          <p>Navigators use massive amounts of spice to gain a limited form of prescience. This allows them to safely navigate interstellar space, enabling trade and travel throughout the galaxy.</p>
          <p>You’ll need spice to rule Arrakis, young Atreides.</p>
        </BodyText>
        <Spacer size="sm" />
        <ActionPanel>
          <span><Button color="primary">Left</Button> </span>
          <span> <Button color="primary">Right</Button></span>
        </ActionPanel>
      </EmptyPrompt>
      <Container>
        <Row>
          <Col size={10} style={{ marginTop: 30 }}>
            <h6><strong>Code</strong></h6>        
            <hr/>         
            <CodeMirror
              value={`<EmptyPrompt>
  <Icon>
    <Info size={40} />
  </Icon>
  <Spacer size="sm" />
  <Title size="medium">
    You have no spice
      </Title>
  <Spacer size="sm" />
  <BodyText size="xsmall">
    <p>Navigators use massive amounts of spice to gain a limited form of prescience. This allows them to safely navigate interstellar space, enabling trade and travel throughout the galaxy.</p>
    <p>You’ll need spice to rule Arrakis, young Atreides.</p>
  </BodyText>
  <Spacer size="sm" />
  <ActionPanel>
    <span><Button color="primary">Left</Button> </span>
    <span> <Button color="primary">Right</Button></span>
  </ActionPanel>
</EmptyPrompt>`}
              options={{
                mode: 'jsx',
                lineNumbers: false,
                readOnly: true            
              }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  ))

