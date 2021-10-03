import { FormHelperText } from "@material-ui/core"
import IFormProps from "interfaces/IFormProps"
import _ from "lodash"
import RoundLoader from "other/RoundLoader"
import { useState } from "react"
import { DropEvent, FileRejection, useDropzone } from "react-dropzone"
import ErrorAndWarningHelperText from "ui/ErrorAndWarningHelperText/ErrorAndWarningHelperText"

export interface IFileData {
    name: string
    id: string
    type: string
}

export interface IDropzoneProps extends IFormProps {
    onDrop?: (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => Promise<void>
    onLoadEnd?: (result: any, acceptedFile: File) => Promise<void>
    onUploadFile?: (acceptedFile: File) => Promise<void>
    onDelete?: (file: IFileData) => void
    onOpen?: (file: IFileData) => void
    files?: IFileData[]
}

export function Dropzone(props: IDropzoneProps) {
    const [loading, setLoading] = useState<boolean>()
    const [internalError, setInternalError] = useState<string>()

    //const [progress, setProgress] = useState()
    // const { values, errors, setFieldValue } = useFormikContext()

    // const fetcher = useFetcher()

    // const onDeleteFile = fileId =>async  event => {
    //     event.stopPropagation()

    //     const { endpointDelete = '/invoice/:fileId',  actionDelete = "DELETE"} = props

    //     if(props.onDeleteFile){
    //         await props.onDeleteFile(fileId)
    //         return
    //     }

    //     await fetcher.fetch({
    //         method: actionDelete,
    //         url: endpointDelete,
    //         urlParams:{
    //             fileId
    //         }
    //     })

    //     // TODO Settare nuovi valori
    // }

    // const onOpen = fileId => async event => {
    //     event.stopPropagation()

    //     const { endpointDelete = '/invoice/:fileId',  actionDelete = "GET"} = props

    //     if(props.onOpenFile){
    //         await props.onOpenFile(fileId)
    //         return
    //     }

    //     await fetcher.fetch({
    //         method: actionDelete,
    //         url: endpointDelete,
    //         urlParams:{
    //             fileId
    //         }
    //     })

    // }

    const onDrop = async (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
        try {
            setInternalError(undefined)
            setLoading(true)

            if (props.onDrop) {
                await props.onDrop(acceptedFiles, fileRejections, event)
                return
            }

            for (let file of acceptedFiles) {
                if (props.onLoadEnd) {
                    await onLoadFile(file)
                } else if (props.onUploadFile) {
                    await props.onUploadFile(file)
                }
            }
        } catch (e: any) {
            console.error(e)
            setInternalError(e.message)
        } finally {
            setLoading(false)
        }
    }

    const onLoadFile = async (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.onloadend = async () => {
                if (props.onLoadEnd) {
                    await props.onLoadEnd(reader.result, file)
                }

                resolve(reader.result)
            }

            reader.readAsDataURL(file)
        })
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const error = props.errorMessage || internalError

    return (
        <div className="dropzone">
            <div {...getRootProps()} className="drop-area">
                <input {...getInputProps()} />
                {loading ? <RoundLoader /> : <> {isDragActive ? <p>Lasca il tuo file qui</p> : <p>Trascina gli allegati qui oppure clicca per aggiungere files</p>}</>}
            </div>
            <ErrorAndWarningHelperText errorMessage={error} warningMessage={props.warningMessage} />
        </div>
    )
}

export default Dropzone
