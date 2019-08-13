import React from 'react';
import { ButtonProps as ButtonPropsBase } from "reactstrap";
import { Props as QueryProps } from "../../../utils/Query/props";

/**
 * This component using https://reactstrap.github.io/components/form/ : CustomInput
 * @example
 *   <Button type="submit">primary</Button>
 */

export interface ButtonProps extends ButtonPropsBase {

    /** icon displayed on left */
    icon?: JSX.Element

    /** spinner displayed on right */
    loading?: boolean

    children: string | JSX.Element | JSX.Element[] | Element
}


export interface ButtonCollectionProps extends QueryProps {
    outline?: boolean;
    active?: boolean;
    block?: boolean;
    color?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<any>;
    size?: any;
    id?: string;
    style?: React.CSSProperties;
    children: any;
}