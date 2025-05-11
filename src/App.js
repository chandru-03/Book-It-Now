import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home';
import Movies from './pages/Movies';
import Events from './pages/Events';
import Profile from './pages/Profile';
import MovieViewer from './features/movie/MovieViewer';
import SelectCinema from './features/cinema/SelectCinema';
import MovieSeats from './features/movie/MovieSeats';
import Payment from './features/payments/Payment';
import LoginSignup from './features/auth/LoginSignup';
import AccountSettings from './features/auth/AccountSettings';
import SportsViewer from './features/sports/SportsViewer';
import Sports from './pages/Sports';
import SportsSeat from './features/sports/SportsSeat';
import CricketSeats from './features/sports/CricketSeats';
import TicketOptions from './features/sports/TicketOptions';
import PaymentConfirmation from './features/payments/PaymentConfirmation';
import EventViewer from './features/events/EventViewer';
import EventSeats from './features/events/EventSeats';
import CinemaViewer from './features/cinema/CinemaViewer';
import EventSeatViewer from './features/events/EventSeatViewer';
import AddCinemaForm from './features/admin/AddCinemaForm';
import Book from './features/bookings/Book';
import AdminDashBoard from './features/admin/AdminDashBoard';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/sports" element={<Sports/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/profile" element={<Profile/>} />  
        
        <Route path="/movie/:id" element={<MovieViewer />} />
        <Route path="/sports/:teams" element={<SportsViewer/>} />
        <Route path='event/:id' element={<EventViewer/>}/>
        <Route path='/cinema/:id' element={<CinemaViewer/>}/>
        <Route path='/event/:id/seat' element={<EventSeatViewer/>}/>

        <Route path="/movie/:title/select" element={<SelectCinema/>} />

        <Route path="/seatmap/:teams/sports" element={<SportsSeat/>} />
        <Route path='/select/:name/seatLayout' element={<MovieSeats/>}/>
        <Route path='/eventSeat' element={<EventSeats/>}/>
        <Route path="/seatSelect" element={<CricketSeats/>} />

        <Route path='/book' element={<Book/>}/>

        <Route path='/payment' element={<Payment/>}/>
        <Route path='/finalpayment' element={<PaymentConfirmation/>}/>
        <Route path='/ticketoptions' element={<TicketOptions/>}/>

        <Route path="/loginsignup" element={<LoginSignup/>} />
        
        <Route path='/admindashboard' element={<AdminDashBoard/>}/>
        <Route path='/addcinema' element={<AddCinemaForm/>}/>
        <Route path="/accountsettings" element={<AccountSettings/>} />
      </Routes>
    </div>
  );
}

export default App;
