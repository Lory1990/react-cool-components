import AutocompleteMui, { AutocompleteProps } from "@mui/material/Autocomplete"
import classnames from "classnames"
import IFormProps from "interfaces/IFormProps"
import ITooltipProps from "interfaces/ITooltipProps"
import InputFieldWrapper from "ui/InputFieldWrapper"
import IElementClassesProps from "interfaces/IElementClassesProps"
import _ from "lodash"
import style from "./Autocomplete.module.scss"
import TextField from "../TextInput"

export interface IAutocompleteElementClasses {
    label?: string
}

export interface IAutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined>
    extends ITooltipProps,
        IFormProps,
        IElementClassesProps<IAutocompleteElementClasses>,
        AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {}

export function Autocomplete<T extends {}, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined>({
    id,
    label,
    value,
    options,
    onChange,
    elementClasses,
    className,
    renderInput,
    placeholder,
    warningMessage,
    showWarningMessage,
    errorMessage,
    showErrorMessage,
    loading,
    disabled,
    readOnly,
    success,
    ...restProps
}: IAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
    // console.log("REST", restProps)
    return (
        <InputFieldWrapper
            className={className}
            componentClassName={"autocomplete"}
            styleClassName={style.autocomplete}
            warningMessage={warningMessage}
            showWarningMessage={showWarningMessage}
            errorMessage={errorMessage}
            showErrorMessage={showErrorMessage}
            disabled={disabled}
            readOnly={readOnly}
        >
            <AutocompleteMui
                className={classnames("autocomplete-element", style.autocompleteElement)}
                options={options}
                disabled={disabled}
                renderInput={params => {
                    if (renderInput) {
                        return renderInput(params)
                    }

                    return <TextField {...params} placeholder={placeholder} label={label} disabled={disabled} readOnly={readOnly} success={success} loading={loading} />
                }}
                {...restProps}
            />
        </InputFieldWrapper>
    )
}

export default Autocomplete
