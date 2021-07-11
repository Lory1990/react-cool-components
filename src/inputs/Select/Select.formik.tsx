import { useField, useFormikContext } from 'formik';
import React from "react";
import Select, { ISelectComponentProps } from "./Select";


export default function SelectFormik(props : ISelectComponentProps){

    const [field, meta, helpers] = useField(props.name || "");
    const { isSubmitting } = useFormikContext()

    return <Select
        {...props}
        errorMessage={meta.error}
        value={field.value}
        disabled={isSubmitting || props.disabled}
        onChange={(e,v)=>{
            helpers.setValue(e.target.value)
            if(props.onChange) props.onChange(e,v)
        }}
    />
}
