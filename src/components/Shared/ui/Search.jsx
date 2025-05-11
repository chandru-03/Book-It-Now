import React, { useEffect, useState } from 'react'
import '../../../styles/Search.css'
import MovieList from '../list/MoviesList'
import CinemaList from '../cinemalist/CinemaList'
import { useNavigate } from 'react-router-dom';

function Search({ searchTerm,setSearchTerm, closePopup }) {

    const navigate = useNavigate();

    const [search, setSearch] = useState([])
    const [activeSearch, setActiveSearch] = useState('Movie')
    console.log('Searching..', searchTerm);

    useEffect(() => {
        if(!searchTerm.trim()){
            setSearch([])
            return
        }

        const randomizeSelection = (search) => {
            const shuffled = [...search].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 10);
        }

        if (activeSearch === 'Cinema') {
            const filter = CinemaList.filter((item) => item.name.toLowerCase().includes(searchTerm));
            const result = randomizeSelection(filter);
            setSearch(result)
            console.log('Filtered Cinema : ');
        } else if (activeSearch === 'Movie') {
            const filter = MovieList.filter((item) => 
                item.title.toLowerCase().includes(searchTerm) ||
                item.language.toLowerCase().includes(searchTerm) ||
                item.genre.toLowerCase().includes(searchTerm)
            );      
            const result = randomizeSelection(filter);
            setSearch(result)
            console.log('Filtered Movie : ', result);
        } else {
            console.log('Error');
        }

    }, [activeSearch, searchTerm])

    const handleSearch = (item) => {
        navigate(activeSearch === 'Movie' ? `/movie/${item.id}` : `/cinema/${item.id}`);
        closePopup();
        setSearchTerm('');
    }
    
    return (
        <div>
            <div className='search-list-wrapper'>
                <div className="search-list-container">
                    <div className="search-buttons">
                        <div className={`search-button ${activeSearch === 'Movie' ? 'active' : ''}`} onClick={() => setActiveSearch('Movie')}>
                            <p>Movies</p>
                        </div>
                        <div className={`search-button ${activeSearch === 'Cinema' ? 'active' : ''}`} onClick={() => setActiveSearch('Cinema')}>
                            <p>Cinemas</p>
                        </div>
                    </div>
                    <ul className='search-list'>
                        {search.length === 0 ? <p>No results found</p> :  search?.map((item, index) => (
                            <li key={index} onClick={() => handleSearch(item)}>
                                <img src={activeSearch === 'Movie' ? item.img : item.img} alt="" />
                                <p>{activeSearch === 'Movie' ? item.title : item.name + ' : ' + item.location}</p>
                                <span>{activeSearch === 'Movie' ? item.duration : ''}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Search