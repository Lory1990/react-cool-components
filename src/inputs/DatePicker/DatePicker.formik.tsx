import { useField, useFormikContext } from "formik"
import React from "react"
import DatePicker, { IDatePickerProps } from "./DatePicker"

export interface IDatePickerFormikProps extends IDatePickerProps {
    name: string
}

export default function DatePickerFormik(props: IDatePickerFormikProps) {
    const [field, meta, helpers] = useField(props.name)
    const { isSubmitting } = useFormikContext()

    return (
        <DatePicker
            {...meta}
            {...props}
            name={props.name}
            value={field.value}
            disabled={isSubmitting || props.disabled}
            onChange={date => {
                helpers.setValue(date)
                if (props.onChange) props.onChange(date)
            }}
        />
    )
}
