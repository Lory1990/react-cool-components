import { FormHelperText } from "@material-ui/core"
import IFormProps from "interfaces/IFormProps"
import style from "./ErrorAndWarningHelperText.module.scss"
import classnames from "classnames"
import { ReactComponent as Error } from "../../assets/img/error.svg"
import { ReactComponent as Warning } from "../../assets/img/warning.svg"

export default function ErrorAndWarningHelperText({ errorMessage, warningMessage, showErrorMessage = true, showWarningMessage = true }: IFormProps) {
    if (!errorMessage && !warningMessage) return <></>

    return (
        <div className={classnames(style.errorAndWarningHelperText, "error-and-warning-wrapper")}>
            {errorMessage && showErrorMessage && (
                <FormHelperText className={classnames(style.errorText, style.messageText, "error-text")}>
                    <Error className={style.icon} /> {errorMessage}
                </FormHelperText>
            )}
            {warningMessage && showWarningMessage && (
                <FormHelperText className={classnames(style.warningText, style.messageText, "warning-text")}>
                    <Warning className={style.icon} /> {warningMessage}
                </FormHelperText>
            )}
        </div>
    )
}
