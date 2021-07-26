import classnames from 'classnames'
import _ from 'lodash'
import Button from '../Button/Button'
import style from './ButtonArray.module.scss'

export interface IButtonData{
    id: string,
    label: string,
}

export interface IButtonArrayProps{
    selected: string[];
    setSelected: (button: IButtonData, isSelected: boolean, event:React.FormEvent<HTMLInputElement>) => void
    buttons:IButtonData[]
}

export function ButtonArray(props: IButtonArrayProps){

    const { selected, setSelected, buttons } = props

    const setSelectedButton = (button: IButtonData, isSelected: boolean) => (event:React.FormEvent<HTMLInputElement>) =>{
        setSelected?.(button, !isSelected, event)
    }

    return <div className={classnames(style.buttonArray, 'button-array')}>
        {_.map(buttons,(button, index)=>{
            const isSelected = selected && selected.includes(button.id)
            return <Button 
                key={index}
                className={classnames('button-array-item',style.buttonArrayItem, {isSelected: style.isSelected})}
                onClick={setSelectedButton(button, isSelected)}
            >
                {button.label}
                </Button>
        })}
    </div>


}

export default ButtonArray