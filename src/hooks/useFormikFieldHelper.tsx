import { useFormikContext } from "formik"
import _ from "lodash"
import { useMemo } from "react"
export interface FormHelperProps {
    returnUrl?: string
}

export default function useFormikFieldHelper<A>(name: string) {
    const formikContext = useFormikContext<A>()

    const loading = useMemo(() => {
        return _.get(formikContext.values, `loading.${name}`, false)
    }, [formikContext.values, name])

    const warning = useMemo(() => {
        return _.get(formikContext.values, `warning.${name}`, false)
    }, [formikContext.values, name])

    const success = useMemo(() => {
        return _.get(formikContext.values, `success.${name}`, false)
    }, [formikContext.values, name])

    return {
        loading,
        warning,
        success
    }
}
