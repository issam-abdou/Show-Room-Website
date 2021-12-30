import React from "react"
import CarGrid from "../components/CarGrid"
import "../style/components/showRoom-page.css"
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router';


const ShowroomPage = (props)=>{
    let navigate = useNavigate();
    return(
        <main>
            <div className="container">
                <ArrowBack onClick={()=>navigate(-1)} style={{cursor:"pointer",color:"black"}}/>

                <h1 className="show-room-title">Show Room</h1>
                <CarGrid cars={props.cars}/>
            </div>
        </main>
    )
}

export default ShowroomPage