import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main_container">
      <div className="title_bar">Restaurant Advisor</div>
      <div className="nav_buttons">
        <Link className="nav_button" to="/pages/search"><h1>Search</h1></Link>
        <Link className="nav_button" to="/pages/consideration"><h1>Consideration</h1></Link>
        <Link className="nav_button" to="/pages/aboutus"><h1>About Us</h1></Link>
      </div>

      <div className="info_container">
  <h1 className="guide_title">Website Guide</h1>
  
  <div className="section">
    <h2 className="sub_header">Search Page </h2>
    <p className="description">To start using the search feature first go to the search page, 
      type in the search bar the location you want and all the restuarant located there will show up. You will be able
      to also add the restuarant you are considering into the consideration list. </p>
  </div>

  <div className="section">
    <h2 className="sub_header">Consideration Page</h2>
    <p className="description">The consideration page will be a page that will show all the 
      restuarant that you are interested in going in one place to help you make a more efficent choice.</p>
  </div>

  <div className="section">
    <h2 className="sub_header">About Us Page</h2>
    <p className="description">If you are curous of learning more regarding the purpose of the
       website and the people behind it click the about us button to look at all the information there.</p>
  </div>
</div>



    </div>



  );
};

export default Main;
