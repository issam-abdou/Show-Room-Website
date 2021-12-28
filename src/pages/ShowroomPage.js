import React from "react"
import CarGrid from "../components/CarGrid"

const ShowroomPage = ()=>{
    return(
        <main>
            <div className="container">
                <h1 className="show-room-title">Show Room 1</h1>
                <CarGrid/>
            </div>
        </main>
    )
}

export default ShowroomPage