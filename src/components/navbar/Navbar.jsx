import React, { useContext, useEffect } from 'react';
import { useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { UserContext } from '../../context/UserContext';
import Buttons from '../Shared/ui/Buttons';
import Search from '../Shared/ui/Search';
import Location from '../Shared/ui/Location';


function Navbar() {

  const setSearchBarOpen = (state, action) => {

    if (action === 'Search_On') {
      return true;
    }
    else if (action === 'Search_Off') {
      setShowSearchList(false)
      return false;
    }
    else {
      return state;
    }

  };

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [showSearchList, setShowSearchList] = useState(false)
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [searchOpen, dispatch] = useReducer(setSearchBarOpen, false);
  const [showLocation, setShowLocation] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');

  const [location, setLocation] = useState(localStorage.getItem('location'));

  const handleClick = () => {
    setClick(!click);
    dispatch('Search_Off');
  };

  const closeMenu = () => {
    setClick(false);
    dispatch('Search_Off');
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton)

  }, [])

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" onClick={closeMenu}>
          <div  className="navbar-logo" >
            <img src="/Assets/Logo/logo_2.png" alt="Logo"/>
            </div>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i
              className={
                click
                  ? 'fa-solid fa-times'
                  : 'fa-solid fa-bars'
              }
            ></i>
          </div>

          <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
            <li className="navbar-items">
              <Buttons buttonStyle="btns--primary" buttonSize="btns--small">
                <Link to="/" className="navbar-links" onClick={closeMenu}>
                  <i className="fa-solid fa-wand-magic-sparkles fa-xl icon--primary"></i>
                  For You
                </Link>
              </Buttons>
            </li>

            <li className="navbar-items">
              <Buttons buttonStyle="btns--terinary" buttonSize="btns--small">
                <Link to="/movies" className="navbar-links" onClick={closeMenu}>
                  <i className="fa-solid fa-clapperboard fa-xl icon--terinary"></i>
                  Movies
                </Link>
              </Buttons>
            </li>

            <li className="navbar-items">
              <Buttons buttonStyle="btns--quaternary" buttonSize="btns--small">
                <Link to="/events" className="navbar-links" onClick={closeMenu}>
                  <i className="fa-solid fa-icons fa-xl icon--quaternary"></i>
                  Events
                </Link>
              </Buttons>
            </li>

            <li className="navbar-items">
              <Buttons buttonStyle="btns--secondary" buttonSize="btns--small">
                <Link to="/sports" className="navbar-links" onClick={closeMenu}>
                  <i className="fa-solid fa-trophy fa-xl icon--secondary"></i>
                  Sports
                </Link>
              </Buttons>
            </li>


          </ul>
        </div>

        <div className="navbar-signIn">

          <div className='navbar-location' onClick={() => setShowLocation(true)}>
            <h5>{location}</h5>
            <i className="fa-solid fa-angles-down fa-2xs"></i>
          </div>

          {!searchOpen && (
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: 'white', cursor: 'pointer' }}
              onClick={() => dispatch('Search_On')}
            ></i>
          )}

          {searchOpen && (
            <div className={`navbar-search ${searchOpen ? 'active' : ''}`}>
              <i className="fa-solid fa-magnifying-glass input-icon"></i>
              <input type="text" placeholder="Search" className="input-field" onChange={(e) => setSearchTerm(e.target.value)}
                onClick={() => setShowSearchList(true)} />&nbsp;&nbsp;
              <i
                className="fa-solid fa-times input-close"
                style={{ cursor: 'pointer' }}
                onClick={() => { dispatch('Search_Off') }}
              ></i>
            </div>
          )}


          <div className='navbar-user' onClick={() => navigate('/loginsignup')}>
           { user ? <img src={user.image} alt="Profile" /> : <p><i class="fa-regular fa-user"></i></p>} 
          </div>
        </div>
      </nav>
      {showLocation && (
        <Location closePopup={() => setShowLocation(false)} UpdatedLocation={setLocation} />
      )}

      {showSearchList && (
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} closePopup={() => dispatch('Search_Off')} />
      )}
    </div>
  );
}

export default Navbar;
