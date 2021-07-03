import { ColorPicker } from 'material-ui-color';
import classnames from 'classnames'
import './ColorPicker.scss'
import { useEffect, useState } from 'react';
import { useClickOutside } from 'react-click-outside-hook'

export default function ColorPickerComponent(props){
    const colors = ["#A0D7E7", "#A5CEA1", "#FFCE73", "#FF9A7B", "#FFA2C0"];
    const [isClicked, setIsClicked] = useState(false);
    const [selectedColor, setSelectedColor] = useState("#E4E4E4");
    const [ref, hasClickedOutside] = useClickOutside()


   

    const { value, onChange, colorPickerProps, label, id, classes, className }  = props


    useEffect(() => {

        console.log('colore cambiato')
        if(props && props.onChange){

 
        props.onChange(selectedColor)
    }

   }, [selectedColor]);

    return <div ref={ref} style={{ position: "relative", marginTop: "28px" , zIndex: "9999" }}>
    <div style={{ position: "absolute",  }}>

        <div onClick={() => setIsClicked(true)} style={{ backgroundColor: selectedColor ? selectedColor : "#E4E4E4" }} className="picker picker__element__first">

        </div>
        {colors.map((c, i) => {
            return (
                <>
                    <div className={!isClicked ? "hide" : "show"}>
                        <div className={hasClickedOutside ? "hide" : "show--" + i} >
                            <div className="picker picker__container">
                                <div onClick={() => setSelectedColor(c)} style={{ backgroundColor: c }} className={"picker__container__element"}>

                                </div>
                            </div>
                        </div>
                    </div>

                </>
            );
        })}

    </div>
</div>
}