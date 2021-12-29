import React from "react"
import CarDetails from "../components/CarDetails"
import ArrowBack from "@mui/icons-material/ArrowBack";

const DetailsPage = ()=>{
    return(
        <main>
            <div className="container">
                <a href="/"><ArrowBack/></a>
                <CarDetails/>
            </div>
        </main>
    )
}

export default DetailsPage