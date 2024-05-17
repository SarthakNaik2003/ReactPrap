import React from 'react';
import phoneIcon from '../assets/img/phone-icon.png'; // Importing the phone icon
import mailIcon from '../assets/img/mail-icon.png'; // Importing the mail icon

function Card(props) {

    return (
        <div className="contact-card">
            <img src={props.img} alt={props.name + " image"} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon} alt="Phone" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} alt="Mail" />
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;
