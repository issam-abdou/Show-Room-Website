import React from "react"
import car from "../img/car1.png"
import "../style/components/car-card.css"


const CarCard = ()=>{
    return(
        <div className="card">
            <div className="card__img">
                <img src ={car} alt="car"/>
            </div>
            <div className="card__text">
                <h4>Volkswagen Touareg</h4>
                <span>SUV (2 badges)</span>
                <div className="details"><a href="/">See details</a></div>
            </div>
        </div>
    )
}

export default CarCard;