import { BadgeProps } from "src/display/Badge/props";
import { AlertProps } from "src/display/Alert/props";
import { FormikValues } from "formik";

/**
 * Using Connector
 * @example
 * <Connector
 *   definition={{ ... }}
 *   language="en"
 * />
 */

/** Provider ConnectorProps */
export interface ConnectorProps {

    /** Children is added directly in respective component */
    definition: {
        /** type of component */
        type: 'trigger' | 'action',

        /** Header content to top */
        header: {
            title: {
                en: string
                fr?: string
            },
            description: {
                en: string
                fr?: string
            },
            badges: Array<{
                color: BadgeProps['color'],
                content: {
                    en: string,
                    fr?: string
                }

            }>,
            infos: Array<{
                color: AlertProps['color'],
                content: {
                    en: string,
                    fr?: string
                }

            }>,
        },

        /** Body content to top */
        body: Array<{ [key: string]: any }>

        /** Tabs content to top */
        tabs?: Array<{
            name: {
                en: string,
                fr?: string
            },
            content: Array<{ [key: string]: any }>
        }>,

        /** Footer content to top */
        footer: {
            infos: Array<{
                color: AlertProps['color'],
                content: {
                    en: string,
                    fr?: string
                }
            }>,
        },
    }


    /** Id of ressource for fetch data */
    id?: string

    /** Current languages */
    language: "fr" | "en"

    /**
     * Initial values for form data
     */
    initialValues?: any

    /**
     * Function called when user submit form
     */
    onSubmit?: (values: FormikValues) => void;
}
