import * as React from "react"
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import classnames from "classnames"
import IFormProps from "../../interfaces/IFormProps"
import ITooltipProps from "../../interfaces/ITooltipProps"
import InputFieldWrapper from "ui/InputFieldWrapper/InputFieldWrapper"
// import style from './CheckBox.module.scss';

export interface ICheckBoxProps extends IFormProps, ITooltipProps, CheckboxProps {}

export function CheckboxComponent({
    onChange,
    id,
    disabled,
    label,
    name,
    value,
    className,
    errorMessage,
    warningMessage,
    readOnly,
    success,
    showWarningMessage,
    showErrorMessage,
    loading
}: ICheckBoxProps) {
    const style = {} as any
    return (
        <InputFieldWrapper
            className={className}
            componentClassName={"check-box"}
            styleClassName={style.checkBox}
            warningMessage={warningMessage}
            showWarningMessage={showWarningMessage}
            errorMessage={errorMessage}
            showErrorMessage={showErrorMessage}
            loading={loading}
        >
            <FormControlLabel
                className={classnames(style.checkbox, className, { disabled, errorMessage, warningMessage, readOnly, success })}
                control={
                    <>
                        <Checkbox checked={Boolean(value)} onChange={onChange} id={id} name={name} disabled={disabled} />
                    </>
                }
                disabled={disabled}
                label={<>{label}</>}
            />
        </InputFieldWrapper>
    )
}

export default CheckboxComponent
