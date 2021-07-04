export default interface IFormProps{
    /**
     * Component label
     */
    label?: string,
    /**
     * Error message
     * 
     * @default undefined
     */
    error?: string,
    /**
     * Warning message
     * 
     * @default undefined
     */
    warning?: string,
    /**
     * If is success or not
     * 
     * @default false
     */
    success?: boolean,
    /**
     * If is loading or not
     * 
     * @default false
     */
    loading?: boolean,
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
}