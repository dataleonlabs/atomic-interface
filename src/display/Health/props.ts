/**
 * This component using bootstrap lib https://reactstrap.github.io/components/toasts/
 * @example
 * <Health color="healthy" />
 */

export interface HealthProps {
    color: "warning" | "failure" | "healthy" | "unknown" | "info"
    children?: string | JSX.Element | JSX.Element[] | Element[] | Element    
    size: "sm" | "md" | "lg" | "xlg"
}

