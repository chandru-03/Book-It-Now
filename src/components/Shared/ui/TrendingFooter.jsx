import React from 'react';
import '../../../styles/Trending.css';
import { useNavigate } from 'react-router-dom';

const TrendingFooter = ({ trend, item }) => {
    const navigate = useNavigate();

    const handleClick = (trendItem) => {
        const matchedMovie = item.find(movie => {
            const movieTitle = movie.title.toLowerCase();
            const trendTitle = trendItem.title.toLowerCase();

            const isMatch = movieTitle.includes(trendTitle) ||
                trendTitle.includes(movieTitle);

            if (isMatch) {
                console.log('Match found:', movie);
            }

            return isMatch;
        });

        if (matchedMovie) {
            console.log(`Navigating to movie: ${matchedMovie.title} with ID: ${matchedMovie.id}`);
            navigate(`/movie/${matchedMovie.id}`, { state: { item: matchedMovie } });
        } else {
            console.log(`No matching movie found for: ${trendItem.title}`);
        }

    };

    return (
        <div className='container'>
            <div className="trending-wrapper">
                <h3>Trending Searches Right Now</h3>
                <div className="trending-container">
                    {trend.map((trendItem) => (
                        <div
                            key={trendItem.id}
                            className="trending-card"
                            onClick={() => handleClick(trendItem)}
                        >
                            <h4>{trendItem.title}</h4>
                            <br />
                            <h5>{trendItem.category}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default TrendingFooter;