import { DialogTitle, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import { Formik, Form } from "formik";
import useClientsClient from 'clients/useClientsClient'
import Button from 'components/buttons/Button'
import TextField from 'components/inputs/TextField'
import Autocomplete from 'components/inputs/Autocomplete'
import ColorPicker from 'components/inputs/ColorPicker'
import useClientTypeClient from 'clients/useClientTypeClient'
import RoundLoader from "components/RoundLoader/RoundLoader";
import './EditContactModal.scss'


export default function EditContactModal({ open, onClose, contact, onSuccess }) {

    const customerClient = useClientsClient()
    const clientTypeClient = useClientTypeClient()

    const onDialogOpen = () => {
        clientTypeClient.getAll()
    }

    const onSubmit = async (values, formikBag) => {
        try {
            await customerClient.update(contact.id, values)
            onClose && onClose()
            onSuccess && onSuccess()
        } catch (e) {
            console.error(e)
        } finally {
            formikBag.setSubmitting(false)
        }
    }

    return <Formik
        initialValues={contact || {}}
        enableReinitialize={true}
        onSubmit={onSubmit}
    >
        {formikBag => {
            let isLoading = clientTypeClient.listFetcher.loading
            return <Dialog
                open={open}
                onClose={isLoading ? undefined : onClose}
                onEntering={onDialogOpen}
            >
                <Form className='edit-contact-form'>
                    <DialogTitle>Modifica cliente</DialogTitle>
                    <div className='subtitle'>Queste informazioni verranno aggiornate per tutte le lavorazioni future con tale cliente.</div>
                    {isLoading ?
                        <DialogContent>
                            <RoundLoader />
                        </DialogContent>
                        :
                        <>
                            <DialogContent>
                                <TextField
                                    name='name'
                                    label='Nome e cognome o ragione sociale'
                                    palceholder='Nome e cognome o ragione sociale'
                                />
                                <div className='row'>
                                    <Autocomplete
                                        label='Settore'
                                        placeholder="Settore"
                                        className='sector'
                                        name='idTypeClient'
                                        values={clientTypeClient.listFetcher.data}
                                        getOptionLabel={option => {
                                            return option.name
                                        }}
                                    />
                                    {/* 
                                    <ColorPicker
                                        className='color'
                                        name='color'
                                        label='Colore'
                                    />
                                    */}
                                </div>
                                <TextField
                                    className='debitorEmail'
                                    name='email'
                                    label='Indirizzo e-mail del cliente'
                                    placeholder='Indirizzo e-mail'
                                />
                                <TextField
                                    className='debitorTelephone'
                                    name='phone'
                                    placeholder='Telefono'
                                    label='Numero del telefono del cliente'
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button variant='outlined' color='primary' onClick={onClose}>Annulla</Button>
                                <Button type='submit' color='primary' variant='contained'>Conferma modifica</Button>
                            </DialogActions>
                        </>
                    }

                </Form>
            </Dialog>
        }}

    </Formik>

}