import React, { Children } from 'react';
import { storiesOf } from '@storybook/react';
import Connector from './index';
import { Col } from 'reactstrap';
import { CloudRain } from 'react-feather';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

storiesOf('Layout|Connector', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30, marginBottom: 50 }}>
        <h4>Layout - Connector</h4>
        <br />
        <p>This is layout connector.</p>
        <hr />
        <br />
        <h6><strong>Example</strong></h6>
        <hr />
        <Connector
          definition={{
            type: "action",
            header: {
              title: { en: "Header Title" },
              description: { en: "This is header description" },
              badges: [
                {
                  color: "primary",
                  content: { en: "Badge 4" }
                }
              ],
              infos: [
                {
                  color: "primary",
                  content: { en: "Header Alert" }
                }
              ]
            },
            body: [
              {
                component: "Input",
                props: {
                  type: "text",
                  label: { en: "Test Input" },
                  placeholder: { en: "Enter a unique name associated to your webhook link." },
                  name: "test",
                  size: 12,
                }
              },
              {
                component: "Button",
                props: {
                  type: "submit",
                  name: "Test",
                  color: "primary",
                },
                children: "Submit"
              },
              {
                component: "H1",
                content: "Test H1 Content"
              },
              {
                component: "H2",
                content: "Test H2 Content"
              },
              {
                component: "H3",
                content: "Test H3 Content"
              },
              {
                component: "Checkbox",
                props: {
                  name: "reading",
                  label: { en: "Reading" },
                }
              },
              {
                component: "DatePicker",
                props: {
                  name: "dob",
                  dateFormat: "yyyy/MM/dd",
                }
              },
              {
                component: "DropzoneS3",
                props: {
                  name: "myfile",
                  s3Url: "http://test-storage.qa.youngapp.co.s3-website-us-east-1.amazonaws.com",
                  color: "primary",
                  size: 'md',
                  multipleFiles: true,
                  icon: <CloudRain size={15} />,
                  label: { en: "S3 Dropzone" },
                  outline: true,
                  onUploadFinish: (data) => { },
                  server: "https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com",
                  signingUrl: "/dev/test-signed",
                  signingUrlMethod: "PUT",
                  XAmzAcl: "public-read",
                },
                children: "Upload your files with S3"
              },
              {
                component: "FilePickerS3",
                props: {
                  name: "myfile1",
                  color: "primary",
                  size: 'md',
                  multipleFiles: true,
                  icon: <CloudRain size={15} />,
                  label: { en: "S3 Filepicker" },
                  outline: true,
                  onUploadFinish: (data) => { },
                  server: "https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com",
                  signingUrl: "/dev/test-signed",
                  signingUrlMethod: "PUT",
                  XAmzAcl: "public-read",
                },
                children: "Upload your files with S3"
              },
              {
                component: "FilePicker",
                props: {
                  name: "myfile3",
                  label: { en: "Basic Filepicker" },
                }
              },
              {
                component: "Radio",
                props: {
                  name: "gender",
                  label: { en: "Male" },
                }
              },
              {
                component: "Radio",
                props: {
                  name: "gender",
                  label: { en: "Female" },
                }
              },
              {
                component: "RichText",
                props: {
                  name: "richtext1",
                  label: { en: "Enter Your Text in RichText" },
                }
              },
              {
                component: "SearchBar",
                props: {
                  name: "search1",
                  label: { en: "Search Box" },
                  placeholder: { en: "Search keyword" },
                }
              },
              {
                component: "ButtonGroup",
                props: {
                  name: "test"
                },
                children: [
                  {
                    component: "Button",
                    props: {
                      type: "button",
                      name: "btn1",
                      color: "primary",
                    },
                    children: "Left"
                  },
                  {
                    component: "Button",
                    props: {
                      type: "button",
                      name: "btn2",
                      color: "primary",
                    },
                    children: "Middle"
                  },
                  {
                    component: "Button",
                    props: {
                      type: "button",
                      name: "btn3",
                      color: "primary",
                    },
                    children: "Right"
                  }
                ]
              },
              {
                component: "Switch",
                props: {
                  name: "switch1",
                  label: { en: "Switch" }
                }
              },
              {
                component: "Textarea",
                props: {
                  name: "textarea1",
                  label: { en: "Textarea" }
                }
              }
            ],
            tabs: [{
              name: {
                en: "Settings"
              },
              content: [
                {
                  component: "Input",
                  props: {
                    type: "text",
                    label: { en: "Test Input" },
                    placeholder: { en: "Enter a unique name associated to your webhook link." },
                    name: "test",
                    size: 12,
                  }
                }
              ]
            },
            {
              name: {
                en: "Actions"
              },
              content: [
                {
                  component: "Select",
                  props: {
                    label: { en: "Favorite" },
                    name: "favorite",
                    options: [
                      { value: 'chocolate', label: { en: 'Chocolate' } },
                      { value: 'strawberry', label: { en: 'Strawberry' } },
                      { value: 'vanilla', label: { en: 'Vanilla' } },
                    ]
                  }
                },
                {
                  component: "H1",
                  content: "Test H1 Content"
                },
                {
                  component: "H2",
                  content: "Test H2 Content"
                },
                {
                  component: "H3",
                  content: "Test H3 Content"
                },
                {
                  component: "Checkbox",
                  props: {
                    name: "writing",
                    label: { en: "Writing" },
                  }
                },
                {
                  component: "DatePicker",
                  props: {
                    name: "dob",
                    dateFormat: "yyyy/MM/dd",
                  }
                },
                {
                  component: "Button",
                  props: {
                    type: "submit",
                    name: "Test",
                    color: "primary",
                  },
                  children: "Submit"
                },
              ]
            }],
            footer: {
              infos: [
                {
                  color: "danger",
                  content: { en: "Footer Alert" }
                }
              ]
            },
          }}
          language="en">
        </Connector>
        <br />
        <br />
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value={`<Connector
  definition={{
    type: "action",
    header: {
      title: { en: "Header Title" },
      description: { en: "This is header description" },
      badges: [
        {
          color: "primary",
          content: { en: "Badge 4" }
        }
      ],
      infos: [
        {
          color: "primary",
          content: { en: "Header Alert" }
        }
      ]
    },
    body: [
      {
        component: "Input",
        props: {
          type: "text",
          label: "Test Input",
          placeholder: "Enter a unique name associated to your webhook link.",
          name: "test",
          size: 12,
        }
      },
      {
        component: "Button",
        props: {
          type: "submit",
          name: "Test",
          color: "primary",
        },
        children: "Submit"
      },
      {
        component: "Checkbox",
        props: {
          name: "reading",
          label: "Reading",
        }
      },
      {
        component: "DatePicker",
        props: {
          name: "dob",
          dateFormat: "yyyy/MM/dd",
        }
      },
      {
        component: "DropzoneS3",
        props: {
          name: "myfile",
          s3Url: "http://test-storage.qa.youngapp.co.s3-website-us-east-1.amazonaws.com",
          color: "primary",
          size: 'md',
          multipleFiles: true,
          icon: <CloudRain size={15} />,
          label: "S3 Dropzone",
          outline: true,
          onUploadFinish: (data) => { },
          server: "https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com",
          signingUrl: "/dev/test-signed",
          signingUrlMethod: "PUT",
          XAmzAcl: "public-read",
        },
        children: "Upload your files with S3"
      },
      {
        component: "FilePickerS3",
        props: {
          name: "myfile1",
          color: "primary",
          size: 'md',
          multipleFiles: true,
          icon: <CloudRain size={15} />,
          label: "S3 Filepicker",
          outline: true,
          onUploadFinish: (data) => { },
          server: "https://3dgzy3koke.execute-api.eu-west-3.amazonaws.com",
          signingUrl: "/dev/test-signed",
          signingUrlMethod: "PUT",
          XAmzAcl: "public-read",
        },
        children: "Upload your files with S3"
      },
      {
        component: "FilePicker",
        props: {
          name: "myfile3",
          label: "Basic Filepicker",
        }
      },
      {
        component: "Radio",
        props: {
          name: "gender",
          label: "Male",
        }
      },
      {
        component: "Radio",
        props: {
          name: "gender",
          label: "Female",
        }
      },
      {
        component: "RichText",
        props: {
          name: "richtext1",
          label: "Enter Your Text in RichText",
        }
      },
      {
        component: "SearchBar",
        props: {
          name: "search1",
          label: "Search Box",
          placeholder: "Search keyword",
        }
      },
      {
        component: "Switch",
        props: {
          name: "switch1",
          label: "Switch"
        }
      },
      {
        component: "Textarea",
        props: {
          name: "textarea1",
          label: "Textarea"
        }
      }              
    ],
    tabs: [{
      name: {
        en: "Settings"
      },
      content: [
        {
          component: "Input",
          props: {
            type: "text",
            label: "Test Input",
            placeholder: "Enter a unique name associated to your webhook link.",
            name: "test",
            size: 12,
          }
        },                
      ]
    },
    {
      name: {
        en: "Actions"
      },
      content: [
        {
          component: "Select",
          props: {
            label: "Favorite",
            name: "favorite",
            options: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]
          }
        },
        {
          component: "Checkbox",
          props: {
            name: "writing",
            label: "Writing",
          }
        },
        {
          component: "DatePicker",
          props: {
            name: "dob",
            dateFormat: "yyyy/MM/dd",
          }
        },
        {
          component: "Button",
          props: {
            type: "submit",
            name: "Test",
            color: "primary",
          },
          children: "Submit"
        }
      ]
    }],
    footer: {
      infos: [
        {
          color: "danger",
          content: { en: "Footer Alert" }
        }
      ]
    },
  }}
  language="en">
</Connector>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true
          }}
        />
      </Col>
    </React.Fragment >
  ));