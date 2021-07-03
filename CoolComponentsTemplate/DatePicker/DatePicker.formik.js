import { useField, useFormikContext } from 'formik';
import React from "react";
import DatePicker from "./DatePicker";


export default function TextFieldFormik(props){

    const [field, meta, helpers] = useField(props.name);
    const { isSubmitting } = useFormikContext()

    return <DatePicker
        {...meta}
        {...props}
        name={props.name}
        value={field.value}
        disabled={isSubmitting || props.disabled}
        onChange={(date)=>{
            helpers.setValue(date)
            if(props.onChange) props.onChange(date)
        }}
    />
}
