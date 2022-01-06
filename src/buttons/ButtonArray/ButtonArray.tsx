import classnames from "classnames"
import IFormProps from "interfaces/IFormProps"
import _ from "lodash"
import { MouseEvent } from "react"
import Button from "../Button"
import style from "./ButtonArray.module.scss"

export interface IButtonData {
    id: string
    label: string
}

export interface IButtonArrayProps extends IFormProps {
    value?: string | string[] | ((button: IButtonData) => boolean)
    onChange?: (button: IButtonData, isSelected: boolean, event: MouseEvent<HTMLButtonElement, any>) => void
    disabledButton?: string | string[] | ((button: IButtonData) => boolean)
    buttons: IButtonData[]
}

export function ButtonArray({ value, onChange, buttons, disabled, disabledButton }: IButtonArrayProps) {
    const onClickOnButton = (button: IButtonData, isSelected: boolean) => (event: MouseEvent<HTMLButtonElement, any>) => {
        onChange?.(button, !isSelected, event)
    }

    const checkSelection = (button: IButtonData): boolean => {
        if (!button || !value) return false
        if (Array.isArray(value)) {
            return value.includes(button.id)
        } else if (typeof value === "string") {
            return value === button.id
        } else {
            return value(button)
        }
    }

    const checkDisabled = (button: IButtonData): boolean => {
        if (!button || !disabledButton) return false
        if (Array.isArray(disabledButton)) {
            return disabledButton.includes(button.id)
        } else if (typeof disabledButton === "string") {
            return disabledButton === button.id
        } else {
            return disabledButton(button)
        }
    }

    return (
        <div className={classnames(style.buttonArray, "button-array", { [style.disabled + " disabled"]: disabled })}>
            {_.map(buttons, (button, index) => {
                const isSelected = checkSelection(button)
                const isDisabled = checkDisabled(button)
                return (
                    <Button
                        key={index}
                        disabled={disabled || isDisabled}
                        className={classnames("button-array-item", style.buttonArrayItem, { [style.selected + " selected"]: isSelected })}
                        onClick={onClickOnButton(button, isSelected)}
                    >
                        {button.label}
                    </Button>
                )
            })}
        </div>
    )
}

export default ButtonArray
