import { useField, useFormikContext } from "formik"
import React from "react"
import SizedSlider, { ISizedSliderProps } from "./SizedSlider"

export interface ISizedSliderFormikProps extends ISizedSliderProps {
    name: string
}

export default function SizedSliderFormik(props: ISizedSliderFormikProps) {
    const [field, meta, helpers] = useField(props.name)
    const { isSubmitting } = useFormikContext()

    // return (
    //     <SizedSlider
    //         {...props}
    //         errorMessage={meta.error}
    //         value={field.value}
    //         disabled={isSubmitting || props.disabled}
    //         onChange={value => {
    //             helpers.setValue(value)
    //             if (props.onChange) props.onChange(value)
    //         }}
    //     />
    // )
}
