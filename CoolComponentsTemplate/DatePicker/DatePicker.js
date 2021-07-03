import classnames from 'classnames'
import './DatePicker.scss'
import { KeyboardDatePicker } from "@material-ui/pickers";

export default function DatePickerComponent(props){

    const { className, value, onChange, label, error, ...rest } = props

    ////console.log("DatePickerComponent", value)
    return <div className={classnames('date-picker', className)}>
        {label && <label>{label}</label>}
            <KeyboardDatePicker 
                value={value || null}
                autoOk
                invalidDateMessage=""
                onChange={onChange}
                error={error}
                helperText={error}
                mask={"__/__/____"}
                maskChar={"__/__/____"}
                format="DD/MM/yyyy"
                inputVariant='outlined'
                {...rest}
            />
    </div>
}