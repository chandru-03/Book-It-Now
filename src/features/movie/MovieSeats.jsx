import React, { useEffect, useState, useContext } from 'react'
import '../../styles/MovieSeats.css'
import "../../styles/SelectItems.css";
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Seats from '../bookings/Seats';
import ProgressBar from '../../components/Shared/ui/ProgressBar';
import { LocationContext } from '../../context/LocationContext';

function MovieSeats() {
  const navigate = useNavigate();

  const { location: currentLocation, cinemaList } = useContext(LocationContext);
  
  const { name } = useParams();
  const cinema = cinemaList.find((cin) => decodeURIComponent(cin.name) === name);

  const location = useLocation();
  const movie = location.state?.movie;
  const date = location.state?.selectedDate;
  const selectedTime = location.state?.selectedTime;
  const availablity = location.state?.availablity;
  const seatInfo = location.state?.seatStatus;
  const timeInfo = location.state?.timeInfo;
  const price = location.state?.price;
  const screenType = location.state?.screen;
  const activeTime = location.state?.activeTime;
  const language = location.state?.language;

  console.log('Language in Movie Seats',language);
  

  const seatRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P'];
  const seatColumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  const [selectTime, setSelectedTime] = useState(activeTime)
  const [assignedTimings, setAssignedTimings] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [available, setAvailable] = useState(null);
  const seatStatus = availablity?.[available];
  const statusClass = availablity?.[available] || 'available';
  const [showProgress, setShowProgress] = useState(false);
  const [availableSeats, setAvailableSeats] = useState(0.0);



  useEffect(() => {
    if (seatStatus === 'filling-fast' || seatInfo === 'filling-fast') {
      setShowProgress(true);
      setAvailableSeats(0.4);
    } else if (seatStatus === 'almost-full' || seatInfo === 'almost-full') {
      setShowProgress(true);
      setAvailableSeats(0.8);
    } else if (seatStatus === 'not-available' || seatInfo === 'not-available') {
      setShowProgress(true);
      setAvailableSeats(0.99);
    } else if (seatStatus === 'available' || seatInfo === 'available') {
      setShowProgress(true);
      setAvailableSeats(0.1);
    } else {
      setShowProgress(true);
      setAvailableSeats(0.0);
    }

    const randomScreen = (screens, limit = 1) => {
      const shuffled = [...screens].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, limit);
    };

    const assignScreenType = (timings, screenTypes) => {
      return timings.map((time) => ({
        time,
        screen: randomScreen(screenTypes, 1)[0],
      }));
    };

    const generateBookedSeats = () => {
      const totalSeats = seatRows.length * seatColumns.length;
      const numBookedSeats = Math.max(1, Math.floor(totalSeats * parseFloat(availableSeats)));


      const allSeats = [];
      seatRows.forEach(row => {
        seatColumns.forEach(col => {
          allSeats.push(`${row}${col}`);
        });
      });

      const shuffledSeats = allSeats.sort(() => Math.random() - 0.5);
      return shuffledSeats.slice(0, numBookedSeats);
    };

    if (selectedTime && cinema?.screenType) {
      const result = assignScreenType([selectedTime], screenType);
      setAssignedTimings(result);

      const booked = {};
      result.forEach(({ time }) => {
        booked[time] = generateBookedSeats();
      });
      setBookedSeats(booked);
    }
  }, [cinema, availableSeats, selectedTime, available, availablity, seatStatus]);

  const handleNavigation = () => {
    navigate(-1)
  }

  return (
    <div>
      <div className='container-fluid show-timing-header'>
        <i className="fa fa-arrow-left fa-lg" style={{ color: 'white',cursor: 'pointer' }} onClick={handleNavigation}></i>
        <img src='/Assets/Cinema.png' alt="" />
        <div className="cinema-information">
          <h3>{cinema?.name}</h3>
          <p>{cinema?.location}</p>
        </div>
        <div className={`show-timings`}>
          {selectedTime?.map((time, index) => {
            const statusClass = availablity?.[index] || 'available';
            const screen = screenType?.[index];
            return(
            <div
              key={index}
              className={`cinema-time ${statusClass}  ${selectTime === time ? 'active' : ''}`}
              onClick={() => {
                console.log("Time clicked:", time);
                setSelectedTime(time);
                setAvailable(index)
              }}

            >
              <p>{time}</p>
              <span>{screen}</span>
            </div>
            )
          })}
        </div>
      </div>
      <Seats 
        selectTime={selectTime} 
        movie={movie} 
        selectedDate={date} 
        bookedSeats={bookedSeats[selectedTime] || []} 
        price={price} 
        cinema={cinema}
        language={language}
      />
      {showProgress &&
        (
          <ProgressBar message={"Loading..."} navigateTo={() => setShowProgress(false)} timeOut={1000} style={{ top: "45%", width: "200px", backgroundColor: '#e1e1e1', position: "fixed" }} />
        )
      }
    </div>
  )
}

export default MovieSeats