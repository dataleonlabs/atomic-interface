import { BadgeProps as BadgePropsBase } from "reactstrap";

/**
 * This component using bootstrap lib https://reactstrap.github.io/components/badge/
 * @example
 * <Badge color="primary" pill>
 *    Try to select this text!
 * </Badge>
 */

export interface BadgeProps extends BadgePropsBase {
  /** Colors alert */
  color?:
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

   /** Enable pill: pill show when true */
   pill?: boolean

   // Children 
   children: string | JSX.Element
}

