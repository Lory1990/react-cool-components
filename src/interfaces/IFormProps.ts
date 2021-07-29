import React, { ReactNode } from "react"

export default interface IFormProps {
    /**
     *
     */
    name?: string
    /**
     * Component label
     */
    label?: string | ReactNode
    /**
     * Error message
     *
     * @default undefined
     */
    errorMessage?: string
    /**
     * Warning message
     *
     * @default undefined
     */
    warningMessage?: string
    /**
     * If is success or not
     *
     * @default false
     */
    success?: boolean
    /**
     * If is loading or not
     *
     * @default false
     */
    loading?: boolean
    /**
     * Set to `false` to hide any warning message
     *
     * @default true
     */
    showWarningMessage?: boolean
    /**
     * Set to `false` to hide any error message
     *
     * @default true
     */
    showErrorMessage?: boolean
    /**
     * Set to true to enable read only mode
     *
     */
    readOnly?: boolean
    disabled?: boolean
}
