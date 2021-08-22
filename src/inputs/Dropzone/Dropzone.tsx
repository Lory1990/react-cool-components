import { useState } from 'react'
import { FormHelperText} from '@material-ui/core'
import {useDropzone} from 'react-dropzone'
import useFetcher from 'hooks/useFetcher'
import { useFormikContext }  from 'formik'
import RoundLoader from 'components/RoundLoader/RoundLoader'
import style from './Dropzone.module.scss'
import _ from 'lodash'

export default function DropzoneFiles(props) {

    const { values, errors, setFieldValue } = useFormikContext()
    const [loading, setLoading] = useState()
    //const [progress, setProgress] = useState()
    const fetcher = useFetcher()

    const onDeleteFile = fileId =>async  event => {
        event.stopPropagation()

        const { endpointDelete = '/invoice/:fileId',  actionDelete = "DELETE"} = props

        if(props.onDeleteFile){
            await props.onDeleteFile(fileId)
            return
        }

        await fetcher.fetch({
            method: actionDelete,  
            url: endpointDelete,
            urlParams:{
                fileId
            }
        })

        // TODO Settare nuovi valori
    }

    const onOpenFile = fileId => async event => {
        event.stopPropagation()

        const { endpointDelete = '/invoice/:fileId',  actionDelete = "GET"} = props

        if(props.onOpenFile){
            await props.onOpenFile(fileId)
            return
        }

        await fetcher.fetch({
            method: actionDelete,  
            url: endpointDelete,
            urlParams:{
                fileId
            }
        })

    }

    const onDrop = async acceptedFiles  =>{
        // console.log(acceptedFiles)
        try{
            setLoading(true)

            if(props.onDrop){
                await props.onDrop(acceptedFiles)
                return 
            }

            let promise = new Promise((resolve,reject)=>{
                let reader = new FileReader();
                let file = acceptedFiles[0];
                
        
                reader.onloadend = () => {
                    setFieldValue(props.name, {
                        result: reader.result,
                        data: acceptedFiles[0]
                    })
                    resolve()
                }
                
                reader.readAsDataURL(file)
            })

            await promise

            // for(let i = 0; i<acceptedFiles.length; i++){
            //     await uploadSingleFile(acceptedFiles[i])
            // }
            props.onUploadComplete && props.onUploadComplete()

        }catch(e){
            console.error(e)
            alert("Non siamo riusciti a caricare il file, riprova!")
        }finally{
            setLoading(false)
        }
    }

    // const uploadSingleFile = async singleFile =>{
    //     if(!singleFile) return;

    //     try{

    //         const { onUploadProgress, endpoint = '/invoice/add', name, action = "POST", attachmentType} = props

    //         const formData = new FormData();
    //         formData.append("file", singleFile, singleFile.name);
            
            
    //         let data = await fetcher.fetch({
    //             method: action,  
    //             data: formData,
    //             url: endpoint,
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             },
    //             query:{
    //                 attachmentType
    //             },
    //             onUploadProgress: progressEvent => {                        
    //                 setProgress(parseInt(progressEvent.loaded*100/progressEvent.total, 10))
    //                 onUploadProgress && onUploadProgress(progressEvent)
    //             },
    //         })
    //     }catch(e){
    //         alert("Non siamo riusciti a caricare il file, riprova!")
    //     }
    // }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    let error = _.get(errors, props.name)

    return   <div className='dropzone'>
                <div {...getRootProps()} className='drop-area'>
                <input {...getInputProps()} />
                {
                    loading ? 
                        <RoundLoader />
                        :
                        <> {isDragActive ? <p>Lasca il tuo file qui</p> : <p>Trascina gli allegati qui oppure clicca per aggiungere files</p> }</>
                }
            </div>
            {error && <FormHelperText className='error-text'>{error}</FormHelperText>}
        </div>
}