import { FormHelperText } from "@material-ui/core"
import IFormProps from "interfaces/IFormProps"
import style from "./ErrorAndWarningHelperText.module.scss"
import classnames from "classnames"
import { ReactComponent as Error } from "../../assets/img/error.svg"
import { ReactComponent as Warning } from "../../assets/img/error.svg"

export default function ErrorAndWarningHelperText({ errorMessage, warningMessage, showErrorMessage = true, showWarningMessage = true }: IFormProps) {
    if (!errorMessage && !warningMessage) return <></>

    return (
        <div className={classnames(style.errorAndWarningHelperText, "error-and-warning-wrapper")}>
            {errorMessage && showErrorMessage && (
                <FormHelperText className={classnames(style.errorText, "error-text")}>
                    <Error /> {errorMessage}
                </FormHelperText>
            )}
            {warningMessage && showWarningMessage && (
                <FormHelperText className={classnames(style.warningText, "warning-text")}>
                    <Warning /> {warningMessage}
                </FormHelperText>
            )}
        </div>
    )
}
