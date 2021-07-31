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
    selected: string | string[] | ((button: IButtonData) => boolean)
    disabledButton: string | string[] | ((button: IButtonData) => boolean)
    setSelected: (button: IButtonData, isSelected: boolean, event: MouseEvent<HTMLButtonElement, any>) => void
    buttons: IButtonData[]
}

export function ButtonArray({ selected, setSelected, buttons, disabled, disabledButton }: IButtonArrayProps) {
    const setSelectedButton = (button: IButtonData, isSelected: boolean) => (event: MouseEvent<HTMLButtonElement, any>) => {
        setSelected?.(button, !isSelected, event)
    }

    const checkSelection = (button: IButtonData): boolean => {
        if (!button || !selected) return false
        if (Array.isArray(selected)) {
            return selected.includes(button.id)
        } else if (typeof selected === "string") {
            return selected === button.id
        } else {
            return selected(button)
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
                        onClick={setSelectedButton(button, isSelected)}
                    >
                        {button.label}
                    </Button>
                )
            })}
        </div>
    )
}

export default ButtonArray
