import React from 'react'
import "./card.css"

function Card({text, img, icon, input, button}) {
    
    return (
    <>
        <div className="card">

            <div className="row">
                <div className="tittle">
                    <strong> {text} </strong>
                </div>
            </div>

            {input ? <div className="row">
                    <div className="input">
                        {input ? input : ""}
                    </div>
                </div> : ""}

                
            {img ? <div className="row">
                <div className="img">
                     {img ? <img src= {img} /> : ""}
                </div>
            </div> : ""}  
            
            {button ? <div className="row">
                <div className="button">
                    {button}
                </div>
            </div> : ""}

            


        </div>
    </>
  )
}

export default Card