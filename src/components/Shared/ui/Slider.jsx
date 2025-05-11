import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/Slider.css'

export default function Slider({ item, itemsPerPage, title, link, link2, seeAll }) {

    const [hover, setHover] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shuffledItems, setShuffledItems] = useState([]);
    const [like, setLike] = useState({})
    const [dislike, setDislike] = useState({})
    const totalSlides = Math.ceil(item.length - itemsPerPage)

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextSlide = () => {
        if ((currentIndex + 1) * itemsPerPage < item.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const onLikeClicked = (itemId) => {
        setLike((prevLike) => ({
            ...prevLike,
            [itemId]: !prevLike[itemId]
        }))

    }

    const onDislikeClicked = (itemId) => {
        setDislike((prevDislike) => ({
            ...prevDislike,
            [itemId]: !prevDislike[itemId]
        }))
    }

    useEffect(() => {
        const randomCards = () => {
            const shuffled = [...item].sort(() => Math.random() - 0.5);
            setShuffledItems(shuffled);
        };
        randomCards();
    }, [item]);
    return (
        <div>
            <div className='carousel-container'>
                <div className='row'>
                    <div className='col'>
                        <div className='container-info'>
                            <button className='arrow left' onClick={prevSlide} disabled={currentIndex === 0}>
                                <i className="fa-solid fa-circle-left fa-xl"></i>
                            </button>
                            <h1>{title}</h1>
                            <Link to={seeAll}>
                                <span>See All <i className="fa-solid fa-caret-right"></i></span>
                            </Link>
                        </div>
                        <div className='movie-list movie-slider' style={{ transform: `translateX(-${currentIndex * 20}%)`, transition: "transform 0.5s ease-in-out" }}>
                            {shuffledItems?.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
                                <div key={item.id}>
                                    <Link to={link2 ? link2(item) : `${link}/${item.id}`}>
                                        <div className="card img-card">
                                            <div className="img-overlay"
                                                onMouseEnter={() => setHover(item.id)}
                                                onMouseLeave={() => setHover(null)}
                                            >
                                                <img src={item.img} className="card-img-top" alt={item.title} />
                                                {item.rating ?
                                                    <div className={`card-img-overlay ${hover === item.id ? 'show' : 'hide'}`}>
                                                        <center>
                                                            <div className='overlay-content'>

                                                                <i className={`${like[item.id] ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up'}`} style={{ marginTop: '2px', color: like[item.id] ? "blue" : "white" }} onClick={() => onLikeClicked(item.id)}></i>
                                                                <span>{like[item.id] ? 1 + item.likes : item.likes}</span>
                                                                |
                                                                <i className={`${dislike[item.id] ? 'fa-solid fa-thumbs-down' : 'fa-regular fa-thumbs-down'}`} style={{ marginTop: '2px', color: dislike[item.id] ? "red" : "white" }} onClick={() => onDislikeClicked(item.id)}></i>
                                                                <span>{dislike[item.id] ? 1 + item.dislikes : item.dislikes}</span>
                                                            </div>
                                                        </center>
                                                    </div>
                                                    : ''}

                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title ? item.title : `${item.team1} - ${item.team2}`}</h5>
                                                <div className="card-text">
                                                    <span>{item.rating ? item.rating : item.venue ? item.venue : ''}</span>
                                                    {item.rating ? ' | ' : item.venue ? ' | ' : ''}
                                                    <span>{item.type ? item.type : item.genre ? item.genre : item.location}</span>
                                                    |
                                                    <span>{item.place ? item.place : item.date ? item.date : item.duration}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="container-info">
                            <button className='arrow right' onClick={nextSlide} disabled={currentIndex === totalSlides}>
                                <i className="fa-solid fa-circle-right fa-xl"></i>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
