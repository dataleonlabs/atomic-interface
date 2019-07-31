export interface Props {
  /** Editor content */
  value: string

  /** Function invoked when value is changed by the user  */
  onChange?: ({ name, value }: { name: string; value: string }) => void

  /** Editor name */
  name?: string

  /** Editor label */
  label?: string
}
