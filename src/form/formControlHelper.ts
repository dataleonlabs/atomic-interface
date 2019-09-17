export class FormControlHelper {

  /** function to check conditionals among form values */
  public checkConditional(conditional: any, values: {}) {
    if (conditional) {
      for (const key in conditional) {
        if (conditional.hasOwnProperty(key)) {
          const element = conditional[key];
          if (values[key] !== element) {
            return true;
          }
        }
      }
      return false;
    }
  }
}