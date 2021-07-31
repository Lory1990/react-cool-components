import * as React from 'react';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import classnames from 'classnames';
import IFormProps from '../../interfaces/IFormProps';
import ITooltipProps from '../../interfaces/ITooltipProps';
// import style from './CheckBox.module.scss';

export interface ICheckBoxProps extends IFormProps, ITooltipProps, CheckboxProps{
    
}

export function  CheckboxComponent({onChange, id, disabled, label, name, value, className, errorMessage, warningMessage, readOnly, success} : ICheckBoxProps){

    const style = {} as any
    return(<FormControlLabel 
        className={classnames(style.checkbox, className, {disabled, errorMessage, warningMessage, readOnly, success})}
        control={
            <>
                <Checkbox
                checked={Boolean(value)}
                onChange={onChange}
                id={id}
                name={name}
                disabled={disabled}
                />
            </>
        }            
        disabled={disabled}
        label={<>
            {label}
        </>}
        />
    )
}

export default CheckboxComponent