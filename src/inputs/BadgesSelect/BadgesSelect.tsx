import { InputAdornment, TextField } from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import _ from 'lodash'
import style from './BadgesSelect.module.scss'
import Popper from "@material-ui/core/Popper";
import Button from '@buttons/Button';

//https://material-ui.com/components/autocomplete/#autocomplete

export interface IBadgesSelectProps{

}

export default function BadgesSelect(props : IBadgesSelectProps) {

    // let { id, label, classes, disabled, value, onChange, values, autocompleteProps, placeholder, prefix } = props

    // const removeData = valueToRemove =>event => {
    //     props.onChange && props.onChange(event, _.filter(value, v=>v.id !== valueToRemove.id), "click-on-button")
    // }


    // const PopperMy = function (props) {
    //     return <Popper {...props} placement="bottom-start" />;
    // };

    // //if(!values) return <></>
    // //console.log("badges-select", label || props.name, values, value)
    // return <div className='badges-select'>
    //     {label && <label htmlFor={id} className={'label ' + classes?.label}>{label}</label>}
    //     <Autocomplete
    //         multiple
    //         className='autocomplete'
    //         id={id}
    //         disabled={disabled}
    //         PopperComponent={PopperMy}
    //         options={values || []}
    //         value={value}
    //         getOptionLabel={(option) =>option.name || ""}
    //         filterSelectedOptions
    //         onChange={onChange}
    //         renderInput={(params) => (
    //             <TextField
    //                 {...params}
    //                 placeholder={placeholder}
    //                 InputProps={{
    //                     ...params?.InputProps,
    //                     disableUnderline:true,
    //                     startAdornment: prefix ? (
    //                       <InputAdornment position="start">
    //                             {prefix}
    //                             {params?.InputProps.startAdornment}
    //                       </InputAdornment>
    //                     ) : params?.InputProps.startAdornment,
    //                   }}
    //             />
    //         )}
    //         {...autocompleteProps}
    //     />
    //     {!_.isEmpty(value) &&
    //         <div className='badges'>
    //         {_.map(value, (value,id)=>{
    //             return <Button key={id} variant='contained' color='primary' onClick={removeData(value)}>
    //                 {value.name}
    //             </Button>
    //         })}
    //         </div>
    //     }
    // </div>

    return <div>wip </div>
}