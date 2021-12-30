import React from "react"
// import showRoom1 from '../img/sh-room1.png'
// import showRoom2 from '../img/sh-room2.png'
// import showRoom3 from '../img/sh-room3.png'
import "../style/components/show-room-card.css"
import {Link} from "react-router-dom"
const ShowRoomCard = (props)=>{
    return(
        <>
        <Link to="/show-room" className="show-card" >
            <img src={props.img} alt ="showroom1"/>
            <div className="show-text">
                <h4>{props.title}</h4>
                <p>{props.details}</p>
            </div>
        </Link>
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

