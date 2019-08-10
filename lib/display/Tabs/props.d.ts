import { ReactNode } from "react";
/**
 * This component using bootstrap lib https://reactstrap.github.io/components/tabs/
 * @example
 * <Tabs onChange={props.onChange}>
 *    <TabItem title={"title"}>Foo Action</TabItem>
 *    <TabItem title={"title"}>Bar Action</TabItem>
 *    <TabItem title={"title"}>Quo Action</TabItem>
 * </Tabs>
 */
export interface TabItem {
    /** String displayed on the nav tab */
    title: string;
    /** Indicate whether this tab is active */
    disabled?: boolean;
    /** Route path */
    slug?: string;
    children?: ReactNode;
}
export interface TabsProps {
    /** A function invoked when a tab is clicked by the user */
    onChange?: (value: number, element: any) => void;
    children?: ReactNode;
    activeTab?: number;
}
