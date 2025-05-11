import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '.././styles/MovieCard.css';
import MoviesList from '../components/Shared/list/MoviesList';
import FilterBtn from '../components/Shared/ui/FilterBtn';
import Buttons from '../components/Shared/ui/Buttons';
import Filters from '../components/Shared/ui/Filters';

function Movies() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ genre: [], movieRating: [], format: [], language: [], price: [], seat: []});
  const [filteredItems, setFilteredItems] = useState(MoviesList);
  const [shuffledItems, setShuffledItems] = useState([]);
  const [selectedRange, setSelectedRange] = useState(null);

  const langFilters = ['Tamil', 'English', 'Malayalam', 'Hindi', 'Telugu', 'Kannada'];
  const genre = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Thriller', 'Documentary'];
  const movieRating = ['G', 'PG', 'PG-13', 'R', 'A', 'U']
  const format = ['2D', '3D', 'IMAX']

  useEffect(() => {
    let filteredMovies = MoviesList;
  
    if (selectedFilters?.genre?.length > 0) {
      filteredMovies = filteredMovies.filter(movie =>
        (Array.isArray(movie?.genre) ? movie.genre : (movie.genre || '').split('/'))
          .some(genre => selectedFilters.genre.includes(genre))
      );
    }
  
    if (selectedFilters?.movieRating?.length > 0) {
      filteredMovies = filteredMovies.filter(movie =>
        selectedFilters.movieRating.includes(movie?.movieRating || '')
      );
    }
  
    if (selectedFilters?.format?.length > 0) {
      filteredMovies = filteredMovies.filter(movie =>
        (Array.isArray(movie.format) ? movie.format : (movie.format || '').split('/'))
        .some(format => selectedFilters.format.includes(format))
      );
    }

    if (selectedFilters.language?.length > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        selectedFilters.language.some((language) => movie.language?.includes(language))
      );
    }

    setFilteredItems(filteredMovies);
  }, [selectedFilters]);
  
  useEffect(() => {
    const shuffled = [...filteredItems].sort(() => 0.5 - Math.random());
    setShuffledItems(shuffled);
  }, [filteredItems]);
  
  const updateFilter = (filters) => {
    setSelectedFilters({
      genre: filters.genre || [],
      movieRating: filters.movieRating || [],
      format: filters.format || [],
      language: filters.language || [],
      price: filters.price || [],
      seat: filters.seat || [],
    })
  }

  const toggleFilter = (language) => {
    setSelectedFilters((prevFilters) => {
      let updatedFilters = { ...prevFilters, language: prevFilters.language || [] };
  
      if (updatedFilters.language.includes(language)) {
        updatedFilters.language = updatedFilters.language.filter((filter) => filter !== language);
      } else {
        updatedFilters.language = [...updatedFilters.language, language];
      }
  
      return updatedFilters;
    });
  };

  return (
    <div>

      <div className="header-container">
        <div className="hr-line"></div>
          <h2>NOW SHOWING</h2>
        <div className="hr-line"></div>
      </div>

      <div className="container filter-container">
        <ul className="filter-list">
          <li>
              <FilterBtn onClick={() => setShowFilters(true)}/>
          </li>

          {langFilters.map((language, index) => (
            <li key={`filters-${index}`}>
              <Buttons
                buttonSize="btns--small"
                buttonStyle={selectedFilters.language?.includes(language) ? 'btns--outline--bg' : 'btns--outline'}
                className={`button ${selectedFilters.language?.includes(language) ? 'active' : ''}`}
                onClick={() => toggleFilter(language)}
              >
                {language}
              </Buttons>
            </li>
          ))}
        </ul>
      </div>

      <div className="movie-container">
        {shuffledItems.length > 0 ? (
          shuffledItems.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="movie-view-card">
              <img src={movie.img} alt={movie.title} />
              <h3>{movie.title}</h3>
              <div className="movie-context">
                <p>{movie.rating}</p>
                |
                <p>{movie.genre}</p>
                |
                <p>{movie.duration}</p>
              </div>
              <p>{movie.language}</p>
            </div>
            </Link>
          ))
        ) : (
          <h2 style={{ color: 'white', textAlign: 'center' }}>No movies found.</h2>
        )}
      </div>

      {showFilters && (
        <Filters
          closePopup={() => setShowFilters(false)}
          selectedFilters={selectedFilters}
          updateFilters={updateFilter}
          item1={genre}
          item2={movieRating}
          item3={format}
          name1="Genre"
          name2="Rating"
          name3="Format"
          setSelectedRange={setSelectedRange}
        />
      )}
    </div>
  );
}

export default Movies;