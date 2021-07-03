import { DialogTitle, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import Button from 'components/buttons/Button'
import './YesNoModal.scss'

export default function YesNoModal(props){

    let  { open, onClose, onSuccess, title, content, payload, closeLabel, okLabel } = props

    const onSuccessInternal = (event) =>{
        onClose && onClose()
        onSuccess && onSuccess(event, payload)
    }

    return <Dialog
        open={open || false}
        onClose={onClose}
    >
            <DialogTitle className="title-modal">{title || "Sei sicuro?"}</DialogTitle>
            {content &&<DialogContent>
                    {content}
            </DialogContent>}
            <DialogActions>
                <Button variant='outlined' color='primary' onClick={onClose}>{closeLabel || "Annulla"}</Button>
                <Button type='submit' color='primary' variant='contained' onClick={onSuccessInternal}>{okLabel || "Conferma"}</Button>
            </DialogActions>
    </Dialog>

}