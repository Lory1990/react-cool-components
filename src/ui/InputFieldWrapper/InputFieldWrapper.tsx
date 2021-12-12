import classnames from "classnames"
import IFormProps from "interfaces/IFormProps"
import RoundLoader from "other/RoundLoader"
import ErrorAndWarningHelperText from "ui/ErrorAndWarningHelperText/ErrorAndWarningHelperText"
import { ReactComponent as Yes } from "../../assets/img/feature-yes.svg"
import style from "./InputFieldWrapper.module.scss"
export interface IInputFieldWrapperProps extends IFormProps {
    className?: string
    componentClassName?: string
    styleClassName?: string
    children: any
}

export function InputFieldWrapper(props: IInputFieldWrapperProps) {
    const { loading, styleClassName, children, errorMessage, warningMessage, className, componentClassName, readOnly, success, disabled } = props

    return (
        <div
            className={classnames("form-component", style.formComponent, className, styleClassName, componentClassName, {
                loading,
                success,
                disabled,
                readOnly,
                warning: warningMessage,
                error: errorMessage
            })}
        >
            <div className={classnames("form-component-content", style.formComponentContent)}>
                {children}
                {success && <Yes />}
                {loading && <RoundLoader />}
            </div>
            <ErrorAndWarningHelperText {...props} />
        </div>
    )
}

export default InputFieldWrapper
