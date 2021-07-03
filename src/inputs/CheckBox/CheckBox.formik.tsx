import { useField, useFormikContext } from 'formik';
import CheckBox, { ICheckBoxProps } from "./CheckBox";

export interface ICheckBoxFormikProps extends ICheckBoxProps{
    name: string,
}

export default function CheckBoxFormik(props : ICheckBoxFormikProps){

    const [field, meta, helpers] = useField(props.name);
    const { isSubmitting } = useFormikContext()

    return <CheckBox
        {...props}
        name={props.name}
        error={meta.error}
        value={field.value}
        disabled={isSubmitting || props.disabled}
        onChange={(e,checked)=>{
            helpers.setValue(checked)
            if(props.onChange) props.onChange(e, checked)
        }}
    />
}
