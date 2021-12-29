import React from "react"
import ShowRoomCard from "./ShowRoomCard"
import "../style/components/show-room-card.css"


const ShowroomGrid = ()=>{
    return(
        <div className="showrooms">
            <ShowRoomCard/>
            <ShowRoomCard/>
            <ShowRoomCard/>
        </div>
    )
}

export default ShowroomGrid