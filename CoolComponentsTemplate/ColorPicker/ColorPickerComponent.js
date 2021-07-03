import ColorPickerFormik from './ColorPicker.formik'
import { useFormikContext } from 'formik';
import ColorPicker from './ColorPicker'

export default function TextFieldComponent(props){

    const context = useFormikContext()

    return Boolean(context) ? <ColorPickerFormik {...props} /> : <ColorPicker {...props} />
}