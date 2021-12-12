import { useField, useFormikContext } from "formik"
import React from "react"
import _ from "lodash"
import Autocomplete from "./Autocomplete"

export default function AutocompleteFormik(props: any) {
    return <div>aAA</div>

    // const [field, meta, helpers] = useField(props.name);
    // const { isSubmitting } = useFormikContext()

    // const getValue = () =>{
    //     if(props.multiple){
    //         if(!field.value) return []
    //         return props.values?.filter(value => field.value.includes(value.id))
    //     }else{
    //         if(!field.value) return undefined
    //         return props.values?.find(value => field.value === value.id)
    //     }
    // }

    // return <Autocomplete
    //     {...meta}
    //     {...props}
    //     name={props.name}
    //     errorMessage={meta.error || props.errorMessage}
    //     value={getValue()}
    //     disabled={isSubmitting || props.disabled}
    //     onChange={(event, value, reason)=>{
    //         let valueToSet = null
    //         if(props.multiple){
    //             valueToSet = _.map(value, v=>v.id)
    //         }else{
    //             valueToSet = value.id
    //         }
    //         helpers.setValue(valueToSet)
    //         if(props.onChange) props.onChange(event, value, reason)
    //     }}
    // />
}
