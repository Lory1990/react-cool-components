import classnames from 'classnames'
import IFormProps from 'interfaces/IFormProps'
import ErrorAndWarningHelperText from 'ui/ErrorAndWarningHelperText/ErrorAndWarningHelperText'

export interface IInputFieldWrapperProps extends IFormProps{
    className?: string,
    componentClassName?: string,
    styleClassName?: string,
    children: any
}

export function InputFieldWrapper(props : IInputFieldWrapperProps){

    const { styleClassName, children, errorMessage, warningMessage, className, componentClassName, readOnly} = props

    return <div className={classnames('form-component', className, styleClassName, componentClassName, {warning: warningMessage, error: errorMessage, readOnly})}>
        {children}
        <ErrorAndWarningHelperText {...props} />
    </div>
}

export default InputFieldWrapper