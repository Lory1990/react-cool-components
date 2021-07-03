import DatePickerFormik from './DatePicker.formik'
import DatePicker from './DatePicker'
import { useFormikContext } from 'formik';

export default function DatePickerComponent(props){

    const context = useFormikContext()

    return Boolean(context) ? <DatePickerFormik {...props} /> : <DatePicker {...props} />
}