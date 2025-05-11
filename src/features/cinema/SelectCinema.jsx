import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Buttons from "../../components/Shared/ui/Buttons";
import FilterBtn from '../../components/Shared/ui/FilterBtn';
import Filters from "../../components/Shared/ui/Filters";
import "../../styles/SelectItems.css";
import { useCinemaSchedule } from "../../context/CinemaScheduleContext";
import Selector from "../../components/Shared/ui/Selector";

function SelectCinema() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const priceRange = ["0-100", "101-200", "201-300", "301-400", "401-500"];
  const seats = ["Balcony", "Couple Seats", "Wheelchairs", "Recliners"];

  const [selectedDate, setSelectedDate] = useState(null);
  const [nextDays, setNextDays] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({ price: [], seat: [] });
  const [cinema, setCinema] = useState([]);
  const [selectedRange, setSelectedRange] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [selectedCinemaInfo, setSelectedCinemaInfo] = useState(null);
  const { getScheduledDate, isInitialized } = useCinemaSchedule();

  const handleSelection = (cinema, status, time, screen) => {
    const cinemaInfo = {
      cinema,
      status,
      time,
      screen
    };
    setSelectedCinemaInfo(cinemaInfo);
    const languages = movie.language.split('/');
    
    if (languages.length === 1) {

      navigateToSeatLayout(cinema, status, time, screen, languages[0]);
    } else {
      setShowSelector(true);
    }
  };

  const navigateToSeatLayout = (cinema, status, time, screen, language) => {
    navigate(`/select/${encodeURIComponent(cinema.name)}/seatLayout`, {
      state: {
        movie,
        price: cinema.firstClass,
        selectedDate,
        screen: cinema.selectedScreen,
        selectedTime: cinema.selectTime,
        seatStatus: status,
        availablity: cinema.timingStatus,
        activeTime: time,
        timeInfo: {
          time,
          status,
          screen
        },
        cinemaName: cinema.name,
        cinemaLocation: cinema.location,
        dateInfo: selectedDate,
        language: language
      }
    });
  };

  const handleLanguageSelected = (language) => {
    if (!selectedCinemaInfo) return;
    
    const { cinema, status, time, screen } = selectedCinemaInfo;
    navigateToSeatLayout(cinema, status, time, screen, language);
  };

  useEffect(() => {
    const date = new Date();
    let daysArray = [{ type: "month", value: months[date.getMonth()] }];
    let lastMonthIndex = date.getMonth();

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date();
      nextDate.setDate(date.getDate() + i);

      const dayOfWeek = weekDays[nextDate.getDay()];
      const dayOfMonth = nextDate.getDate();
      const monthIndex = nextDate.getMonth();
      const monthName = months[monthIndex];

      if (monthIndex !== lastMonthIndex) {
        daysArray.push({ type: "month", value: monthName });
        lastMonthIndex = monthIndex;
      }

      daysArray.push({
        type: "day",
        day: dayOfWeek,
        date: dayOfMonth,
        month: monthName,
        fullDate: nextDate.toISOString().split('T')[0]
      });
    }

    setNextDays(daysArray);
    setSelectedDate(daysArray.find((item) => item.type === "day"));
  }, []);

  useEffect(() => {
    if (!selectedDate || !isInitialized) return;

    const scheduledDate = getScheduledDate(selectedDate);
    if (scheduledDate) {
      setCinema(scheduledDate);
    }
  }, [selectedDate, isInitialized, getScheduledDate]);

  useEffect(() => {
    if (!selectedDate) return;
    const scheduledDate = getScheduledDate(selectedDate);

    if (!scheduledDate) return;

    const filteredCinema = selectedRange ?
      scheduledDate.filter((cinema) => cinema.ticketPrice.some((price) => price >= selectedRange.min
        && price <= selectedRange.max))
      : scheduledDate;
    setCinema(filteredCinema);
  }, [selectedRange, selectedDate, getScheduledDate]);

  const updateFilter = (filters) => {
    setSelectedFilters({
      price: filters.price || [],
      seat: filters.seat || [],
    })
  }


  if (!movie) {
    return <div>Movie not found</div>;
  }

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="movie-info-container">
        <div className="movie-details-container">
          <div className="movie-details-background"></div>
          <div className="movie-details-text">
            <h1>{movie.title}</h1>
            <div className="movie-info">
              <p>{movie.movieRating}</p>
              <span className="vr-line" style={{ marginBottom: "20px" }} />
              <p>{movie.language}</p>
              <span className="vr-line" style={{ marginBottom: "20px" }} />
              <p>{movie.duration}</p>
            </div>
            <p>{movie.description}</p>
            <Buttons buttonSize={"btns--small"} buttonStyle={"btns--outline"}>
              View Details
            </Buttons>
          </div>
          <div className="movie-poster">
            <img src={movie.img} alt="Movie-Poster" />
          </div>
        </div>
      </div>

      <div className="filtering-section">
        <div className="select-date">
          {nextDays.map((item, index) =>
            item.type === "month" ? (
              <div key={index} className="month-container">
                <p>{item.value}</p>
              </div>
            ) : (
              <div
                key={index}
                className={`date-container ${selectedDate?.date === item.date && selectedDate?.month === item.month ? "active" : ""}`}
                onClick={() => { setSelectedDate(item); }}
              >
                <p>{item.day}</p>
                <p>{item.date}</p>
              </div>
            )
          )}
        </div>

        <div className="select-filter">
          <FilterBtn onClick={() => setShowFilters(true)} />
          {seats.map((seat, index) => (
            <div key={index}>
              <Buttons buttonSize={"btns--small"} buttonStyle={"btns--outline"}>
                {seat}
              </Buttons>
            </div>
          ))}
        </div>
      </div>

      <div className="seat-filters">
        <ul className="seat-filters-list">
          <li className="seat-list">
            <span className="available-dot" />
            <span>Available</span>
            <span className="filling-fast-dot" />
            <span>Filling Fast</span>
            <span className="almost-full-dot" />
            <span>Almost Full</span>
            <span className="not-available-dot" />
            <span>Not Available</span>
          </li>
        </ul>
      </div>

      <div className="select-container">
        {cinema?.map((cin, index) => (
          <div key={index} className="select-cinema">
            <div className="cinema-info-container">
              <img src={cin.img ? cin.img : "/Assets/Cinema.png"} alt="" />
              <div className="cinema-info">
                <h4>{cin.name}</h4>
                <p>{cin.location}</p>
                <span>
                  <i className="fa-regular fa-rectangle-xmark" style={{ color: "#d3d3d35f" }}></i>&nbsp;{cin.type}
                </span>
              </div>
            </div>

            {cin.selectTime?.map((time, idx) => {
              const screen = cin.selectedScreen[idx];
              const status = cin.timingStatus?.[idx] || 'available';
              return (
                <div 
                  key={idx} 
                  onClick={() => handleSelection(cin, status, time, screen)}
                >
                  <div className={`cinema-time ${status}`} style={{ cursor: "pointer" }}>
                    <p>{time}</p>
                    <div className="cinema-screen">
                      <span>{screen}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {showSelector && (
        <Selector 
          item={movie} 
          onClick={() => setShowSelector(false)} 
          setLanguage={handleLanguageSelected} 
        />
      )}

      {showFilters && (
        <Filters
          closePopup={() => setShowFilters(false)}
          selectedFilters={selectedFilters}
          updateFilters={updateFilter}
          style={{ top: "57rem" }}
          name1={'Price Range'}
          name2={'Seats'}
          item1={priceRange}
          item2={seats}
          setSelectedRange={setSelectedRange}
        />
      )}
    </div>
  );
}

export default SelectCinema;