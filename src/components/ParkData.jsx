import "./CSS/Trip.css"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ParkData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <h6>{props.location}</h6>
            <p>{props.Timings}</p>


        </div>
    )
}


export default ParkData