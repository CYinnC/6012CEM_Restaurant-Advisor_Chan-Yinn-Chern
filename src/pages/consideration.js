import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Consideration = ({ considerationList, removeFromConsideration }) => {
    return (
        <div className="p_container">
            <header className="header">
                <div className="header_title">Restaurant Advisor</div>
                <nav className="header_nav_buttons">
                    <Link className="header_nav_button" to="/">Home</Link>
                    <Link className="header_nav_button" to="/pages/search">Search</Link>
                    <Link className="header_nav_button" to="/pages/aboutus">About Us</Link>
                </nav>
            </header>


            <div className="page_description"><p><b>Consideration List</b></p></div>
            
            <div className="result_container">
                {considerationList.length > 0 ? (
                    considerationList.map((item, index) => (
                        <div key={index} className="item_card">
                            <img src={item.image} alt={item.name} className="item_image" />
                            <div className="item_info">
                                <h3>{item.name}</h3>
                                <p className="item_location"><a href={item.mapLink}>{item.location}</a></p>
                                <button className="delete_button" onClick={() => removeFromConsideration(item)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no_items_message">
                        <h1>No consideration at the moment.</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Consideration;
