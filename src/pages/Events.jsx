import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EventsList from '../components/Shared/list/EventsList';
import FilterBtn from '../components/Shared/ui/FilterBtn';
import Buttons from '../components/Shared/ui/Buttons';
import Filters from '../components/Shared/ui/Filters';



function Events() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ categories: [], type: [], price: [], date: [], language: [] });
  const [filteredItems, setFilteredItems] = useState(EventsList);
  const [selectedRange, setSelectedRange] = useState(null);
  const [shuffledItems, setShuffledItems] = useState([]);

  const date = ['Today', 'Tomorrow', 'This Weekend', 'This Month'];
  const categories = ['Music Shows', 'Comedy Shows', 'Award Shows', 'Workshops', 'Kids', 'Meetups',]
  const type = ['Outdoor Events','Indoor Events', 'Fast Filling', 'Kids Allowed'];
  const price = ['0-500', '501-1000', '1001-2000', '2001-5000', 'Above 5000'];
  const language = ['Tamil', 'English', 'Malayalam', 'Hindi', 'Telugu', 'Kannada'];


  const updateFilter = (filters) => {
    setSelectedFilters({
      ...selectedFilters,
      type: filters.type || [],
      categories: filters.categories || [],
      price: filters.price || [],
      date: filters.date || [],
    })
  }

  const getDateRange = (dateFilter) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const getNextWeekendDays = () => {
      const currentDay = today.getDay();
      const daysUntilSaturday = currentDay === 6 ? 0 : (6 - currentDay);
      const daysUntilSunday = currentDay === 0 ? 0 : (7 - currentDay);
      
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

  useEffect(() => {
    let filtered = EventsList;
    
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
          if (priceRange === 'Above 5000') {
            return item.price.some(p => p > 5000);
          } else {
            const [min, max] = priceRange.split('-').map(Number);
            return item.price.some(p => p >= min && p <= max);
          }
        });
      });
    }

    if (selectedFilters.language?.length > 0) {
      filtered = filtered.filter((item) =>
        selectedFilters.language.some((language) => item.language?.includes(language))
      );
    }

    if (selectedFilters.type?.length > 0) {
      filtered = filtered.filter((item) =>
        selectedFilters.type.some((typeItem) => item.type?.includes(typeItem))
      );
    }

    if (selectedFilters.categories?.length > 0) {
      filtered = filtered.filter((item) => 
        selectedFilters.categories.some((category) => item.category?.includes(category))
      );
    }

    if (selectedFilters.date?.length > 0) {
      filtered = filtered.filter(item => {
        if (!item.date) return false;
        const eventDate = new Date(item.date);
        return selectedFilters.date.some(dateFilter => {
          const dateRange = getDateRange(dateFilter);
          if (!dateRange) return false;
          
          return eventDate >= dateRange.start && eventDate <= dateRange.end;
        });
      });
    }

    setFilteredItems(filtered);

  }, [selectedRange, selectedFilters])

    useEffect(() => {
      const shuffled = [...filteredItems].sort(() => 0.5 - Math.random());
      setShuffledItems(shuffled);
    }, [filteredItems]);

  const toggleCategoryFilter = (show) => {
    setSelectedFilters((prev) => {
      let updatedFilters = { ...prev, categories: prev.categories || [] };

      if (updatedFilters.categories.includes(show)) {
        updatedFilters.categories = updatedFilters.categories.filter((filter) => filter !== show);
      } else {
        updatedFilters.categories = [...updatedFilters.categories, show];
      }
      return updatedFilters;
    })
  }

  return (
    <div>
      <div className="header-container">
        <div className="hr-line" style={{ height: '1px' }}></div>
        <h2>Events</h2>
        <div className="hr-line" style={{ height: '1px' }}></div>
      </div>

      <div className="container filter-container">
        <ul className="filter-list">
          <li>
            <FilterBtn onClick={() => setShowFilters(true)} />
          </li>
          {categories.map((category, index) => (
            <li key={`filters-${index}`}>
              <Buttons
                buttonSize="btns--small"
                buttonStyle={selectedFilters.categories?.includes(category) ? 'btns--outline--bg' : 'btns--outline'}
                className={`button ${selectedFilters.categories?.includes(category) ? 'active' : ''}`}
                onClick={() => toggleCategoryFilter(category)}
              >
                {category}
              </Buttons>
            </li>
          ))}
        </ul>
      </div>

      <div className="movie-container">
        {shuffledItems.length > 0 ? (
          shuffledItems.map((event) => (
            <Link key={event?.id} to={`/event/${event?.id}`}>
              <div className="movie-view-card">
                <img src={event?.img} alt={event?.title} />
                <h3>{event?.title}</h3>
                <div className="movie-context">
                  <p>{event?.artist}</p>
                  |
                  <p>{event?.type}</p>
                  |
                  <p>{event?.event}</p>
                </div>
                <p>{event?.place}</p>
              </div>
            </Link>
          ))
        ) : (
          <h2 style={{ color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>Currently no events found.</h2>
        )}
      </div>

      {showFilters && (
        <Filters
          name1={'Date'}
          name2={'Price'}
          name3={'Categories'}
          name4={'Type'}
          item1={date}
          item2={price}
          item3={categories}
          item4={type}
          closePopup={() => setShowFilters(false)}
          selectedFilters={selectedFilters}
          updateFilters={updateFilter}
          setSelectedRange={setSelectedRange}
        />
      )}
    </div>
  )
}

export default Events