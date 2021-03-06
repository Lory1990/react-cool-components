import SelectFormik from './Select.formik'
import { useFormikContext } from 'formik';
import Select from './Select'

export default function SelectComponent(props : any){

    const context = useFormikContext()

    return Boolean(context) ? <SelectFormik {...props} /> : <Select {...props} />
}