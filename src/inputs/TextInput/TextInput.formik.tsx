import { useField, useFormikContext } from 'formik';
import TextInput, { ITextInputProps } from "./TextInput";

export type ITextInputFormikProps = ITextInputProps & {
    name: string,
}


export default function TextInputFormik(props : ITextInputFormikProps){

    const [field, meta, helpers] = useField(props.name);
    const { isSubmitting } = useFormikContext()

    return <TextInput
        {...props}
        name={props.name}
        value={field.value}
        disabled={isSubmitting || props.disabled}
        onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{
            if(props.type==='number'){
                let number = parseFloat(e.target.value)
                if(props?.min > number) return
                if(props?.max < number) return
                helpers.setValue(number)
                e.target.value = number + ""
                if(props.onChange) props.onChange(e)
            }else{
                helpers.setValue(e.target.value)
                if(props.onChange) props.onChange(e)
            }
        }}
    />
}
