import { InputAdornment, TextField,FormHelperText } from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import classnames from 'classnames'
import _ from 'lodash'
import './Autocomplete.scss'

//https://material-ui.com/components/autocomplete/#autocomplete
export default function AutocompleteComponent(props) {

    let { id, label, classes, value, onChange, disabled, values, autocompleteProps, error, placeholder, prefix, multiple, className, getOptionLabel } = props

    return <div className={classnames('autocomplete', className, {error, disabled})}>
        {label && <label htmlFor={id} className={'label ' + classes?.label}>{label}</label>}
        <Autocomplete
            multiple={multiple}
            className='autocomplete'
            id={id}
            disabled={disabled}
            options={values || []}
            inputValue={props.getInputValue ? props.getInputValue() : (value?.name ||"")}
            getOptionLabel={getOptionLabel && (option=>{
                let label = ""
                if(getOptionLabel) label = getOptionLabel(option)
                return label || ""
            })}
            onChange={onChange}
            renderInput={(params) => {
                return <TextField
                    {...params}
                    placeholder={placeholder}
                    variant='outlined'
                    InputProps={{
                        ...params?.InputProps,
                        disableUnderline:true,
                        startAdornment: prefix ? (
                          <InputAdornment position="start">
                                {prefix}
                                {params?.InputProps.startAdornment}
                          </InputAdornment>
                        ) : params?.InputProps.startAdornment,
                      }}
                />
            }}
            {...autocompleteProps}
        />
        {error && <FormHelperText className='error-text'>{error}</FormHelperText>}
    </div>
}