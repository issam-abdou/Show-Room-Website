import React from "react"
import showRoom1 from '../img/sh-room1.png'
// import showRoom2 from '../img/sh-room2.png'
// import showRoom3 from '../img/sh-room3.png'
import "../style/components/show-room-card.css"

const ShowRoomCard = ()=>{
    return(
        <>
        <div className="show-card" >
            <img src={showRoom1} alt ="showroom1"/>
            <div className="show-text">
                <h4>Show Room 1</h4>
                <p>Many design details and a new operating concept: The updated Audi RS5 models, Sportback and Coupé, incorporate the new RS...</p>
            </div>
        </div>
        </>
    )
}
export default ShowRoomCard



/* <div className="show-card" >
            <img src={showRoom2} alt ="showroom1"/>
            <div className="show-text">
                <h4>Show Room 2</h4>
                <p>Many design details and a new operating concept: The updated Audi RS5 models, Sportback and Coupé, incorporate the new RS...</p>
            </div>
        </div>
        <div className="show-card" >
            <img src={showRoom3} alt ="showroom1"/>
            <div className="show-text">
                <h4>Show Room 3</h4>
                <p>Many design details and a new operating concept: The updated Audi RS5 models, Sportback and Coupé, incorporate the new RS...</p>
            </div>
        </div> */

