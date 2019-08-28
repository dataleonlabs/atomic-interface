import React from 'react';
import { storiesOf } from '@storybook/react';
import Progress from './index';
import { Col } from 'reactstrap';

storiesOf('UI Elements|Progress', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Progress</h2>
        <br/>
        <hr/>
        <p>Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels. Read the <a href="https://getbootstrap.com/docs/4.2/components/progress/" target="blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <h4>Basic Example</h4>
        <br/>
        <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Progress multi>
          <Progress bar value="60" />
        </Progress>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Progress multi>
  <Progress bar value="60" />
</Progress>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
  .add('Labels', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Labels</h4>
        <br/>
        <p>Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Progress multi>
          <Progress bar value="25">25%</Progress>
        </Progress>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Progress multi>
  <Progress bar value="25">25%</Progress>
</Progress>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
  .add('Height', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Height</h4>
        <br/>
        <p>We only set a height value on the progress, so if you change that value the inner progress bar will automatically resize accordingly.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Progress multi>
          <Progress bar value="25" />
        </Progress>
        <br/>
        <Progress multi>
          <Progress bar value="50" />
        </Progress>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Progress multi>
  <Progress bar value="25" />
</Progress>
<br/>
<Progress multi>
  <Progress bar value="50" />
</Progress>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
  .add('Background', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Background</h4>
        <br/>
        <p>Use background utility classes to change the appearance of individual progress bars.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Progress multi>
          <Progress bar value="25" />
        </Progress>
        <br/>
        <Progress multi>
          <Progress bar color="success" value="50" />
        </Progress>
        <br/>
        <Progress multi>
          <Progress bar color="info" value="70" />
        </Progress>
        <br/>
        <Progress multi>
          <Progress bar color="warning" value="30" />
        </Progress>
        <br/>
        <Progress multi>
          <Progress bar color="danger" value="50" />
        </Progress>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Progress multi>
  <Progress bar value="25" />
</Progress>
<br/>
<Progress multi>
  <Progress bar color="success" value="50" />
</Progress>
<br/>
<Progress multi>
  <Progress bar color="info" value="70" />
</Progress>
<br/>
<Progress multi>
  <Progress bar color="warning" value="30" />
</Progress>
<br/>
<Progress multi>
  <Progress bar color="danger" value="50" />
</Progress>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
  .add('Multuiple Bars', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Multuiple Bars</h4>
        <br/>
        <p>Include multiple progress bars in a progress component if you need.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Progress multi>
          <Progress bar value="15" />
          <Progress bar color="success" value="30" />
          <Progress bar color="info" value="25" />
          <Progress bar color="warning" value="20" />
          <Progress bar color="danger" value="5" />
        </Progress>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Progress multi>
  <Progress bar value="15" />
  <Progress bar color="success" value="30" />
  <Progress bar color="info" value="25" />
  <Progress bar color="warning" value="20" />
  <Progress bar color="danger" value="5" />
</Progress>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
  .add('Striped', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Striped</h4>
        <br/>
        <p>Add <code>.progress-bar-striped</code> to any progress bar to apply a stripe via CSS gradient over the progress bar’s background color.</p>
        <hr/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Progress multi>
          <Progress bar className="progress-bar-striped" value="45" />
        </Progress>
        <br/>
        <Progress multi>
          <Progress bar className="progress-bar-striped progress-bar-animated" color="success" value="35" />
        </Progress>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <pre>
          {`
<Progress multi>
  <Progress bar className="progress-bar-striped" value="45" />
</Progress>
<br/>
<Progress multi>
  <Progress bar className="progress-bar-striped progress-bar-animated" color="success" value="35" />
</Progress>
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))  
