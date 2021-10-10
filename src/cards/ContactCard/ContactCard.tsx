import { Button } from "@buttons"
import classnames from "classnames"
import { IContactDTO } from "./interfaces/IContactDTO"
import { Form, Formik, FormikHelpers } from "formik"
import TextField from "@inputs/TextInput/TextInput.formik"
import emailjs from "emailjs-com"
import { useState } from "react"
import RoundLoader from "other/RoundLoader"
import style from "./ContactCard.module.scss"

export interface IContactCardProps {
    className?: string
    onSubmit?: (values: IContactDTO) => Promise<void>
    onSuccess?: (values: IContactDTO) => void
    onError?: (error: any) => void
    emailJsParams?: {
        serviceId?: string
        templateId?: string
        userId?: string
    }
}

export const ContactCard: React.FC<IContactCardProps> = ({ onError, className, onSuccess, emailJsParams, ...props }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const onSubmit = async (data: IContactDTO, formikHelper: FormikHelpers<IContactDTO>) => {
        try {
            setLoading(true)
            setSuccess(false)
            if (props.onSubmit) {
                props.onSubmit(data)
                onSuccess?.(data)
            } else {
                const templateParams = {
                    name: data.name,
                    email: data.email,
                    message: data.message
                }
                await emailjs.send(
                    emailJsParams?.serviceId || process.env.NEXT_PUBLIC_SERVICE_ID || process.env.REACT_APP_SERVICE_ID || process.env.SERVICE_ID || "",
                    emailJsParams?.templateId || process.env.NEXT_PUBLIC_TEMPLATE_ID || process.env.REACT_APP_TEMPLATE_ID || process.env.TEMPLATE_ID || "",
                    templateParams,
                    emailJsParams?.userId || process.env.NEXT_PUBLIC_USER_ID || process.env.REACT_APP_USER_ID || process.env.USER_ID || ""
                )
                onSuccess?.(data)
                setSuccess(true)
            }
        } catch (e: any) {
            onError?.(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Formik onSubmit={onSubmit} initialValues={{} as IContactDTO}>
            <Form className={classnames(className, style.contactCard, "contact-form")}>
                <div className={classnames(style.contactFields, "contact-fields")}>
                    <TextField className={classnames(style.contactSingleField, "single-field")} name="name" label="Name" variant="outlined" disabled={loading} />

                    <TextField className={classnames(style.contactSingleField, "single-field")} label="Email" variant="outlined" name="email" type="email" disabled={loading} />

                    <TextField
                        className={classnames(style.contactSingleField, "single-field")}
                        id="contact-form-message"
                        name="message"
                        type="text"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        disabled={loading}
                    />
                </div>
                <div className={classnames(style.btnContainer, "button-container")}>
                    {loading ? (
                        <RoundLoader />
                    ) : success ? (
                        <div>Success</div>
                    ) : (
                        <Button type="submit" className={classnames(style.contactBtn, "submit-button")}>
                            Submit!
                        </Button>
                    )}
                </div>
            </Form>
        </Formik>
    )
}

export default ContactCard
