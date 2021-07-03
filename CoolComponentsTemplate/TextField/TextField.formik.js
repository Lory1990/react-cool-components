import { useField, useFormikContext } from 'formik';
import React from "react";
import TextField from "./TextField";


export default function TextFieldFormik(props){

    const [field, meta, helpers] = useField(props.name);
    const { isSubmitting } = useFormikContext()

    return <TextField
        {...meta}
        {...props}
        name={props.name}
        value={field.value}
        disabled={isSubmitting || props.disabled}
        onChange={(e)=>{
            if(props.type==='number'){
                let number = parseFloat(e.target.value)
                if(props.min > number) return
                if(props.max < number) return
                helpers.setValue(number)
                e.target.value = number
                if(props.onChange) props.onChange(e)
            }else{
                helpers.setValue(e.target.value)
                if(props.onChange) props.onChange(e)
            }
        }}
    />
}
