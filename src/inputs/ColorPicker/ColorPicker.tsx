import classnames from "classnames"
import IFormProps from "interfaces/IFormProps"
import ITooltipProps from "interfaces/ITooltipProps"
import { ReactNode, useState } from "react"
import style from "./ColorPicker.module.scss"
import { GithubPicker } from "react-color"

export interface IColorPickerProps extends IFormProps, ITooltipProps {
    value?: string
    onChange?: (Event: any) => void
    label?: string | ReactNode
    id?: string
    colors?: string[]
    classes?: string[]
    className?: string[]
}

export const ColorPickerComponent: React.FC<IColorPickerProps> = props => {
    const [isClicked, setIsClicked] = useState(false)
    const [selectedColor, setSelectedColor] = useState("#E4E4E4")

    const { value, onChange, label, id, classes, className, colors } = props

    if (!colors) return <></>

    return <GithubPicker />
}

export default ColorPickerComponent
