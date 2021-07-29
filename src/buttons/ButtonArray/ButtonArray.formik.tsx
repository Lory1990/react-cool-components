import { useField, useFormikContext } from "formik"
import React from "react"
import ButtonArray from "./ButtonArray"

export default function ButtonArrayFormik(props: any) {
    const [field, meta, helpers] = useField(props.name)
    const { isSubmitting } = useFormikContext()

    return (
        <ButtonArray
            {...meta}
            {...props}
            name={props.name}
            value={field.value}
            selected={field.value}
            disabled={isSubmitting || props.disabled}
            setSelected={(button, isSelected, event) => {
                helpers.setValue(button.id)
                if (props.onChange) props.onChange(button, isSelected, event)
                if (props.setSelected) props.setSelected(button, isSelected, event)
            }}
        />
    )
}
