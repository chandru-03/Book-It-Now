import React, { useState } from 'react';
import '../../styles/Sports.css'
import { useNavigate, useParams } from 'react-router-dom';
import sports from '../../components/Shared/list/SportsLists';
import Slider from '../../components/Shared/ui/Slider';
import EventGuide from '../events/EventGuide';
import EventInfo from '../../components/Shared/ui/EventInfo';


function SportsViewer() {
  const { teams } = useParams();
  const allMatches = sports[0].cricket;

  const navigate = useNavigate();

  const selectedMatch = allMatches.find((match) => {
    const matchUrl = `${match.team1}-vs-${match.team2}`;
    return decodeURIComponent(teams) === matchUrl;
  });

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = new Date();

  const currentMonth = months[month.getMonth()];

  const [show, setShow] = useState(false);
  const text = selectedMatch?.des
  const [showGuide, setShowGuide] = useState(false)
  const truncatedText = text?.split('.').splice(0, 3).join('. ') + "...";

  const handleClick = () => {
    navigate('/seatmap/' + encodeURIComponent(selectedMatch.team1 + '-vs-' + selectedMatch.team2) + '/sports', { state: { match: selectedMatch } });
  }

  if (!selectedMatch) {
    return (
      <h1>Match not found!</h1>
    );
  }

  return (
    <div>
      <div className="match-container">
        <div className="match-header">
          <img src={selectedMatch?.largeImg} alt='' />
          <div>
            <h4>
              Tata IPL 2025 &nbsp;
              {selectedMatch?.team1} vs {selectedMatch?.team2}
            </h4>
            <div>
              <i className="fa-solid fa-medal"></i>
              <p>{selectedMatch.game}</p>
            </div>
            <div>
              <i className="fa-regular fa-calendar"></i>
              <p>{currentMonth + ' ' + selectedMatch.date.toLocaleLowerCase() + '    ' + selectedMatch.time.toLocaleLowerCase()}</p>
            </div>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <p>{selectedMatch.venue + ', ' + selectedMatch.location}</p>
            </div>
            <br /><br />
            <div className="match-price">
              <h5>₹ {selectedMatch.priceStarts} Onwards</h5>
              <button type="button" className="btns btns--medium btns--theme--violet" style={{zIndex:'1'}} onClick={handleClick}>
                Book Tickets
              </button>
            </div>
          </div>
        </div>
        <div className="container match-about">
          <h5>About the Event</h5>
          <div>
            <p>{show ? text : truncatedText}</p>
            <button
              onClick={() => setShow(!show)}>
              {show ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
        <div className="container match-about">
          <h5>Venue</h5>
          <h6>{selectedMatch.venue}</h6>
          <p>{selectedMatch.address}</p>
        </div>
        <div className='container match-about'>
          <div  style={{display:'flex',justifyContent:'space-between',width:'50%',flexDirection:'row'}}>
          <h5>Event Guide</h5>
          <span style={{color:'#8F00FF'}} 
          onClick={() => setShowGuide(true)}>See All <i className="fa-solid fa-caret-right"></i></span>
          </div>
          <EventInfo item={selectedMatch} />
        </div>
        <div className='container-fluid'>
          <Slider item={sports[0].cricket} itemsPerPage={10} title="Trending Sports" seeAll="/sports" link="/sport" />
        </div>
      </div>
      {showGuide && <EventGuide item={selectedMatch} close={() => setShowGuide(false)} />}
    </div>
  );
}

export default SportsViewer;
