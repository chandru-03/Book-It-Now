import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../../styles/SelectItems.css'
import Buttons from "../../components/Shared/ui/Buttons";
import FilterBtn from '../../components/Shared/ui/FilterBtn';
import { LocationContext } from "../../context/LocationContext";
import Filters from "../../components/Shared/ui/Filters";
import MoviesList from "../../components/Shared/list/MoviesList";
import { useCinemaSchedule } from "../../context/CinemaScheduleContext";
import cinemaImg from '../../asset/imgs/Cinema.png'

function CinemaViewer() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { cinemaList } = useContext(LocationContext);
    const { getScheduledMovie, isInitialized } = useCinemaSchedule();

    const [cinema, setCinema] = useState(null);
    const [movieList, setMovieList] = useState([]);
    const [movieTimings, setMovieTimings] = useState({});

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const priceRange = ["0-100", "101-200", "201-300", "301-400", "401-500"];
    const seats = ["Balcony", "Couple Seats", "Wheelchairs", "Recliners"];
    
    const [selectedDate, setSelectedDate] = useState(null);
    const [nextDays, setNextDays] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({ price: [], seat: [] });
    const [showDetails, setShowDetails] = useState(false);
    const [selectedRange, setSelectedRange] = useState(null);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        const foundCinema = cinemaList.find((m) => m.id === parseInt(id));
        console.log('Found cinema from cinemaList:', foundCinema);
        setCinema(foundCinema);
    }, [id, cinemaList]);

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
        const firstDayObj = daysArray.find((item) => item.type === "day");
        setSelectedDate(firstDayObj);
    }, []);

    useEffect(() => {
        if (!selectedDate || !cinema || !isInitialized) {
            console.error('Missing requirements for fetching schedules:', {
                selectedDate: !!selectedDate,
                cinema: !!cinema,
                isInitialized: !!isInitialized
            });
            return;
        }
        
        const schedules = getScheduledMovie(cinema.id, selectedDate.fullDate);
        setMovieTimings(schedules);
        
    }, [selectedDate, cinema, isInitialized, getScheduledMovie]);

    useEffect(() => {
        if (cinema && cinema.onGoingMovies && MoviesList) {
            const listOfMoviesRunning = MoviesList.filter(movie =>
                cinema.onGoingMovies.includes(movie.title));
            setMovieList(listOfMoviesRunning);
        }
    }, [cinema]);

    const updateFilter = (filters) => {
        setSelectedFilters({
            price: filters.price || [],
            seat: filters.seat || [],
        });
    };

    const cinemaInfo = () => {
        const info = [];
        if (cinema) {
            if (cinema.foodCourt) {
                info.push(<p key="foodCourt" style={{ margin: "0%", padding: "0%" }}><span className="material-symbols-outlined" style={{ color: "#B197FC", margin: "0%", padding: "0%" }}>local_dining</span>Food Court</p>);
            }
            if (cinema.fb) {
                info.push(<p key="fb" style={{ margin: "0%", padding: "0%" }}><span className="material-symbols-outlined" style={{ color: "#B197FC", margin: "0%", padding: "0%" }}>fastfood</span>Food Counter</p>);
            }
            if (cinema.parking) {
                info.push(<p key="parking" style={{ margin: "0%", padding: "0%" }}><span className="material-symbols-outlined" style={{ color: "#B197FC", margin: "0%", padding: "0%" }}>local_parking</span>Parking Available</p>);
            } else {
                info.push(<p key="noParking"><i className="fa-solid fa-parking" style={{ color: "#ff3d3d" }}></i> No Parking Available</p>);
            }
            if (cinema.mTicket) {
                info.push(<p key="mTicket" style={{ margin: "0%", padding: "0%" }}><span className="material-symbols-outlined" style={{ color: "#B197FC", margin: "0%", padding: "0%" }}>book_online</span>Mobile Tickets</p>);
            }
        }
        return info;
    };

    if (!cinema) {
        return <div><h1>Cinema not found</h1></div>;
    }

    console.log('Rendering movie list with length:', movieList.length);
    
    return (
        <div>
            <div className="movie-info-container">
                <div className="movie-details-container">
                    <div className="movie-details-background"></div>
                    <div className="movie-details-text">
                        <h1>{cinema.name + ' : ' + cinema.location}</h1>
                        <div className="movie-info">
                            <span className="material-symbols-outlined" style={{ color: "#B197FA", marginBottom: '20px' }}>
                                location_on
                            </span>
                            <p key={cinema.id}>{cinema.address}</p>
                        </div>
                        <div className="movie-info">
                            {showDetails && cinemaInfo()}
                        </div>
                        <Buttons 
                            buttonSize={"btns--medium"} 
                            buttonStyle={"btns--theme--violet"} 
                            onClick={() => setShowDetails(!showDetails)} 
                            type="button" 
                            style={{ cursor: 'pointer' }}
                        >
                            {showDetails ? "Hide Details" : "View Details"}
                        </Buttons>
                    </div>
                    <div className="movie-poster">
                        <img src={cinema?.img || cinemaImg} alt="Cinema-Poster" />
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
                                onClick={() => setSelectedDate(item)}
                            >
                                <p>{item.day}</p>
                                <p>{item.date}</p>
                            </div>
                        )
                    )}
                </div>

                <div className="select-filter">
                    <FilterBtn onClick={() => setShowFilters(true)} />
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
                {movieList?.map((movie, index) => {
                    const movieSchedule = movieTimings[movie.title] || {};
                    console.log(`Schedule for movie "${movie.title}":`, movieSchedule);
                    
                    return (
                        <div key={index} className="select-cinema">
                            <div className="cinema-info-container">
                                <img 
                                    src={movie.img} 
                                    alt={movie.title} 
                                    style={{ width: "200px", height: "130px", borderRadius: '7%', objectFit: 'cover' }} 
                                />
                                <div className="cinema-info">
                                    <h4 style={{ fontSize: '20px' }}>{movie.title}</h4>
                                    <p>{movie.language + ', ' + movie.format}</p>
                                    <p>{movie.duration}</p>
                                </div>
                            </div>

                            <div className="movie-timings-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                                {movieSchedule && movieSchedule.times && movieSchedule.times.length > 0 ? (
                                    movieSchedule.times.map((time, idx) => {
                                        const screen = movieSchedule.screens[idx] || 'Standard';
                                        const status = movieSchedule.statuses ? movieSchedule.statuses[idx] : 'available';
                                        console.log(`Time slot ${idx}:`, { time, screen, status });
                                        
                                        return (
                                            <div 
                                                key={idx} 
                                                onClick={() => {
                                                    navigate(`/select/${encodeURIComponent(cinema.name)}/seatLayout`, {
                                                        state: {
                                                            movie,
                                                            price: cinema.firstClass,
                                                            selectedDate,
                                                            screen: movieSchedule.screens,
                                                            selectedTime: movieSchedule.times,
                                                            seatStatus: status,
                                                            availablity: movieSchedule.statuses,
                                                            activeTime: time,
                                                            timeInfo: {
                                                                time,
                                                                status,
                                                                screen
                                                            },
                                                            cinemaName: cinema.name,
                                                            cinemaLocation: cinema.location,
                                                            dateInfo: selectedDate
                                                        }
                                                    });
                                                }}
                                            >
                                                <div className={`cinema-time ${status}`}>
                                                    <p>{time}</p>
                                                    <div className="cinema-screen">
                                                        <span>{screen}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="no-shows">
                                        <p>No shows available for this date</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

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

export default CinemaViewer;