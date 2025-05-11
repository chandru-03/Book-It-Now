import React from 'react'
import '../../styles/MovieViewer.css'
import Buttons from '../../components/Shared/ui/Buttons'

function ViewHeader({movie}) {
  return (
    <div>
                <div className="movie-details">
                    <img src={movie.img} alt="" />
                    <div className="movie-details-text">
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>

                        <div className="movie-rating">
                            <p><i class="fa-solid fa-star" style={{color: '#8F00FF'}}></i> &nbsp; Rating: {movie.rating}/10</p>
                            <div className='movie-rating-overlay'>
                                <div className="movie-rating-stars" style={{ width: `${movie.rating * 10}%` }}>
                                    Review
                                </div>
                            </div>
                            </div>

                            <div className="movie-text-card">

                                <div className="movie-text">
                                    <p>{movie.genre}</p>
                                </div>

                                <div className="movie-text">
                                    <p>{movie.movieRating}</p>
                                </div>

                                <div className="movie-text">
                                    <p><i class="fa-solid fa-thumbs-up" style={{color:"#8F00FF"}}></i> &nbsp;{movie.likes} Liked</p>
                                </div>

                            </div>
                            <br />
                            <div className="movie-text-card">
                                <p>{movie.duration}</p>
                                <span className='round'></span>
                                <p>{movie.language}</p>
                                <span className='round'></span>
                                <p>{movie.releasedDate}</p>
                            </div>

                            <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'}>
                                Book Tickets
                            </Buttons>
                        </div>
                    </div>
                </div>
  )
}

export default ViewHeader