import { InputAdornment } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select, { SelectProps } from '@material-ui/core/Select'
import IFormProps from 'interfaces/IFormProps'
import ITooltipProps from 'interfaces/ITooltipProps'
import _ from 'lodash'
import InputFieldWrapper from 'ui/InputFieldWrapper/InputFieldWrapper'
import style from './Select.module.scss'


export interface ISelectComponentProps extends IFormProps, ITooltipProps, SelectProps{
    value?:string,
    values?: Record<string, unknown>[]
    textValue?:string | ((textValue: Record<string, unknown>) => string),
    keyValue?:string | ((textValue: Record<string, unknown>) => string),
    disabledValue?: string | ((textValue: Record<string, unknown>) => boolean),
    onChange?: (event: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode ) => void,
    filter?: ((value: Record<string, unknown>, index: number) => boolean),
    renderSingle?: ((value: Record<string, unknown>, index: number, realValue: string, realKey: string) => React.ReactNode),
   
}

export function SelectComponent(props : ISelectComponentProps){

    // Estrae il value - testo
    const extractValue = (value: Record<string, unknown>) : string => {
        if(!value) return "";
        const {textValue} = props
        if(!textValue){
            if(typeof value === 'string'){
                return value
            }else{
                return _.get(value, "value") + ""
            }
        }else if(typeof textValue === 'function'){
            return textValue(value)
        }else if(typeof textValue === 'string'){
            return value[textValue] + ""
        }else{
            if(typeof value === 'string'){
                return value
            }else{
                return value.value + ""
            }
        }
    }

    const extractKey = (value: Record<string, unknown>) : string | undefined => {
        if(!value) return undefined;
        const {keyValue} = props
        if(!keyValue){
            if(typeof value === 'string'){
                return value
            }else{
                return value.key + ""
            }
        }else if(typeof keyValue === 'function'){
            return keyValue(value)
        }else if(typeof keyValue === 'string'){
            return value[keyValue] + ""
        }else{
            if(typeof value === 'string'){
                return value
            }else{
                return value.key + ""
            }
        }
    }

    const isDisabled = (value: Record<string, unknown>) : boolean =>{
        if(!value) return true;
        const {disabledValue} = props
        if(!disabledValue){
            return Boolean(value.disabled)
        }else if(typeof disabledValue === 'function'){
            return disabledValue(value)
        }else if(typeof disabledValue === 'string'){
            return Boolean(value[disabledValue])
        }else{
            return Boolean(value.disabled)
        }
    }

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode) =>{
        props.onChange?.(event, child)
    }

    const { prefix, showErrorMessage,placeholder, id, label, disabled, className, error, name, value, values, filter } = props
    return (<InputFieldWrapper {...props} styleClassName={style.select} componentClassName='select'>
            {label && <label htmlFor={id} className={'label'}>{label}</label>}
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
                {Array.isArray(values) && values.map((value, index)=>{
                    if(filter && !filter(value, index) )  return null;
                    const realValue = extractValue(value)
                    const realKey   = extractKey(value)
                    if(!realKey) return 
                    const disabled   = isDisabled(value)
                    if(props.renderSingle) return props.renderSingle(value, index, realValue, realKey)
                    else return <MenuItem value={realKey} key={index} disabled={disabled}>{realValue}</MenuItem>
                })}                            
            </Select>
            </InputFieldWrapper>
    )
}

export default SelectComponent