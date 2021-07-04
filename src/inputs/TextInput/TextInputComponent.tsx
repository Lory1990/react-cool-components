import TextInputFormik, { ITextInputFormikProps } from './TextInput.formik'
import TextInput, { ITextInputProps } from './TextInput'
import { useFormikContext } from 'formik';

export default function TextInputComponent(props : ITextInputFormikProps){

    const context = useFormikContext()

    return Boolean(context) ? <TextInputFormik {...props} /> : <TextInput {...props} />
}