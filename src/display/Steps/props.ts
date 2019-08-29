/**
 * This component using bootstrap lib https://reactstrap.github.io/components/toasts/
 * @example
 * 
 */

export interface StepProps {

    /** Children */
    children?: string | JSX.Element[] | Element[] | JSX.Element | Element;
}

export interface StepItemProps {

    /** item active */
    state?: "none" | "active" | "complete";

    /** item complete operation/task */
    complete?: boolean;        

    /** Children */
    children?: string | JSX.Element[] | Element[] | JSX.Element | Element;
}

export interface StepNumberProps {

    /** Children */
    children?: string;
}

export interface StepTitleProps {

    /** Children */
    children?: string;
}

export interface StepDescProps {

    /** Children */
    children?: string;
}

export interface StepIconProps {

    /** Children */
    children?: JSX.Element | string;
}

export interface StepLinkProps {
        
    /** Children */
    children: string | JSX.Element[] | Element[] | JSX.Element | Element
}

