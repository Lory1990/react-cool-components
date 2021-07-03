import ButtonArrayFormik from './ButtonArray.formik'
import { useFormikContext } from 'formik';
import ButtonArray from './ButtonArray'

export default function ButtonArrayComponent(props){

    const context = useFormikContext()

    return Boolean(context) ? <ButtonArrayFormik {...props} /> : <ButtonArray {...props} />
}