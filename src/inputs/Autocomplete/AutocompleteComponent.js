import AutocompleteFormik from './Autocomplete.formik'
import { useFormikContext } from 'formik';
import Autocomplete from './Autocomplete'

export default function AutocompleteComponent(props){

    const context = useFormikContext()

    return Boolean(context) ? <AutocompleteFormik {...props} /> : <Autocomplete {...props} />
}