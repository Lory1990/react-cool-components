import classnames from 'classnames'
import Button from '../Button/Button'
import _ from 'lodash'
import './ButtonArray.scss'
import { ReactNode } from 'react'


export interface IButtonArray{
    button: ReactNode,
    isSelected: boolean,
    selected: {};
    setSelected: 
    buttons:ReactNode[]
}

export default function ButtonArray(props: IButtonArray){

    const { selected, setSelected, buttons } = props

    const setSelectedButton = (button: ReactNode, isSelected: boolean) => (event:React.FormEvent<HTMLInputElement>) =>{
        setSelected && setSelected(button, !isSelected, event)
    }

    return <div className='button-array'>
        {_.map(buttons,(button, index)=>{
            const isSelected = selected && selected.includes(button.id)
            return <Button 
                key={index}
                className={classnames('button-array-item', {isSelected})}
                onClick={setSelectedButton(button, isSelected)}
            >
                {button.label}
                </Button>
        })}
    </div>


}