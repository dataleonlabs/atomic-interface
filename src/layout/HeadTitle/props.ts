import { AlertProps } from "src/display/Alert/props";
import { ButtonProps } from "src/form/controls/Button/props";

/**
 * Using HeadTitle
 * @example
 * <HeadTitle
 *   definition={{ ... }}
 *   language="en"
 * />
 */

/** Provider HeadTitleProps */
export interface HeadTitleProps {
    /** Children are added directly in respective component */
    definition: {
        /** title content to top */
        title: {
            en: string
            fr?: string
        },
        /** description content to top */
        description: {
            en: string
            fr?: string
        }

        /** buttons content to top */
        buttons: Array<ButtonProps>,

        /** infos content to top */
        infos: Array<{
            color: AlertProps['color'],
            key1: {
                en: string,
                fr?: string
            },
            content: {
                en: string,
                fr?: string
            }
        }>,
    },
    /** Current languages */
    language: "fr" | "en"
}


