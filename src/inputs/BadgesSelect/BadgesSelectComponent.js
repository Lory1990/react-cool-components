import BadgesSelectFormik from './BadgesSelect.formik'
import { useFormikContext } from 'formik';
import BadgesSelect from './BadgesSelect'

export default function BadgesSelectComponent(props){

    const context = useFormikContext()

    return Boolean(context) ? <BadgesSelectFormik {...props} /> : <BadgesSelect {...props} />
}