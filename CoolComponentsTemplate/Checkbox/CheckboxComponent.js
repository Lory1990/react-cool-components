import CheckboxFormik from './Checkbox.formik'
import { useFormikContext } from 'formik';
import Checkbox from './Checkbox'

export default function CheckboxComponent(props){

    const context = useFormikContext()

    return Boolean(context) ? <CheckboxFormik {...props} /> : <Checkbox {...props} />
}