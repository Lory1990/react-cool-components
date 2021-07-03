import { useField, useFormikContext } from 'formik';
import React from "react";
import Select from "./Select";


export default function SelectFormik(props){

    const [field, meta, helpers] = useField(props.name);
    const { isSubmitting } = useFormikContext()

    return <Select
        {...meta}
        {...props}
        name={props.name}
        value={field.value}
        disabled={isSubmitting || props.disabled}
        onChange={(e)=>{
            helpers.setValue(e.target.value)
            if(props.onChange) props.onChange(e)
        }}
    />
}
