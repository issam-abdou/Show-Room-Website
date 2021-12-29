import React from "react"
import CarGrid from "../components/CarGrid"
import "../style/components/showRoom-page.css"
import ArrowBack from "@mui/icons-material/ArrowBack";


const ShowroomPage = ()=>{
    return(
        <main>
            <div className="container">
                <a href="/" style={{color:"black"}}><ArrowBack/></a>
                <h1 className="show-room-title">Show Room</h1>
                <CarGrid/>
            </div>
        </main>
    )
}

export default ShowroomPage