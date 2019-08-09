import { FormGroup } from 'reactstrap';
import { InputProps } from './controls/Input/props';
export declare const StyledControl: import("styled-components").StyledComponent<typeof FormGroup, any, {}, never>;
export interface Props extends InputProps {
}
/**
 * Textarea render element
 */
declare const Control: (props: Props) => JSX.Element;
export default Control;
