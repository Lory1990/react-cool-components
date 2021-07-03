import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import { InputAdornment, TextField } from '@material-ui/core';
import classnames from 'classnames'
import MenuItem from '@material-ui/core/MenuItem'
import _ from 'lodash'
import './Select.scss'

export default function SelectComponent(props){

    // Estrae il value - testo
    const extractValue = (value) => {
        if(!value) return null;
        const {textValue} = props
        if(!textValue){
            if(typeof value === 'string'){
                return value
            }else{
                return value.value
            }
        }else if(typeof textValue === 'function'){
            return textValue(value)
        }else if(typeof textValue === 'string'){
            return value[textValue]
        }else{
            if(typeof value === 'string'){
                return value
            }else{
                return value.value
            }
        }
    }

    const extractKey = (value) => {
        if(!value) return null;
        const {keyValue} = props
        if(!keyValue){
            if(typeof value === 'string'){
                return value
            }else{
                return value.key
            }
        }else if(typeof keyValue === 'function'){
            return keyValue(value)
        }else if(typeof keyValue === 'string'){
            return value[keyValue]
        }else{
            if(typeof value === 'string'){
                return value
            }else{
                return value.key
            }
        }
    }

    const isDisabled = value =>{
        if(!value) return true;
        const {disabledValue} = props
        if(!disabledValue){
            return value.disabled
        }else if(typeof disabledValue === 'function'){
            return disabledValue(value)
        }else if(typeof disabledValue === 'string'){
            return value[disabledValue]
        }else{
            return value.disabled
        }
    }

    const handleChange = (event) =>{
        const { onChange} = props
        if(onChange) onChange(event)
    }

    const { prefix, skin, showErrorMessage,placeholder, id, classes, label, disabled, className, error, name, value, values, filter } = props
    return (<div className={classnames('select', className, {error, grey : skin==="GREY"})}>
            {label && <label htmlFor={id} className={'label ' + classes?.label}>{label}</label>}
            <Select
            
            id={id} 
            error={error}
            disabled={disabled}
            value={value ? value : ""}
            onChange={handleChange}
            inputProps={{
                name, 
                id,
                startAdornment: prefix && (
                    <InputAdornment position="start">
                          {prefix}
                    </InputAdornment>
                  ),
            }}                
            input={<OutlinedInput
                name={name}
                id={id}
            />}
            >
                {placeholder && <MenuItem value="" disabled>
                    {placeholder}
                </MenuItem>}
                {Array.isArray(values) && values.map((value,index)=>{
                    if(filter && !filter(value, index) )  return null;
                    const realValue = extractValue(value)
                    const realKey   = extractKey(value)
                    const disabled   = isDisabled(value)
                    if(props.renderSingle) return props.renderSingle(value,index, realValue, realKey)
                    else return <MenuItem value={realKey} key={index} disabled={disabled}>{realValue}</MenuItem>
                })}                            
            </Select>
            {error && <FormHelperText className='error-text'>{error}</FormHelperText>}
            </div>
    )
}