import React, { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";


export const CinemaScheduleContext = createContext();

export const CinemaScheduleProvider = ({ children }) => {
    const { cinemaList } = useContext(LocationContext);
    const [scheduledData, setScheduledData] = useState({});
    const [movieSchedule, setMovieSchedule] = useState({});
    const [isInitialized, setIsInitialized] = useState(false);

    const seatStatus = ['available', 'filling-fast', 'almost-full', 'not-available'];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const randomizeScreen = (screens, limit = 5) => {
        if (!Array.isArray(screens)) {
            console.error('randomizeScreen received non-array:', screens);
            return Array(limit).fill('Standard');
        }
        
        const shuffled = [...screens];
        while (shuffled.length < limit) {
            shuffled.push(...screens);
        }
        return shuffled.slice(0, limit);
    };

    const randomizeArray = (time, minLimit = 5, maxLimit = 12) => {
        if (!Array.isArray(time)) {
            console.error('randomizeArray received non-array:', time);
            const defaultTimes = ['10:00 AM', '12:30 PM', '3:15 PM', '6:00 PM', '8:45 PM'];
            return defaultTimes.slice(0, minLimit);
        }
        
        const shuffled = [...time].sort(() => 0.5 - Math.random());
        const limit = Math.floor(Math.random() * (maxLimit - minLimit + 2)) + minLimit;
        return shuffled.slice(0, limit);
    };

    const randomStatus = (length) => {
        return Array(length).fill().map(() => {
            const randomIndex = Math.floor(Math.random() * seatStatus.length);
            return seatStatus[randomIndex];
        });
    };

    useEffect(() => {
        if(!cinemaList?.length || isInitialized) {
            return ;
        }
        
        const date = new Date();
        const schedules = {};
        const movieScheduleByDate = {};

        for (let i = 0; i < 7; i++) {
            const nextDate = new Date();
            nextDate.setDate(date.getDate() + i);

            const dayOfWeek = weekDays[nextDate.getDay()];
            const dayOfMonth = nextDate.getDate();
            const monthIndex = nextDate.getMonth();
            const monthName = months[monthIndex];
            const fullDate = nextDate.toISOString().split('T')[0];
            
            schedules[fullDate] = cinemaList.map((cin) => {
                const shuffledTimes = randomizeArray(cin.timings, 5, 7);
                const shuffledScreens = randomizeScreen(cin.screenType, shuffledTimes.length);
                const status = randomStatus(shuffledTimes.length);
                return {
                    ...cin,
                    selectedScreen: shuffledScreens,
                    selectTime: shuffledTimes,
                    timingStatus: status,
                    dateInfo: {
                        day: dayOfWeek,
                        date: dayOfMonth,
                        month: monthName,
                        fullDate
                    }
                };
            });

            movieScheduleByDate[fullDate] = {};

            cinemaList.forEach((cinema) => {
                const moviesRunning = cinema.onGoingMovies || [];
                
                if(!movieScheduleByDate[fullDate][cinema.id]){
                    movieScheduleByDate[fullDate][cinema.id] = {};
                }
                
                moviesRunning.forEach((title) => {
                    const timings = Array.isArray(cinema.timings) ? cinema.timings : 
                        ['10:00 AM', '12:30 PM', '3:15 PM', '6:00 PM', '8:45 PM'];
                    
                    const screenTypes = Array.isArray(cinema.screenType) ? cinema.screenType : 
                        ['Standard', 'Premium', 'IMAX'];
                    
                    const shuffledTimes = randomizeArray(timings, 5, 9);
                    const shuffledScreens = randomizeScreen(screenTypes, shuffledTimes.length);
                    const statuses = randomStatus(shuffledTimes.length);
                    
                    movieScheduleByDate[fullDate][cinema.id][title] = {
                        screens: shuffledScreens,
                        times: shuffledTimes,
                        statuses: statuses,
                        dateInfo: {
                            day: dayOfWeek,
                            date: dayOfMonth,
                            month: monthName,
                            fullDate
                        }
                    };
                });
            });
        }

        setScheduledData(schedules);
        setMovieSchedule(movieScheduleByDate);
        setIsInitialized(true);
        
    }, [cinemaList, isInitialized]);

    const getScheduledDate = (date) => {
        if (!date) return [];
        const dateKey = typeof date === 'object' ? date.fullDate : date;
        return scheduledData[dateKey] || [];
    };

    const getScheduledMovie = (cinemaId, date) => {
        if (!date || !cinemaId) {
            return {};
        }
        
        const dateKey = typeof date === 'object' ? date.fullDate : date;
        const result = (movieSchedule[dateKey]?.[cinemaId]) || {};
        
        console.log('getScheduledMovie result for', { cinemaId, dateKey }, ':', result);
        return result;
    };

    const getMovieSchedule = (date, cinemaId, title) => {
        if(!date || !cinemaId || !title) return null;
        const dateKey = typeof date === 'object' ? date.fullDate : date;
        return movieSchedule[dateKey]?.[cinemaId]?.[title] || null;
    };

    const storeScheduledDate = (date, schedule) => {
        const dateKey = typeof date === 'object' ? date.fullDate : date;
        setScheduledData(prev => ({...prev, [dateKey]: schedule}));
    };

    const resetScheduledData = () => {
        setScheduledData({});
        setMovieSchedule({});
        setIsInitialized(false);
    };

    const isSchedulesReady = (date) => {
        if (!date) return false;
        const dateKey = typeof date === 'object' ? date.fullDate : date;
        return !!scheduledData[dateKey];
    };
    const forceInitialize = () => {
        if (isInitialized) {
            return;
        }
        
        if (!cinemaList?.length) {
            return;
        }
        
        setIsInitialized(false);
    };
    
    return (
        <CinemaScheduleContext.Provider value={{
            scheduledData,
            movieSchedule,
            getScheduledDate,
            getMovieSchedule,
            getScheduledMovie,
            storeScheduledDate,
            resetScheduledData,
            isSchedulesReady,
            isInitialized,
            forceInitialize
        }}>
            {children}
        </CinemaScheduleContext.Provider>
    );
};

export default CinemaScheduleProvider;

export const useCinemaSchedule = () => {
    const context = useContext(CinemaScheduleContext);
    if (!context) {
        throw new Error("useCinemaSchedule must be used within a CinemaScheduleProvider");
    }
    return context;
};