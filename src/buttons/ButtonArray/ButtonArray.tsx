import classnames from 'classnames'
import _ from 'lodash'
import { MouseEvent } from 'react'
import Button from '../Button'
import style from './ButtonArray.module.scss'

export interface IButtonData{
    id: string,
    label: string,
}

export interface IButtonArrayProps{
    selected: string | string[] | (( button : IButtonData ) => boolean);
    setSelected: (button: IButtonData, isSelected: boolean, event : MouseEvent<HTMLButtonElement, any>) => void
    buttons:IButtonData[]
}

export function ButtonArray({ selected, setSelected, buttons }: IButtonArrayProps){

    const setSelectedButton = (button: IButtonData, isSelected: boolean) => (event : MouseEvent<HTMLButtonElement, any>) =>{
        setSelected?.(button, !isSelected, event)
    }

    const checkSelection = (button : IButtonData) => {
        if(!button || !selected) return false
        if(Array.isArray(selected)){
            return selected.includes(button.id)
        }else if(typeof selected === 'string'){
            return selected === button.id
        }else{
            return selected(button)
        }
    }

    return <div className={classnames(style.buttonArray, 'button-array')}>
        {_.map(buttons,(button, index)=>{
            const isSelected = checkSelection(button)
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