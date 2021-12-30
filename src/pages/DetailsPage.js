import React from "react"
import CarDetails from "../components/CarDetails"
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router';

const DetailsPage = (props)=>{
    let navigate = useNavigate();
    return(
        <main>
            <div className="container">
                <ArrowBack onClick={()=>navigate(-1)} style={{cursor:"pointer"}}/>
                <CarDetails cars={props.cars}/>
            </div>
        </main>
    )
}

export default DetailsPage