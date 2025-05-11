import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Sports.css';
import SportsLists from '../components/Shared/list/SportsLists';
import FilterBtn from '../components/Shared/ui/FilterBtn';
import Buttons from '../components/Shared/ui/Buttons';
import Filters from '../components/Shared/ui/Filters';


function Sports() {

  const sports = SportsLists[0]?.cricket

  const [showFilters, setShowFilters] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({ 
    date: [], 
    price: [], 
    categories: [], 
    more: [],
    games: [] 
  });
  
  const [filteredCricketEvents, setFilteredCricketEvents] = useState(() => {
    return sports ?? [];
  });

  const categories = ['Cricket','Football','Running','Chess','Cycling','Basketball']
  const games = ['Cricket','Football','Basketball']
  const more = ['Outdoor Events','Indoor Events','IPL','Kids Allowed']
  const price = ['Free','0-500','501-1000','1000-2000','Above 2000']
  const date = ['Today','Tomorrow','This Weekend','This Month']

  const getDateRange = (dateFilter) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const getNextWeekendDays = () => {
      const currentDay = today.getDay();
      const daysUntilSaturday = (currentDay === 6) ? 0 : (6 - currentDay);
      const daysUntilSunday = (currentDay === 0) ? 0 : (7 - currentDay);
      
      const saturday = new Date(today);
      saturday.setDate(today.getDate() + daysUntilSaturday);
      
      const sunday = new Date(today);
      sunday.setDate(today.getDate() + daysUntilSunday);
      
      return { saturday, sunday };
    };
    
    const getThisMonthRange = () => {
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
      const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      return { firstDay, lastDay };
    };
    
    const { saturday, sunday } = getNextWeekendDays();
    const { firstDay, lastDay } = getThisMonthRange();
    
    if (dateFilter === 'Today') {
      return { start: today, end: new Date(today.getTime() + 24 * 60 * 60 * 1000 - 1) };
    } else if (dateFilter === 'Tomorrow') {
      return { start: tomorrow, end: new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000 - 1) };
    } else if (dateFilter === 'This Weekend') {
      return { start: saturday, end: new Date(sunday.getTime() + 24 * 60 * 60 * 1000 - 1) };
    } else if (dateFilter === 'This Month') {
      return { start: firstDay, end: lastDay };
    }
    return null;
  };

  const isDateInRange = (dateStr, range) => {
    if (!dateStr || !range) return false;
    
    const eventDate = new Date(dateStr);
    eventDate.setHours(0, 0, 0, 0);
    
    return eventDate >= range.start && eventDate <= range.end;
  };

  useEffect(() => {
    let filtered = SportsLists[0].cricket;

    if (selectedRange) {
      filtered = filtered.filter(item =>
        item.price && item.price.some(price =>
          price >= selectedRange.min && price <= selectedRange.max
        )
      );
    }
    if (selectedFilters.price?.length > 0) {
      filtered = filtered.filter(item => {
        if (!item.price || item.price.length === 0) return false;
        
        return selectedFilters.price.some(priceRange => {
          if (priceRange === 'Free') {
            return item.price.some(p => p === 0);
          } else if (priceRange === 'Above 2000') {
            return item.price.some(p => p > 2000);
          } else {
            const [min, max] = priceRange.split('-').map(Number);
            return item.price.some(p => p >= min && p <= max);
          }
        });
      });
    }

    if (selectedFilters.categories?.length > 0) {
      filtered = filtered.filter(item => {
        return selectedFilters.categories.some(category => {
          const itemGame = (item.game || '').toLowerCase();
          const itemCategory = (item.category || '').toLowerCase();
          const categoryLower = category.toLowerCase();
          
          return itemGame.includes(categoryLower) || itemCategory.includes(categoryLower);
        });
      });
    }

    if (selectedFilters.more?.length > 0) {
      filtered = filtered.filter(item => {
        return selectedFilters.more.some(moreFilter => {
          if (moreFilter === 'Outdoor Events') return item.layout === 'Outdoor';
          if (moreFilter === 'Indoor Events') return item.layout === 'Indoor';
          if (moreFilter === 'IPL') return true;
          if (moreFilter === 'Kids Allowed') return item.kids === 'Yes';
          return false;
        });
      });
    }

    if (selectedFilters.date?.length > 0) {
      filtered = filtered.filter(item => {
        if (!item.on) return false;
        
        return selectedFilters.date.some(dateFilter => {
          const dateRange = getDateRange(dateFilter);
          if (!dateRange) return false;
          
          return isDateInRange(item.on, dateRange);
        });
      });
    }

    if (selectedFilters.games?.length > 0) {
      filtered = filtered.filter(item => {
        const itemGame = (item.game || '').toLowerCase();
        return selectedFilters.games.some(game => itemGame === game.toLowerCase());
      });
    }

    setFilteredCricketEvents(filtered);
  }, [selectedFilters, selectedRange]);

  const updatedFilters = (filters) => {
    setSelectedFilters({
      ...selectedFilters,
      date: filters.date || [],
      price: filters.price || [],
      categories: filters.categories || [],
      more: filters.type || [],
    });
 
    if (filters.price?.length > 0) {
      filters.price.forEach(priceFilter => {
        if (priceFilter === 'Free') {
          setSelectedRange({ min: 0, max: 0 });
        } else if (priceFilter === 'Above 2000') {
          setSelectedRange({ min: 2001, max: Number.MAX_SAFE_INTEGER });
        } else if (priceFilter.includes('-')) {
          const [min, max] = priceFilter.split('-').map(Number);
          setSelectedRange({ min, max });
        }
      });
    } else {
      setSelectedRange(null);
    }
  };

  const toggleFilter = (game) => {
    setSelectedFilters((prevFilters) => {
      let updatedFilters = { ...prevFilters, games: prevFilters.games || [] };

      if (updatedFilters.games.includes(game)) {
        updatedFilters.games = updatedFilters.games.filter((filter) => filter !== game);
      } else {
        updatedFilters.games = [...updatedFilters.games, game];
      }

      return updatedFilters;
    });
  };


    if (!sports || !Array.isArray(sports)) {
      return <h2 style={{ color: 'white', textAlign: 'center' }}>No Current Sports Events Found!!!</h2>;
    }

  return (
    <div>
      <div className="container header-container">
        <div className="hr-line" style={{ height: '2px',width: '30%',marginTop: '10px' }}></div>
        <div className="filtheader">
          <h2 style={{width: '100%', textAlign: 'center'}}>Sports in {localStorage.getItem('location')}</h2>
        </div>
        <div className="hr-line" style={{ height: '2px',width: '30%',marginTop: '10px' }}></div>
      </div>

      <div className="container filter-container">
        <ul className="filter-list">
          <li>
            <FilterBtn onClick={() => setShowFilters(true)} />
          </li>
          {games.map((game) => (
            <li key={`filters-${game}`}>
              <Buttons
                buttonSize={'btns--small'}
                buttonStyle={selectedFilters.games?.includes(game) ? 'btns--outline--bg' : 'btns--outline'}
                className={selectedFilters.games?.includes(game) ? 'active' : ''} 
                onClick={() => toggleFilter(game)}>
                {game}
              </Buttons>
            </li>
          ))}
        </ul>
      </div>

      <div className="container sports-container">
        {filteredCricketEvents.length > 0 ? (
          filteredCricketEvents.map((sport) => (
            <Link key={sport.id} to={`/sports/${encodeURIComponent(sport.team1 + '-vs-' + sport.team2)}`} state={{ match: sport }}>
              <div className="sports-view-card">
                <img src={sport.img} alt={sport.event} />
                <h3 className='match-title'>{`${sport.team1} - ${sport.team2}`}</h3>
                <div className="sports-context">
                  <p>{`${sport.date} | ${sport.time}`}</p>
                  <p>{sport.venue}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h2 style={{ color: 'white', textAlign: 'center' }}>No Sports Game found.</h2>
        )}
      </div>

      {showFilters && (
        <Filters
          name1={'Date'}
          name2={'Categories'}
          name3={'Price'}
          name4={'More Filters'}
          item1={date}
          item2={categories}
          item3={price}
          item4={more}
          closePopup={() => setShowFilters(false)}
          updateFilters={updatedFilters}
          selectedFilters={selectedFilters}
          setSelectedRange={setSelectedRange}
        />
      )}
    </div>
  );
}

export default Sports;