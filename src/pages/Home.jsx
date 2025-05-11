import React, { useState, useEffect } from 'react';
import '.././styles/Pages.css';
import TrendingFooter from '../components/Shared/ui/TrendingFooter';
import movie from '../components/Shared/list/MoviesList';
import event from '../components/Shared/list/EventsList';
import sports from '../components/Shared/list/SportsLists';
import trend from '../components/Shared/list/TrendingList';
import { useLocation } from 'react-router-dom';
import Ticket from '../features/bookings/Ticket';
import Slider from '../components/Shared/ui/Slider';
import Cards from '../components/Shared/ui/Cards'
import Sports from './Sports';

function Home() {
    const location = useLocation();
    const [done, onDone] = useState(false);
    const item = location.state?.item;
    const sport = sports[0].cricket
    const language = location.state?.language

    useEffect(() => {
        if (item && item.state) {
            onDone(true);
        }
    }, [item]);

    return (
        <div>
            <Cards />
            {done && item?.state && (
                <Ticket item={item} language={language} onClick={() => onDone(false)} />
            )}
            <Slider item={movie} itemsPerPage={6} title="Trending Movies" seeAll="/movies" link="/movie" />
            <Slider item={event} itemsPerPage={6} title="Trending Events" seeAll="/events" link="/event" />
            <Slider item={sport} itemsPerPage={6} title="Trending Sports" seeAll="/sports" link2={(item) => `/sports/${encodeURIComponent(item.team1 + '-vs-' + item.team2)}`}
            />
            <br />
            <TrendingFooter trend={trend} item={movie} />
        </div>
    );
}

export default Home;
