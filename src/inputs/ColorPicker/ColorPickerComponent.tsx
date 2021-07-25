import ColorPickerFormik from './ColorPicker.formik'
import { useFormikContext } from 'formik';
import ColorPicker from './ColorPicker'

export interface ITextfieldComponentProps{

}


export default function TextFieldComponent(props: ITextfieldComponentProps){

    const context = useFormikContext()

    return Boolean(context) ? <ColorPickerFormik {...props} /> : <ColorPicker {...props} />
}