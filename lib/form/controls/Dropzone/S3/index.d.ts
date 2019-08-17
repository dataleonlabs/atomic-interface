import * as React from 'react';
import { DropzoneS3Props as Props, State } from './props';
import { FieldProps } from 'formik';
export declare function getHeaders(): {
    Accept: string;
    Authorization: string;
    'Content-Type': string;
};
declare class DropzoneS3 extends React.PureComponent<Props> {
    static defaultProps: Partial<Props>;
    state: State;
    getSignedUrl: (file: any, callback: any) => void;
    onClick: () => void;
    onSignedUrl: () => void;
    onUploadProgress: (progress: number) => void;
    onUploadError: (e: any) => void;
    onUploadFinish: (setFieldValue: {
        (field: never, value: any, shouldValidate?: boolean | undefined): void;
        (field: string, value: any): void;
    }) => () => Promise<void>;
    renderField: ({ form: { submitCount, errors, setFieldValue } }: FieldProps<{}>) => JSX.Element;
    render(): JSX.Element;
}
export default DropzoneS3;
