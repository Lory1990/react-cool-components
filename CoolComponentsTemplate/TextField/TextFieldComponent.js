import TextFieldFormik from './TextField.formik'
import TextField from './TextField'
import { useFormikContext } from 'formik';

export default function TextFieldComponent(props){

    const context = useFormikContext()

    return Boolean(context) ? <TextFieldFormik {...props} /> : <TextField {...props} />
}