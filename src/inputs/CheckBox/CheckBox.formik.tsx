import { useField, useFormikContext } from "formik"
import useFormikFieldHelper from "hooks/useFormikFieldHelper"
import CheckBox, { ICheckBoxProps } from "./CheckBox"

export interface ICheckBoxFormikProps extends ICheckBoxProps {
    name: string
}

export default function CheckBoxFormik({success, loading, warningMessage, errorMessage, disabled, ...props}: ICheckBoxFormikProps) {
    const [field, meta, helpers] = useField(props.name)
    const { isSubmitting } = useFormikContext()
    const formikHelper = useFormikFieldHelper(props.name)

    return (
        <CheckBox
            {...props}
            success={formikHelper.success || success}
            loading={formikHelper.loading || loading}
            warningMessage={formikHelper.warning || warningMessage}
            errorMessage={meta.error || errorMessage}
            disabled={isSubmitting || disabled}
            value={field.value}
            onChange={(e, checked) => {
                helpers.setValue(checked)
                if (props.onChange) props.onChange(e, checked)
            }}
        />
    )
}
