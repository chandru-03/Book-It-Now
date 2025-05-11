import React, { useContext, useEffect, useState } from 'react'
import '.././styles/Profile.css'
import Buttons from '../components/Shared/ui/Buttons'
import { Link, useNavigate } from 'react-router-dom'
import ImageUploader from '../components/Shared/ui/ImageUploader'
import { UserContext } from '../context/UserContext'

function Profile() {
  const navigate = useNavigate()
  const [logout, setLogout] = useState(false)
  const {user} = useContext(UserContext);
  console.log(user);

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('user')
    setLogout(true)
    navigate('/loginsignup')
  }

  const handleBack = () => {
    navigate('/')
  }

  const handleAccountSettings = () => {
    navigate('/accountsettings', { state: { user } })
  }


  useEffect(() => {
    if (!user) {
      navigate('/loginsignup')
    }
  }, [navigate])

  return (
    <div>
      <div className="profile-close" >
        <i className="fa fa-arrow-left" aria-hidden="true" style={{ color: '#d3d3d3', cursor: 'pointer' }} onClick={handleBack}></i>
        <h5>Review Your Booking</h5>
      </div>
      <div className="container profile-container">

        <div className="profile-info">
          <img src={user?.image} alt='profile' />
          <div className="profile-details">
            <h2>{user?.name}</h2>
            <div className='profile-email'>
              <p>{user?.email}</p>
              <span className='vr-line' />
              <p>+91 - {user?.number}</p>
            </div>
          </div>
        </div>

        <h4>All Bookings</h4>
        <div className='profile-sub-containers'>
          <div className="bookings">
            <i className="fa fa-ticket fa-xl" aria-hidden="true"></i>
            <h5>Movie Tickets</h5>
          </div>
          <div className="bookings">
            <i className="fa-solid fa-users-rays fa-xl"></i>
            <h5>Event Tickets</h5>
          </div>
          <div className="bookings">
            <i className="fa fa-chair fa-xl" aria-hidden="true"></i>
            <h5>Table Tickets</h5>
          </div>
        </div>

        <h4>Vouchers</h4>
        <div className="con">
          <i className="fa fa-tags fa-xl" aria-hidden="true"></i>
          <h5>Collected Vouchers</h5>
          <i className="fa fa-angle-right fa-xl" aria-hidden="true"></i>
        </div>

        <h4>Manage</h4>
        <div className="con">
          <i className="fa fa-bell fa-xl" aria-hidden="true"></i>
          <h5>Movie Reminders</h5>
          <i className="fa fa-angle-right fa-xl" aria-hidden="true"></i>
          <span className='vr-line' />
          <i className="fa fa-credit-card fa-xl" aria-hidden="true"></i>
          <h5>Payment Setiings</h5>
          <i className="fa fa-angle-right fa-xl" aria-hidden="true"></i>
        </div>

        <h4>Payments</h4>
        <div className="con">
          <i className="fas fa-file-invoice fa-xl"></i>
          <h5>Dining Transactions</h5>
          <i className="fa fa-angle-right fa-xl" aria-hidden="true"></i>
        </div>

        <h4>Support</h4>
        <div className="con">
          <i className="fas fa-comment-dots fa-xl"></i>
          <h5>Frequently Asked Questions</h5>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
          <span className='vr-line' />
          <i className="fa-solid fa-message fa-xl"></i>
          <h5>Chat with us</h5>
          <i className="fa fa-angle-right fa-xl" aria-hidden="true"></i>
        </div>

        <h4>More</h4>
        <div className="con">
          <i className="fa fa-user-circle fa-xl" aria-hidden="true"></i>
          <h5 onClick={handleAccountSettings} style={{ cursor: 'pointer' }}>Account Settings</h5>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
          <i className="fa fa-info-circle fa-xl" aria-hidden="true"></i>
          <h5>About Us</h5>
          <i className="fa fa-angle-right fa-xl" aria-hidden="true"></i>
        </div>

        <h4>Admin Dashboard</h4>
        <div className="con" onClick={()=>navigate('/admindashboard')} style={{ cursor: 'pointer' }}>
          <span className="material-symbols-outlined" style={{marginBottom: '5px'}}>
            admin_panel_settings
          </span>
          <h5>Admin Panel</h5>
        </div>

        <br /><br /><br />

        <div className="con" onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-arrow-right-from-bracket fa-xl" style={{ color: "#f13939" }}></i>
          <h5>Log Out</h5>
          <i className="fa fa-angle-right fa-xl" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default Profile