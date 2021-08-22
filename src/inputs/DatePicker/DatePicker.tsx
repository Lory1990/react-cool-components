import classnames from "classnames"
import style from "./DatePicker.module.scss"
import { KeyboardDatePicker } from "@material-ui/pickers"
import IFormProps from "interfaces/IFormProps"
import ITooltipProps from "interfaces/ITooltipProps"
import { WithKeyboardInputProps } from "@material-ui/pickers/Picker/makePickerWithState"
import { DatePickerViewsProps } from "@material-ui/pickers"

export interface IDatePickerProps extends IFormProps, ITooltipProps, WithKeyboardInputProps, DatePickerViewsProps {}

export const DatePicker: React.FC<IDatePickerProps> = (props: IDatePickerProps) => {
    const { className, value, onChange, label, error, maskChar = "__/__/____", mask = "__/__/____", ...rest } = props

    ////console.log("DatePickerComponent", value)
    return (
        <div className={classnames("date-picker", className, style.datePicker)}>
            {label && <label>{label}</label>}
            <KeyboardDatePicker
                value={value || null}
                autoOk
                invalidDateMessage=""
                onChange={onChange}
                error={error}
                helperText={error}
                mask={mask}
                maskChar={maskChar}
                format="DD/MM/yyyy"
                inputVariant="outlined"
                {...rest}
            />
        </div>
    )
}

export default DatePicker
