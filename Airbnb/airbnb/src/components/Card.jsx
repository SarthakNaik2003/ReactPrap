import React from 'react'
import cardImg from '../assets/card-img.png'
import Star from '../assets/Star1.png'

function Card() {
    return (
        <div className="card">
            <img src={cardImg} className="card--image" alt="Main card image." />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="Star icon." />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <h2>Life Lessons with Katie Zaferes</h2>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card