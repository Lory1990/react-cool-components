import { useField, useFormikContext } from 'formik';
import React from "react";
import Checkbox from "./Checkbox";


export default function CheckboxFormik(props){

    const [field, meta, helpers] = useField(props.name);
    const { isSubmitting } = useFormikContext()

    return <Checkbox
        {...meta}
        {...props}
        name={props.name}
        value={field.value}
        disabled={isSubmitting || props.disabled}
        onChange={(e,checked)=>{
            helpers.setValue(checked)
            if(props.onChange) props.onChange(e, checked)
        }}
    />
}
