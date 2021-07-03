import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import classnames from 'classnames';
import IFormProps from '../../interfaces/IFormProps';
import ITooltipProps from '../../interfaces/ITooltipProps';
import style from './CheckBox.module.scss';

export interface ICheckBoxProps extends CheckboxProps, IFormProps, ITooltipProps{
    label?: string,
}

export default function  CheckboxComponent({onChange, id, disabled, label, name, value, className} : ICheckBoxProps){

    return(<FormControlLabel 
        className={classnames(style.checkbox, className, {disabled})}
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