import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import currentMovie from '../../components/Shared/list/MoviesList'
import '../../styles/MovieViewer.css'
import Buttons from '../../components/Shared/ui/Buttons'
function MovieViewer() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const [muted, setMuted] = useState(false);

    function extractVideoId(url) {
        const match = url?.match(/embed\/([a-zA-Z0-9_-]{0,200})/);
        return match ? match[1] : '';
    }


    const videoId = extractVideoId(movie?.trailer);
    const trailerURL = `${movie?.trailer}?autoplay=1&${muted ? 'mute=0' : 'mute=1'}&loop=1&controls=0&playlist=${videoId}`;

    const toggleMute = () => {
        setMuted(!muted);
    };


    useEffect(() => {
        const foundMovie = currentMovie.find((m) => m.id === parseInt(id));
        setMovie(foundMovie);
    }, [id]);

    if (!movie) {
        return <h2>Movie not found</h2>;
    }

    return (
        <div>
            <div className='container-fluid movie-viewer-container'>
                <iframe
                    key={muted}
                    src={trailerURL}
                    title="Movie Trailer"
                    loading="eager"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                />
                {!muted && (
                    <div className="movie-details">
                        <img src={movie.img} alt="" />
                        <div className="movie-details-text">
                            <h1>{movie.title}</h1>
                            <p>{movie.description}</p>

                            <div className="movie-rating">
                                <p><i class="fa-solid fa-star" style={{ color: '#8F00FF' }}></i> &nbsp; Rating: {movie.rating}/10</p>
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
                                    <p><i class="fa-solid fa-thumbs-up" style={{ color: "#8F00FF" }}></i> &nbsp;{movie.likes} Liked</p>
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
                                    <Link className='btn-link' to={`/movie/${movie.title}/select`} state={{ movie }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Book Tickets
                                    </Link>

                                </Buttons>
                        </div>
                    </div>
                )}
                <span class="material-symbols-outlined" onClick={toggleMute} style={{ cursor: 'pointer', paddingLeft: '50px', color: '#e1e1e190',position:'absolute',top:'20px',right:'20px' }}>
                    {muted ? 'volume_up' : 'volume_off'}
                </span>

            </div>

            <h2 style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", color: '#d3d3d3', padding: '10px 50px', marginTop: '10px' }}>Cast </h2>
            <div className='movie-cast-container'>
                {movie.castImgs.map((img, index) => (
                    <div key={index} className='cast-item'>
                        <div className='cast-images'>
                            <img src={img} alt="" />
                        </div>
                        <div className='card-text'>
                            <p>{movie.castNames[index]}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", color: '#d3d3d3', padding: '10px 50px', marginTop: '10px' }}>Crew </h2>
            <div className='movie-cast-container'>
                {movie.crewImgs.map((img, index) => (
                    <div key={index} className='cast-item'>
                        <div className='cast-images'>
                            <img src={img} alt="" />
                        </div>
                        <div className='card-text'>
                            <p>{movie.crewNames[index]}</p>
                        </div>
                        <div className='card-text'>
                            <p>{movie.crewRoles[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default MovieViewer