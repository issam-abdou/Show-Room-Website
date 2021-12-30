import React from "react"
// import car from "../img/car1.png"
import "../style/components/car-card.css"
import {Link} from "react-router-dom"

const CarCard = (props)=>{
    return(
        <div to="/details"className="card">
            <div className="card__img">
                <img src ={props.img} alt="car"/>
            </div>
            <div className="card__text">
                <h4>{props.name}</h4>
                <span>{props.extra}</span>
                <div className="details"><Link to={`/details/${props.name}`}>See details</Link></div>
            </div>
        </div>
    )
}

export default CarCard;