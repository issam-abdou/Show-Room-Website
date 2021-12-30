import React from "react"
import CarCard from "./CarCard"
import "../style/components/car-grid.css"

const CarGrid = (props)=>{
    return(
        <div className="car-grid">
            {props.cars.map(car=><CarCard key={car.id} name={car.name} extra={car.extra} img={car.image} />)}
        </div>
    )
}

export default CarGrid