/* istanbul ignore next */
import * as React from 'react';
/* istanbul ignore next */
require('es6-promise').polyfill();
require('isomorphic-fetch');
/* istanbul ignore next */
import { ConnectorProps as Props } from './props';
import { StyledContainer } from './style';
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
import { makeId } from './../../utils';

/**
 * Connector
 */
/* istanbul ignore next */
class Connector extends React.Component<Props> {

  public createComponent = {

    Button: (item) => {
      return <Button {...item.props}>{item.children}</Button>
    },
    ButtonGroup: (item) => (
      <ButtonGroup {...item.props}>
        {item.children.map((i) => {
          return <Button key={makeId()} {...i.props}>{i.children}</Button>
        })}
      </ButtonGroup >
    ),
    Checkbox: (item) => {
      return <Checkbox {...item.props} />
    },
    DatePicker: (item) => {
      return <DatePicker {...item.props} />
    },
    DropzoneS3: (item) => {
      return <DropzoneS3 {...item.props}><span>{item.children}</span></DropzoneS3>
    },
    FilePickerS3: (item) => {
      return <FilePickerS3 {...item.props}>{item.children}</FilePickerS3>
    },
    FilePicker: (item) => {
      return <FilePicker {...item.props} />
    },
    Radio: (item) => {
      return <Radio {...item.props} />
    },
    RichText: (item) => {
      return <RichText {...item.props} />
    },
    SearchBar: (item) => {
      return <SearchBar {...item.props} />
    },
    Switch: (item) => {
      return <Switch {...item.props} />
    },
    Textarea: (item) => {
      return <Textarea {...item.props} />
    },
    Input: (item) => {
      return <Input {...item.props} />
    },
    Select: (item) => {
      return <Select {...item.props} />
    },
    H1: (item) => {
      return <h1>{item.content}</h1>;
    },
    H2: (item) => {
      return <h2>{item.content}</h2>;
    },
    H3: (item) => {
      return <h3>{item.content}</h3>;
    }
  }

  /* istanbul ignore next */
  public createTabItems = (item) => (
    <TabItem title={item.name.en}>
      {
        item.content.map((content) => {
          if (content.props && content.props.placeholder) {
            content.props.placeholder = content.props.placeholder[this.props.language] ?
              content.props.placeholder[this.props.language] : ""
          }

          if (content.props && content.props.label) {
            content.props.label = content.props.label[this.props.language] ?
              content.props.label[this.props.language] : ""
          }
          if (this.createComponent[content.component]) {
            return this.createComponent[content.component](content);
          }
        })}
    </TabItem>
  );

  /* istanbul ignore next */
  public render() {

    return (
      <React.Fragment>
        <StyledContainer>

              <div>
                <header>
                  <h5>{this.props.definition.header.title[this.props.language] ?
                    this.props.definition.header.title[this.props.language] : ""}</h5>

                  <p>{this.props.definition.header.description[this.props.language] ?
                    this.props.definition.header.description[this.props.language] : ""}</p>

                  {this.props.definition.header.badges &&
                    this.props.definition.header.badges.map((item) =>
                      <Badge {...item} key={makeId()}>
                        {item.content[this.props.language] ? item.content[this.props.language] : ""}
                      </Badge>
                    )}
                </header>
                <hr />
                {this.props.definition.header.infos &&
                  this.props.definition.header.infos.map((item) =>
                    <Alert {...item} key={makeId()}>
                      {item.content[this.props.language] && item.content[this.props.language] || ""}
                    </Alert>
                  )}
                <Form>
                  {(_) => (
                    <div>
                      {this.props.definition.body &&
                        this.props.definition.body.map((item) => {
                          if (item.props && item.props.placeholder) {
                            item.props.placeholder = item.props.placeholder[this.props.language] ?
                              item.props.placeholder[this.props.language] : ""
                          }
                          if (item.props && item.props.label) {
                            item.props.label = item.props.label[this.props.language] ?
                              item.props.label[this.props.language] : ""
                          }
                          if (this.createComponent[item.component]) {
                            return this.createComponent[item.component](item);
                          }
                        })}

                      {this.props.definition.tabs &&
                        <Tabs activeTab={0} onChange={(i) => i}>
                          {this.props.definition.tabs.map((item) => {
                            return this.createTabItems(item);
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
                      <Alert color={item.color} key={makeId()}>
                        {item.content[this.props.language] && item.content[this.props.language] || ""}
                      </Alert>
                    )}
                </footer>
              </div>
        </StyledContainer>
      </React.Fragment>
    )
  }
}

/* istanbul ignore next */
export default Connector;