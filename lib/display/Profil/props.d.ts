import { ImgHTMLAttributes, DetailedHTMLProps } from "react";
/**
 * Follow documentation https://reactstrap.github.io/components
 * @example
 *  <Profil size="md" src="https://example.com/image.png">
 */
export interface ProfilProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    /** Size of image */
    size?: 'sm' | 'md' | 'lg';
}
