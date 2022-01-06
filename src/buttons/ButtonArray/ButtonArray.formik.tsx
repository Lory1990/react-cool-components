import { useField, useFormikContext } from "formik"
import { IFormNameProps } from "interfaces/IFormNameProps"
import React from "react"
import ButtonArray, { IButtonArrayProps } from "./ButtonArray"

export interface IButtonArrayFormikProps extends IButtonArrayProps, IFormNameProps {
    name: string
}

export const ButtonArrayFormik: React.FC<IButtonArrayFormikProps> = ({ onChange, ...props }) => {
    const [field, meta, helpers] = useField<string>(props.name)
    const { isSubmitting } = useFormikContext()

    return (
        <ButtonArray
            {...props}
            name={props.name}
            value={field.value}
            loading={isSubmitting || props.loading}
            errorMessage={meta.error || props.errorMessage}
            disabled={isSubmitting || props.disabled}
            onChange={(button, isSelected, event) => {
                helpers.setValue(button.id)
                onChange?.(button, isSelected, event)
            }}
        />
    )
}

export default ButtonArrayFormik
