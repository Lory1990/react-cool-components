import { FormHelperText, TextField, TextFieldProps } from '@material-ui/core'
import classnames from 'classnames'
import _ from 'lodash'
import ITooltipProps from 'interfaces/ITooltipProps'
import IFormProps from 'interfaces/IFormProps'
import style from './TextInput.module.scss'

export type ITextInputProps  = IFormProps & TextFieldProps & ITooltipProps & {
    /** Label max length */
    maxLength?: number,
    /** Function to parse text on change Text */
    parseTransform?: (input : string) => string,
    /** Function to parse text rendering Text */
    renderTransform?: (input : string) => string,
    min?: number,
    max?: number,
    step?:number,
}


export const TextInputComponent : React.FC<ITextInputProps> = (props : ITextInputProps) => {

    const { parseTransform, maxLength, className, value, onChange, label, error, min, max, step, ...rest } = props

    const onChangeInt = (event : React.ChangeEvent<HTMLInputElement>) =>{
        if(maxLength && _.size(event.target.value) > maxLength) return
        if(parseTransform){
            event.target.value = parseTransform(event.target.value)
        }
        onChange && onChange(event)
    }

    return <div className={classnames('text-field',style.textField, className)}>
            <TextField 
                value={value || ""}
                label={label}
                onChange={onChangeInt}
                variant='outlined'
                error={error}
                inputProps={{ min, max, step }}
                {...rest}
            />
        {error && <FormHelperText className='error-text'>{error}</FormHelperText>}
    </div>
}

export default TextInputComponent