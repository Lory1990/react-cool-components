import classnames from 'classnames'
import Button from '../Button'
import _ from 'lodash'
import './ButtonArray.scss'

export default function ButtonArray(props){

    const { selected, setSelected, buttons } = props

    const setSelectedButton = (button,isSelected) => event =>{
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