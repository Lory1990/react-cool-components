import React from "react"
import Button, { IStandardButtonProps } from "../Button/Button"
import style from "./CircleButton.module.scss"
import classnames from "classnames"

export interface ICircleButtonProps extends IStandardButtonProps {}

export const CircleButton: React.FC<ICircleButtonProps> = (props: ICircleButtonProps) => {
    const { children, className, ...rest } = props

    return (
        <Button {...rest} className={classnames("circle-button", style.circleButton, className)}>
            {children}
        </Button>
    )
}

export default CircleButton
