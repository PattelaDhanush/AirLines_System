import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <div className="nav-button1">
            <h1>  
                <Link to="/Home">  
                    <i className="fa fa-code">AirLine Booking</i> 
                </Link>
            </h1>
            </div>
            <div className="nav-button2">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/Home" style={{ textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="#" style={{ textDecoration: 'none' }}>Book a Ticket</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="Booking_History" style={{ textDecoration: 'none' }}>Booking History</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}