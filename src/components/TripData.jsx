import "./CSS/Trip.css"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function TripData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            
            <h6>{props.location}</h6>
            <p>{props.para}</p>


        </div>
    )
}


export default TripData