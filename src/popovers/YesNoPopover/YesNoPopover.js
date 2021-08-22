import { DialogTitle, Popover, DialogActions, DialogContent } from "@material-ui/core";
import Button from 'components/buttons/Button'
import './YesNoPopover.scss'

export default function YesNoPopover(props){

    let  { showCancel = true, showTitle = true, open, onClose, onSuccess, title, content, payload, closeLabel, okLabel, anchorEl, 
        anchorOrigin = { vertical: 'bottom', horizontal: 'right',}, transformOrigin= {vertical: 'top', horizontal: 'right',} } = props

    const onSuccessInternal = (event) =>{
        onClose && onClose()
        onSuccess && onSuccess(event, payload)
    }

    return <Popover
        anchorOrigin={anchorOrigin}
        className='yes-no-popover'
        transformOrigin={transformOrigin}
        open={open || false}
        anchorEl={anchorEl}
        onClose={onClose}
    >
            {showTitle && <div className='title'>{title || "Sei sicuro?"}</div>}
            {content &&<div className='content'>
                    {content}
            </div>}
            <div className='actions'>
                {showCancel && <Button variant='outlined' color='primary' onClick={onClose}>{closeLabel || "Annulla"}</Button>}
                <Button color='primary' variant='contained' onClick={onSuccessInternal}>{okLabel || "Conferma"}</Button>
            </div>
    </Popover>

}