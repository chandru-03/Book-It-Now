import React, { useState } from 'react'
import Buttons from './Buttons';
import '../../../styles/Pages.css';
import '../../../styles/MovieCard.css';

function EventFilters({ closePopup, updateFilters, selectedFilters = { genre: [], type: [], price: [], language: [] } }) {
     const [activeFilter, setActiveFilter] = useState('Genre');

      const [genreFilter, setGenreFilter] = useState(selectedFilters?.genre || [])
      const [typeFilter, setTypeFilter] = useState(selectedFilters?.type || [])
      const [priceFilter, setPriceFilter] = useState(selectedFilters?.price || [])
      const [languageFilter, setLanguageFilter] = useState(selectedFilters?.language || [])
    
      const genre = ['Music', 'Dance', 'Comedy'];
      const type = ['Concert', 'Stand-up Comedy']
      const price= [599, 999, 1299, 1599, 1999]
      const language = ['Tamil', 'English', 'Malayalam', 'Hindi', 'Telugu', 'Kannada'];

      const handleGenreChange = (genre) => {
        setGenreFilter((select) => {
          let updatedFilters = [...select];
      
          if (updatedFilters.includes(genre)) {
            return updatedFilters.filter((filter) => filter !== genre);
          } else {
            return [...updatedFilters, genre];
          }
        });
      };
      
      const handleTypeChange = (type) => {
        setTypeFilter((select) => {
          let updatedFilters = [...select];
      
          if (updatedFilters.includes(type)) {
            return updatedFilters.filter((filter) => filter !== type);
          } else {
            return [...updatedFilters, type];
          }
        });
      };
      

      const handlePriceChange = (price) => {
        setPriceFilter((select) => {
          let updatedFilters = [...select];
      
          if (updatedFilters.includes(price)) {
            return updatedFilters.filter((filter) => filter !== price);
          } else {
            return [...updatedFilters, price];
          }
        });
      };

      
      const handleLanguageChange = (lang) => {
        setLanguageFilter((select) => {
          let updatedFilters = [...select];
      
          if (updatedFilters.includes(lang)) {
            return updatedFilters.filter((filter) => filter !== lang);
          } else {
            return [...updatedFilters, lang];
          }
        });
      };
      
      
    
      const clearFilters = () => {
        setGenreFilter([])
        setTypeFilter([])
        setPriceFilter([])
        setLanguageFilter([])
        updateFilters({ genre: [], type: [], price: [], language: [] })
        closePopup()
      }
    
      const applyFilters = () => {
        if (typeof updateFilters === 'function') {
          updateFilters({ genre: genreFilter, type: typeFilter, price: priceFilter, language: languageFilter })
          closePopup();
        } else {
          console.warn('Error');
        }
      }
    
    
  return (
    <div>
        <div className="container filter-container-set">
        <div className='filter-sort'>
          <div className="filter-header">
            <h3>Filter By</h3>
            <i className="fa-solid fa-xmark fa-xl" onClick={closePopup}></i>
          </div>
          <div className="filter-content">
            <div className='filter-sidebar'>
              <br />
              <h3 className={activeFilter === 'Genre' ? 'active' : ''}
                onClick={() => {
                  setActiveFilter('Genre');
                }}>
                Genre
              </h3>
              <br />
              <h3 className={activeFilter === 'Categories' ? 'active' : ''}
                onClick={() => {
                  setActiveFilter('Categories');

                }}>
                Categories
              </h3>
              <br />
              <h3 className={activeFilter === 'Price' ? 'active' : ''}
                onClick={() => {
                  setActiveFilter('Price');
                }}>
                Price
              </h3>
              <h3 className={activeFilter === 'Language' ? 'active' : ''}
                onClick={() => {
                  setActiveFilter('Language');
                }}>
                Language
              </h3>
            </div>

            {
              activeFilter === 'Genre' && (
                <div>
                  {genre.map((genre, index) => (
                    <div key={index} className='filter-options'>
                      <label>
                        <input type="checkbox"
                          checked={genreFilter.includes(genre)}
                          onChange={() => handleGenreChange(genre)} />{genre}</label>
                    </div>
                  ))}
                </div>
              )
            }

            {
              activeFilter === 'Categories' && (
                <div>
                  {type.map((type, index)=>(
                    <div key={index} className='filter-options'>
                      <label><input type="checkbox" 
                      checked={typeFilter.includes(type)}
                      onChange={()=>handleTypeChange(type)}/>{type}</label>
                    </div>
                  ))}
                </div>
              )
            }

            {
              activeFilter === 'Price' && (
                <div>
                  {price.map((price, index)=>(
                    <div key={index} className='filter-options'>
                      <label>
                        <input type="checkbox" 
                        checked={priceFilter.includes(price)}
                        onChange={()=>handlePriceChange(price)}/>{price}</label>
                    </div>
                  ))}
                </div>
              )
            }

{
              activeFilter === 'Language' && (
                <div>
                  {language.map((language, index)=>(
                    <div key={index} className='filter-options'>
                      <label>
                        <input type="checkbox" 
                        checked={languageFilter.includes(language)}
                        onChange={()=>handleLanguageChange(language)}/>{language}</label>
                    </div>
                  ))}
                </div>
              )
            }

          </div>

          <div className='filter-actions'>
            <Buttons buttonSize={'btns--small'} buttonStyle={'btns--outline'} onClick={clearFilters}>
              Clear All
            </Buttons>

            <Buttons buttonSize={'btns--small'} buttonStyle={'btns--outline--bg'} onClick={applyFilters}>
              Apply
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventFilters