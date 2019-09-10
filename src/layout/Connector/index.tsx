/* istanbul ignore next */
import * as React from 'react';
import 'whatwg-fetch';
import { ConnectorProps as Props } from './props';
import { StyledContainer } from './style';
import { Col, Row } from 'reactstrap';
import Badge from '../../display/Badge/index';
import Alert from '../../display/Alert/index';
import Spacer from '../../display/Spacer/index';
import Button from '../../form/controls/Button/index';
import Select from '../../form/controls/Select/index';
import Input from '../../form/controls/Input/index';
import Form from '../../form/index';
import Tabs from '../../display/Tabs/index';
import TabItem from '../../display/Tabs/TabItem';
import Checkbox from '../../form/controls/Checkbox/index';
import DatePicker from '../../form/controls/DatePicker/index';
import DropzoneS3 from '../../form/controls/Dropzone/S3/index';
import FilePickerS3 from '../../form/controls/FilePicker/S3/index';
import FilePicker from '../../form/controls/FilePicker/index';
import Radio from '../../form/controls/Radio/index';
import RichText from '../../form/controls/RichText/index';
import SearchBar from '../../form/controls/SearchBar/index';
import Switch from '../../form/controls/Switch/index';
import Textarea from '../../form/controls/Textarea/index';
import ButtonGroup from '../../form/controls/ButtonGroup/index';

/* istanbul ignore next */
interface State {
  temp: string,
}

/**
 * Connector
 */
/* istanbul ignore next */
class Connector extends React.Component<Props, State> {

  /* istanbul ignore next */
  public state = {
    temp: "",
  }

  /* istanbul ignore next */
  public render() {

    /* istanbul ignore next */
    const button = (item) => (
      <Button {...item.props}>{item.children}</Button>
    );

    /* istanbul ignore next */
    const buttonGroup = (item) => (
      <ButtonGroup {...item.props}>
        {item.children.map((_item) => {
          return button(_item);
        })}
      </ButtonGroup >
    );

    /* istanbul ignore next */
    const checkbox = (item) => (
      <Checkbox {...item.props} />
    );

    /* istanbul ignore next */
    const datePicker = (item) => (
      <DatePicker {...item.props} />
    );

    /* istanbul ignore next */
    const dropZoneS3 = (item) => (
      <DropzoneS3 {...item.props}><span>{item.children}</span></DropzoneS3>
    );

    /* istanbul ignore next */
    const filePickerS3 = (item) => (
      <FilePickerS3 {...item.props}>{item.children}</FilePickerS3>
    );

    /* istanbul ignore next */
    const filePicker = (item) => (
      <FilePicker {...item.props} />
    );

    /* istanbul ignore next */
    const radio = (item) => (
      <Radio {...item.props} />
    );

    /* istanbul ignore next */
    const richText = (item) => (
      <RichText {...item.props} />
    );

    /* istanbul ignore next */
    const searchBar = (item) => (
      <SearchBar {...item.props} />
    );

    /* istanbul ignore next */
    const switchBase = (item) => (
      <Switch {...item.props} />
    );

    /* istanbul ignore next */
    const textArea = (item) => (
      <Textarea {...item.props} />
    );

    /* istanbul ignore next */
    const input = (item) => (
      <Input {...item.props} />
    );

    /* istanbul ignore next */
    const select = (item) => (
      <Select {...item.props} />
    );

    /* istanbul ignore next */
    const tabitems = (item) => (
      <TabItem title={item.name.en}>
        {
          item.content.map((content_item) => {
            if (content_item.props.placeholder) {
              content_item.props.placeholder = content_item.props.placeholder[this.props.language] ?
                content_item.props.placeholder[this.props.language] : ""
            }
            switch (content_item.component) {
              case 'Button':
                return button(content_item);
              case 'Input':
                return input(content_item);
              case 'Select':
                return select(content_item);
              case 'Checkbox':
                return checkbox(content_item);
              case 'DatePicker':
                return datePicker(content_item);
              case 'DropzoneS3':
                return dropZoneS3(content_item);
              case 'FilePickerS3':
                return filePickerS3(content_item);
              case 'FilePicker':
                return filePicker(content_item);
              case 'Radio':
                return radio(content_item);
              case 'RichText':
                return richText(content_item);
              case 'SearchBar':
                return searchBar(content_item);
              case 'Switch':
                return switchBase(content_item);
              case 'Textarea':
                return textArea(content_item);
              case 'ButtonGroup':
                return buttonGroup(content_item);
            }
          })}
      </TabItem>
    );

    return (
      <React.Fragment>
        <StyledContainer fluid={true}>
          <Row>
            <Col md={10}>
              <div>
                <header>
                  <h1>{this.props.definition.header.title[this.props.language] ?
                    this.props.definition.header.title[this.props.language] : ""}</h1>

                  <p>{this.props.definition.header.description[this.props.language] ?
                    this.props.definition.header.description[this.props.language] : ""}</p>

                  {this.props.definition.header.badges &&
                    this.props.definition.header.badges.map((item) =>
                      <Badge color={item.color}>
                        {item.content[this.props.language] ? item.content[this.props.language] : ""}
                      </Badge>
                    )}
                  <Spacer size="sm" />
                  {this.props.definition.header.infos &&
                    this.props.definition.header.infos.map((item) =>
                      <Alert color={item.color}>
                        {item.content[this.props.language] && item.content[this.props.language] || ""}
                      </Alert>
                    )}
                </header>
                <hr />
                <Form>
                  {(_) => (
                    <div>
                      {this.props.definition.body &&
                        this.props.definition.body.map((item) => {
                          switch (item.component) {
                            case 'Button':
                              return button(item);
                            case 'Input':
                              return input(item);
                            case 'Select':
                              return select(item);
                            case 'Checkbox':
                              return checkbox(item);
                            case 'DatePicker':
                              return datePicker(item);
                            case 'DropzoneS3':
                              return dropZoneS3(item);
                            case 'FilePickerS3':
                              return filePickerS3(item);
                            case 'FilePicker':
                              return filePicker(item);
                            case 'Radio':
                              return radio(item);
                            case 'RichText':
                              return richText(item);
                            case 'SearchBar':
                              return searchBar(item);
                            case 'Switch':
                              return switchBase(item);
                            case 'Textarea':
                              return textArea(item);
                            case 'ButtonGroup':
                              return buttonGroup(item);
                          }
                        })}

                      {this.props.definition.tabs &&
                        <Tabs activeTab={0} onChange={(i) => i}>
                          {this.props.definition.tabs.map((item) => {
                            return tabitems(item);
                          })}
                        </Tabs>
                      }
                      <Spacer size="sm" />
                      <Button type="submit" color="primary">Submit</Button>
                    </div>
                  )}
                </Form>
                <hr />
                <footer>
                  {this.props.definition.footer.infos &&
                    this.props.definition.footer.infos.map((item) =>
                      <Alert color={item.color}>
                        {item.content[this.props.language] && item.content[this.props.language] || ""}
                      </Alert>
                    )}
                </footer>
              </div>
            </Col>
          </Row>
        </StyledContainer>
      </React.Fragment >
    )
  }
}

/* istanbul ignore next */
export default Connector;