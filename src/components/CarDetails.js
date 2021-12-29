import React from "react"
import car from "../img/car2.png"
import "../style/components/car-details.css"

const CarDetails = ()=>{
    return(
        <div className="car-details">
            <img src={car} alt="car" className="details__img"/>
            <div className="details__text">
                <div className="details__item">
                    <span className="details-title">Name</span>
                    <span>Hyundai Go</span>
                </div>
                <div className="details__item">
                    <span className="details-title">Model</span>
                    <span>i30</span>
                </div>
                <div className="details__item">
                    <span className="details-title">Extra</span>
                    <span>Lorem ipsum</span>
                </div>
            </div>
        </div>
    )
}

export default CarDetails