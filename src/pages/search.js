import React, { useState } from 'react';
import './style.css';
import r1 from '../images/r1.jpg';
import r2 from '../images/r2.jpg';
import r3 from '../images/r3.jpg';
import r4 from '../images/r4.jpg';
import r5 from '../images/r5.jpg';
import r6 from '../images/r6.jpg';
import { Link } from 'react-router-dom';


const items = [
  { name: 'Firewood Penang', image: r1,
     location: '19C, Medan Batu Lanchang, Jelutong, 11600 George Town, Pulau Pinang', rating: 4.8,
      mapLink: 'https://maps.app.goo.gl/SpDwCoUsEqUrkg729'
     },

  { name: 'Il Bacaro', image: r2, location: 'Campbell House, 106, Lebuh Campbell, Georgetown, 10200 George Town, Penang', rating: 4.4,
    mapLink:'https://maps.app.goo.gl/oKsUmSwXCn2sE4s47'
     },

  { name: 'Laksalicious', image: r3, location: '117A, Jalan Hutton, George Town, 10050 George Town, Pulau Pinang', rating: 4.5,
    mapLink:'https://maps.app.goo.gl/WGcw7Y2HwEyQtPJM9'
   },

  { name: 'He Shi Tang', image: r4, location: '613, Jalan Pasar, Pekan Ayer Itam, 11500 Ayer Itam, Pulau Pinang', rating: 4.8,
    mapLink:'https://maps.app.goo.gl/DvvvBSAPoAwdb1P8A'
   },

  { name: 'Restaurant Ferringhi Garden', image: r5, location: 'Jalan Batu Ferringhi, Kampung Batu Feringgi, 11100 Batu Ferringhi, Pulau Pinang', rating: 4.5,
    mapLink:'https://maps.app.goo.gl/9vrhMg55PVLesbnC7'
   },

  { name: 'White Smoke Restaurant', image: r6, location: '179, Victoria St, Georgetown, 10300 George Town, Penang', rating: 4.6,
    mapLink:'https://maps.app.goo.gl/VjCHcGHh9gn4f3pG7'
   },
  
];


const Search = ({ addToConsideration }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        const results = items.filter(item =>
            item.location.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredItems(results);
    };

    const renderStars = (rating) => {
        const stars = Math.round(rating);
        return '★'.repeat(stars) + '☆'.repeat(5 - stars) + ` (${rating})`;
    };

    return (
        <div className="p_container">
            <header className="header">
                <div className="header_title">Restaurant Advisor</div>
                <nav className="header_nav_buttons">
                    <Link className="header_nav_button" to="/">Home</Link>
                    <Link className="header_nav_button" to="/pages/consideration">Consideration</Link>
                    <Link className="header_nav_button" to="/pages/aboutus">About Us</Link>
                </nav>
            </header>

            <div className="page_description"><p><b>Begin searching for highly rated restaurants with just a search</b></p></div>

            <div className="search_container">
                <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search location" className="search_input" />
            </div>

            <div className="results_container">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div key={index} className="item_card">
                            <img src={item.image} alt={item.name} className="item_image" />
                            <div className="item_info">
                                <h3>{item.name}</h3>
                                <p className="item_rating">{renderStars(item.rating)}</p>
                                <p className="item_location"><a href={item.mapLink}>{item.location}</a></p>
                                <button className="add_button" onClick={() => addToConsideration(item)}>Add to Consideration</button>
                                
                            </div>
                        </div>
                    ))
                ) : (
                    searchTerm && <p>No results found for "{searchTerm}".</p>
                )}
            </div>
        </div>
    );
};

export default Search;
