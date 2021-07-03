import { useField, useFormikContext } from 'formik';
import React from "react";
import ColorPicker from "./ColorPicker";


export default function ColorPickerFormik(props){

    const [field, meta, helpers] = useField(props.name);
    const { isSubmitting } = useFormikContext()

    return <ColorPicker
        {...meta}
        {...props}
        name={props.name}
        value={field.value ? field.value : undefined }
        disabled={isSubmitting || props.disabled}
        onChange={(color)=>{
            helpers.setValue("#"+color.hex)
            if(props.onChange) props.onChange(color)
        }}
    />
}
