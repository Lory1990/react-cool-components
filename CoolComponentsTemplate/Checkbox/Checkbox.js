import './Checkbox.scss'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Tooltip from '@material-ui/core/Tooltip'
import classnames from  'classnames'
import {ReactComponent as InfoBox} from  'assets/img/info-box.svg'
import _ from 'lodash'

export default function  CheckboxComponent({onChange, id, disabled, label, name, value, className, tooltip}){

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
            {tooltip && <Tooltip title={tooltip}><InfoBox className='info-box' /></Tooltip>}
        </>}
        />
    )
}