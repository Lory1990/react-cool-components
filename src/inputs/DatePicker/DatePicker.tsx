import classnames from "classnames"
import style from "./DatePicker.module.scss"
import { KeyboardDatePicker } from "@material-ui/pickers"
import IFormProps from "interfaces/IFormProps"
import ITooltipProps from "interfaces/ITooltipProps"
import { WithKeyboardInputProps } from "@material-ui/pickers/Picker/makePickerWithState"
import { DatePickerViewsProps } from "@material-ui/pickers"
import moment from 'moment'


export interface IDatePickerProps extends IFormProps, ITooltipProps, WithKeyboardInputProps, DatePickerViewsProps {}

export const DatePicker: React.FC<IDatePickerProps> = (props: IDatePickerProps) => {
    const { className, errorMessage, value,autoOk = true, inputVariant="outlined", format='dd/mm/yyyy',  maskChar = "__/__/____", mask = "__/__/____", ...rest } = props

    return (
            <KeyboardDatePicker
            className={classnames("date-picker", className, style.datePicker)}
            autoOk={autoOk}
            invalidDateMessage=""
            helperText={errorMessage}
            mask={mask}
            maskChar={maskChar}
            inputVariant={inputVariant}
            {...rest}
            value={moment()}
            format="DD/MM/yyyy"
            />
    )
}

export default DatePicker
