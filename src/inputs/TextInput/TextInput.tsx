import { TextField, TextFieldProps } from "@material-ui/core"
import IFormProps from "interfaces/IFormProps"
import ITooltipProps from "interfaces/ITooltipProps"
import _ from "lodash"
import InputFieldWrapper from "ui/InputFieldWrapper"
import style from "./TextInput.module.scss"

export type ITextInputProps = IFormProps &
    TextFieldProps &
    ITooltipProps & {
        /** Label max length */
        maxLength?: number
        /** Function to parse text on change Text */
        parseTransform?: (input: string) => string
        /** Function to parse text rendering Text */
        renderTransform?: (input: string) => string
        min?: number
        max?: number
        step?: number
    }

export const TextInputComponent: React.FC<ITextInputProps> = ({
    loading,
    disabled,
    readOnly,
    warningMessage,
    showWarningMessage,
    errorMessage,
    showErrorMessage,
    parseTransform,
    maxLength,
    className,
    value,
    onChange,
    label,
    error,
    min,
    max,
    step,
    ...rest
}: ITextInputProps) => {
    const onChangeInt = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (maxLength && _.size(event.target.value) > maxLength) return
        if (parseTransform) {
            event.target.value = parseTransform(event.target.value)
        }
        onChange && onChange(event)
    }

    return (
        <InputFieldWrapper
            className={className}
            componentClassName={"text-field"}
            styleClassName={style.textField}
            warningMessage={warningMessage}
            showWarningMessage={showWarningMessage}
            errorMessage={errorMessage}
            showErrorMessage={showErrorMessage}
            loading={loading}
            disabled={disabled}
            readOnly={readOnly}
        >
            <TextField value={value || ""} label={label} onChange={onChangeInt} variant="outlined" error={error} inputProps={{ min, max, step }} {...rest} />
        </InputFieldWrapper>
    )
}

export default TextInputComponent
