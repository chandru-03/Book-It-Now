import React, { useState, useEffect } from 'react'
import '../../../styles/Pages.css';
import '../../../styles/MovieCard.css';
import Buttons from './Buttons';

function Filters({ closePopup, updateFilters, style, setSelectedRange, 
  selectedFilters = { 
    genre: [], 
    movieRating: [], 
    format: [], 
    price: [], 
    seat: [],
    categories: [], 
    type: [], 
    date: [] 
  }, 
  item1 = [], item2 = [], item3 = [], item4 = [], 
  name1, name2, name3, name4 
}) {
  const [activeFilter, setActiveFilter] = useState(name1);

  const [dateFilter, setDateFilter] = useState(selectedFilters?.date || []);
  const [priceFilter, setPriceFilter] = useState(selectedFilters?.price || []);
  const [categoriesFilter, setCategoriesFilter] = useState(selectedFilters?.categories || []);
  const [typeFilter, setTypeFilter] = useState(selectedFilters?.type || []);

  const [genreFilter, setGenreFilter] = useState(selectedFilters?.genre || []);
  const [movieRatingFilter, setMovieRatingFilter] = useState(selectedFilters?.movieRating || []);
  const [formatFilter, setFormatFilter] = useState(selectedFilters?.format || []);
  const [seatFilter, setSeatFilter] = useState(selectedFilters?.seat || []);

  useEffect(() => {
    setDateFilter(selectedFilters?.date || []);
    setPriceFilter(selectedFilters?.price || []);
    setCategoriesFilter(selectedFilters?.categories || []);
    setTypeFilter(selectedFilters?.type || []);
    setGenreFilter(selectedFilters?.genre || []);
    setMovieRatingFilter(selectedFilters?.movieRating || []);
    setFormatFilter(selectedFilters?.format || []);
    setSeatFilter(selectedFilters?.seat || []);
  }, [selectedFilters]);

  const handleFilterChange = (item) => {
    if (activeFilter === name1) {
      setDateFilter(prev => {
        return prev.includes(item) 
          ? prev.filter(filter => filter !== item) 
          : [...prev, item];
      });
    } else if (activeFilter === name2) { 
      if (name2 === 'Categories') {
        setCategoriesFilter(prev => {
          return prev.includes(item) 
            ? prev.filter(filter => filter !== item) 
            : [...prev, item];
        });
      } else if (name2 === 'Price') {
        setPriceFilter(prev => {
          return prev.includes(item) 
            ? prev.filter(filter => filter !== item) 
            : [...prev, item];
        });
        

        if (setSelectedRange && item?.includes('-')) {
          const [min, max] = item.split('-').map(Number);
          setSelectedRange({ min, max });
        } else if (setSelectedRange && item === 'Above 2000') {
          setSelectedRange({ min: 2001, max: Number.MAX_SAFE_INTEGER });
        } else if (setSelectedRange && item === 'Free') {
          setSelectedRange({ min: 0, max: 0 });
        }
      }
    } else if (activeFilter === name3) {
      if (name3 === 'Price') {
        setPriceFilter(prev => {
          return prev.includes(item) 
            ? prev.filter(filter => filter !== item) 
            : [...prev, item];
        });
        
        if (setSelectedRange && item?.includes('-')) {
          const [min, max] = item.split('-').map(Number);
          setSelectedRange({ min, max });
        } else if (setSelectedRange && item === 'Above 2000') {
          setSelectedRange({ min: 2001, max: Number.MAX_SAFE_INTEGER });
        } else if (setSelectedRange && item === 'Free') {
          setSelectedRange({ min: 0, max: 0 });
        }
      } else {
        setCategoriesFilter(prev => {
          return prev.includes(item) 
            ? prev.filter(filter => filter !== item) 
            : [...prev, item];
        });
      }
    } else if (activeFilter === name4) {
      setTypeFilter(prev => {
        return prev.includes(item) 
          ? prev.filter(filter => filter !== item) 
          : [...prev, item];
      });
    }
  };

  const clearFilters = () => {
    setDateFilter([]);
    setPriceFilter([]);
    setCategoriesFilter([]);
    setTypeFilter([]);
    setGenreFilter([]);
    setMovieRatingFilter([]);
    setFormatFilter([]);
    setSeatFilter([]);
    if (setSelectedRange) {
      setSelectedRange(null);
    }
    updateFilters({ 
      genre: [], 
      movieRating: [], 
      format: [], 
      price: [], 
      seat: [],
      categories: [], 
      type: [],
      date: [] 
    });
    closePopup();
  }

  const applyFilters = () => {
    if (typeof updateFilters === 'function') {
      const filters = {
        date: dateFilter,
        price: priceFilter,
        categories: categoriesFilter,
        type: typeFilter,
        genre: genreFilter,
        movieRating: movieRatingFilter,
        format: formatFilter,
        seat: seatFilter
      };

      if (priceFilter.length > 0 && setSelectedRange) {
      }
      
      updateFilters(filters);
      closePopup();
    } else {
      console.error('updateFilters is not a function');
    }
  }

  const isChecked = (item) => {
    if (activeFilter === name1) {
      return dateFilter.includes(item);
    } else if (activeFilter === name2) {
      if (name2 === 'Categories') {
        return categoriesFilter.includes(item);
      } else if (name2 === 'Price') {
        return priceFilter.includes(item);
      }
    } else if (activeFilter === name3) {
      if (name3 === 'Price') {
        return priceFilter.includes(item);
      } else {
        return categoriesFilter.includes(item);
      }
    } else if (activeFilter === name4) {
      return typeFilter.includes(item);
    }
    return false;
  };

  return (
    <div>
      <div className="container filter-container-set">
        <div className='filter-sort' style={style}>
          <div className="filter-header">
            <h3>Filter By</h3>
            <i className="fa-solid fa-xmark fa-xl" onClick={closePopup}></i>
          </div>
          <div className="filter-content">
            <div className='filter-sidebar'>
              <br />
              <h3 
                className={activeFilter === name1 ? 'active' : ''}
                onClick={() => setActiveFilter(name1)}
              >
                {name1}
              </h3>
              <br />
              <h3 
                className={activeFilter === name2 ? 'active' : ''}
                onClick={() => setActiveFilter(name2)}
              >
                {name2}
              </h3>
              <br />
              <h3 
                className={activeFilter === name3 ? 'active' : ''}
                onClick={() => setActiveFilter(name3)}
              >
                {name3}
              </h3>
              {name4 && (
                <h3 
                  className={activeFilter === name4 ? 'active' : ''}
                  onClick={() => setActiveFilter(name4)}
                >
                  {name4}
                </h3>
              )}
            </div>
            <div className='filter-options-wrapper'>
              <div className='filter-options-container'>
                {activeFilter === name1 && item1?.map((item, index) => (
                  <div key={index} className='filter-options'>
                    <label>
                      <input 
                        type="checkbox"
                        checked={isChecked(item)}
                        onChange={() => handleFilterChange(item)} 
                      />
                      {item}
                    </label>
                  </div>
                ))}
                
                {activeFilter === name2 && item2?.map((item, index) => (
                  <div key={index} className='filter-options'>
                    <label>
                      <input 
                        type="checkbox"
                        checked={isChecked(item)}
                        onChange={() => handleFilterChange(item)} 
                      />
                      {item}
                    </label>
                  </div>
                ))}

                {activeFilter === name3 && item3?.map((item, index) => (
                  <div key={index} className='filter-options'>
                    <label>
                      <input 
                        type="checkbox"
                        checked={isChecked(item)}
                        onChange={() => handleFilterChange(item)} 
                      />
                      {item}
                    </label>
                  </div>
                ))}

                {activeFilter === name4 && item4?.map((item, index) => (
                  <div key={index} className='filter-options'>
                    <label>
                      <input 
                        type="checkbox"
                        checked={isChecked(item)}
                        onChange={() => handleFilterChange(item)} 
                      />
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='filter-actions'>
            <Buttons 
              buttonSize={'btns--small'} 
              buttonStyle={'btns--outline'} 
              onClick={clearFilters}
            >
              Clear All
            </Buttons>

            <Buttons 
              buttonSize={'btns--small'} 
              buttonStyle={'btns--outline--bg'} 
              onClick={applyFilters}
            >
              Apply
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Filters;