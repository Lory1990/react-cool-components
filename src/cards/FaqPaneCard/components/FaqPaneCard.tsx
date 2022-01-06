import React from 'react'
import { ReactComponent as LeftImage } from "../assets/images/LeftImage.svg"
import style from "./FaqPane.module.scss"



export function AccordionData(Iprops:any){

    return (

        <div>
        <details className="accordion">
    
            <summary>{Iprops.details.summary}</summary>
            <p>{Iprops.details.p}</p>

        </details>
    
        </div>

    )
}





export function FaqPane(){
    return (
        <div className="main-big-container">

                {/* left container */}

            <div className="left-container">

            <div className="text-container">

            <div className="image">
            <LeftImage />
                
                {/* container with svg image inside */}

            </div>
            </div>
            </div>

                {/* right container */}

<div className="right-container">

        <div>
          <h1 className="faq">FAQ</h1>
        </div>

        <div className="question-container">
    
                    {/* Accordion data */}

            <AccordionData
            
            details={{
            
            summary:'How many members can I invite?',
            p:'You can invite only 20 members.'
                
                }} 
            
            />

            <AccordionData
            
            details={{
            
            summary:'How can I reset my password?',
            p:'Should it happen, please follow this link'
                
                }}
            
            />


            <AccordionData
            
            details={{
            
            summary:'Can I cancel my subscription?',
            p:'Please, visit this page'
        
                    }}
            
            />


            <AccordionData
            
            details={{
            
            summary:'Do you offer support?',
            p:'For more info please click on this link'
        
                    }}
            
            />

          </div>
        
      </div>


      
        </div>
    )
}


export default FaqPane