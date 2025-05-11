import React from 'react'
import '../../../styles/Card.css'

function Cards() {
    return (
        <div className='container-card'>
            <h1 style={{ color: 'white' }}>Endlesss Entertainment Anytime! Anywhere!</h1>
            <div className="card-container">
                <div className="card-wrapper">
                    <img src="https://www.southmoviez.com/wp-content/uploads/2024/11/feature-fashion-55-1068x712.jpg" alt="1" />
                </div>
                <div className="card-wrapper">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00426563-ywpgnflzce-landscape.jpg" alt="2" />
                </div>
                <div className="card-wrapper">
                    <img src="https://cdn.123telugu.com/content/wp-content/uploads/2024/05/Coolie-m.jpg" alt="3" />
                </div>
                <div className="card-wrapper">
                    <img src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2025/F1%20movie/f1_movie_poster16x9%20(1)" alt="4" />
                </div>
                <div className="card-wrapper">
                    <img src="https://www.mensjournal.com/.image/t_share/MjEzNTc4NDA2MzEzMzM4MzE5/superman-2025-header-1.jpg" alt="5" />
                </div>
            </div>
        </div>
    )
}

export default Cards