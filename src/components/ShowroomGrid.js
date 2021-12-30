import React from "react"
import ShowRoomCard from "./ShowRoomCard"
import "../style/components/show-room-card.css"

const ShowroomGrid = (props)=>{
    return(
        <div className="showrooms">
            {props.showrooms.map(showRoom=>  <ShowRoomCard key={showRoom.id} title ={showRoom.title} details={showRoom.description} img={showRoom.image}/>)} 
        </div>
    )
}

export default ShowroomGrid