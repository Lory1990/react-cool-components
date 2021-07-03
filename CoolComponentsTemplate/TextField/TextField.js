import { FormHelperText, TextField } from '@material-ui/core'
import classnames from 'classnames'
import _ from 'lodash'
import './TextField.scss'

export default function TextFieldComponent(props){

    const { textTransform, maxLength, className, value, onChange, label, error, min, max, step, skin, ...rest } = props

    const onChangeInt = (event) =>{
        if(maxLength && _.size(event.target.value) > maxLength) return
        if(textTransform){
            event.target.value = textTransform(event.target.value)
        }
        onChange && onChange(event)
    }

    return <div className={classnames('text-field', className, {grey: skin==="GREY"})}>
        {label && <label>{label}</label>}
            <TextField 
                value={value || ""}
                onChange={onChangeInt}
                variant='outlined'
                error={error}
                InpinputProps={{ min, max, step }}
                {...rest}
            />
        {error && <FormHelperText className='error-text'>{error}</FormHelperText>}
    </div>
}