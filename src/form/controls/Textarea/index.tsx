// Render Prop
import React from 'react';
import { IForm } from '../../types'
import { wrapperGridCol } from '../../helpers'
import TextareaAutosize from 'react-autosize-textarea';

/**
 * InputRender render element
 */
const Textarea = ({ field }: IForm) => (
  <React.Fragment>
    {wrapperGridCol(
      <TextareaAutosize rows={Number(field.rows || 5)} maxRows={Number(field.maxRows || 10)} className="form-control" {...field} />
    , { field })}
  </React.Fragment>
)

export default Textarea;
