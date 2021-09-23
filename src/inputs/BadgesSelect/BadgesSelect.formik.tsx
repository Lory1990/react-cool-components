import { useField, useFormikContext } from 'formik';
import React from "react";
import BadgesSelect, { IBadgesSelectProps } from "./BadgesSelect";
import _ from 'lodash'

export interface IBadgesSelectFormikProps extends IBadgesSelectProps{
    name: string   
}

export default function BadgesSelectFormik(props : IBadgesSelectFormikProps){

    const [field, meta, helpers] = useField(props.name);
    const { isSubmitting } = useFormikContext()

    //console.log("badges-select-formik", props.name, props.values, field.value, "REAL VALUE", props.values?.filter(value => field.value.includes(value.id)))

    return <BadgesSelect
        {...meta}
        {...props}
        name={props.name}
        value={Array.isArray(field.value) ? props.values?.filter(value => field.value.includes(value.id)) : []}
        disabled={isSubmitting || props.disabled}
        onChange={(event, value, reason)=>{
            helpers.setValue(_.map(value, v=>v.id))
            if(props.onChange) props.onChange(event, value, reason)
        }}
    />
}
