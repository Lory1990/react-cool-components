import { useField, useFormikContext } from "formik"
import React from "react"
import ColorPicker, { IColorPickerProps } from "./ColorPicker"

export interface IColorPickerFormikProps extends IColorPickerProps {
    name: string
}

export default function ColorPickerFormik(props: IColorPickerFormikProps) {
    const [field, meta, helpers] = useField(props.name)
    const { isSubmitting } = useFormikContext()

    return (
        <ColorPicker
            {...props}
            errorMessage={meta.error || props.errorMessage}
            value={field.value ? field.value : undefined}
            disabled={isSubmitting || props.disabled}
            onChange={color => {
                helpers.setValue("#" + color.hex)
                if (props.onChange) props.onChange(color)
            }}
        />
    )
}
