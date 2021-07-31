import classnames from 'classnames';
import IFormProps from 'interfaces/IFormProps';
import ITooltipProps from 'interfaces/ITooltipProps';
import { ReactNode, useEffect, useState } from 'react';
import style from './ColorPicker.module.scss';


export interface IColorPickerProps extends IFormProps, ITooltipProps{
    value: string,
    onChange: (Event: any) => void,
    colorPickerProps: IColorPickerProps,
    label:string | ReactNode,
    id: string,
    classes: string[],
    className?: string[]
}



export default function ColorPickerComponent(props: IColorPickerProps){
    const colors = ["#A0D7E7", "#A5CEA1", "#FFCE73", "#FF9A7B", "#FFA2C0"];
    const [isClicked, setIsClicked] = useState(false);
    const [selectedColor, setSelectedColor] = useState("#E4E4E4");
  


   

    const { value, onChange, colorPickerProps, label, id, classes, className }  = props


    useEffect(() => {

        console.log('colore cambiato')
        if(props && props.onChange){

 
        props.onChange(selectedColor)
    }

   }, [selectedColor]);

    return <div style={{ position: "relative", marginTop: "28px" , zIndex: 9999 }}>
    <div style={{ position: "absolute",  }}>

        <div onClick={() => setIsClicked(true)} style={{ backgroundColor: selectedColor ? selectedColor : "#E4E4E4" }} className={classnames(style.picker, "picker", style.pickerElementFirst)}>

        </div>
        {colors.map((c, i) => {
            return (
                <>
                    <div className={!isClicked ? "hide" : "show"}>
                        
                            <div className="picker picker__container">
                                <div onClick={() => setSelectedColor(c)} style={{ backgroundColor: c }} className={"picker__container__element"}>

                                </div>
                            </div>
                       
                    </div>

                </>
            );
        })}

    </div>
</div>
}