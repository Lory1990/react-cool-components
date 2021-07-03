import './CheckBox.module.scss'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Tooltip from '@material-ui/core/Tooltip'
import classnames from  'classnames'
import _ from 'lodash';

export interface ICheckBoxProps{
    color: string,
    onChange?:(event: any) => void,
    id?: string,
    disabled:boolean | undefined,
    label: string,
    name: string,
    value: string,
    className: string,
    tooltip: string
}

export default function  CheckboxComponent({onChange, id, disabled, label, name, value, className, tooltip} : ICheckBoxProps){

    return(<FormControlLabel 
        className={classnames('checkbox',className, {disabled})}
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