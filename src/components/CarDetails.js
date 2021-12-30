import React from "react"
// import car from "../img/car2.png"
import "../style/components/car-details.css"
import { useParams } from 'react-router-dom'


const CarDetails = (props)=>{
    const {id} =useParams()
    const car = props.cars.filter((car)=>{
        return car.name===id
    })[0]
    return(
        <div className="car-details">
            <img src={car.image} alt="car" className="details__img"/>
            <div className="details__text">
                <div className="details__item">
                    <span className="details-title">Name</span>
                    <span>{car.name}</span>
                </div>
                <div className="details__item">
                    <span className="details-title">Model</span>
                    <span>{car.model}</span>
                </div>
                <div className="details__item">
                    <span className="details-title">Extra</span>
                    <span>{car.extra}</span>
                </div>
            </div>
        </div>
    )
}

export default CarDetails