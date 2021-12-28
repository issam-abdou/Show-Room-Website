import React from "react"
import CarCard from "./CarCard"
import "../style/components/car-grid.css"

const CarGrid = ()=>{
    return(
        <div className="car-grid">
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
        </div>
    )
}

export default CarGrid