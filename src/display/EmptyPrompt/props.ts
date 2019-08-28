/**
 * This component using bootstrap lib https://reactstrap.github.io/components/cards/
 * @example
 *   <EmptyPrompt>
 *      <Icon>
 *            //icon code here
 *      </Icon>
 *      <Title>
 *          Smaple Heading
 *      </Title>
 *      <BodyText>
 *          <p>Sample Body Text 1</p>
 *          <p>Sample Body Text 2</p>
 *      </BodyText>
 *      <ActionButtons>
 *          <Button>Button 1</Button>
 *          <Button>Button 2</Button>
 *      </ActionButtons>
 *   </EmptyPrompt>
 */

export interface EmptyPromptProps {

    /** set Childrens */
    children?: JSX.Element[] | JSX.Element
}

export interface ActionButtonProps {

    /** set EmptyPrompt action buttons */
    children?: JSX.Element[] | Element[] | JSX.Element | Element
}

export interface TitleProps {

    /** set EmptyPrompt title */
    children?: string
    size: "xsmall" | "small" | "medium" | "large" | "xlarge"
}

export interface BodyTextProps {

    /** set EmptyPrompt body contents */
    children?: JSX.Element[] | Element[] | JSX.Element | Element | string
    size: "xsmall" | "small" | "medium" | "large" | "xlarge"
}

export interface EmptyPromptIconProps {

    /** set EmptyPrompt icon */
    children?: JSX.Element | Element
}

