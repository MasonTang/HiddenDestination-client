import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Unsplash from "./Unsplash"
import DisplayCity from './DisplayCity'
import Footer from './Footer'



const Country = props => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  console.log(cities)
  
  const url = `${process.env.REACT_APP_URL}cities/${props.match.params.country}`;
  const imageUrl = `https://source.unsplash.com/800x400/?${props.match.params.country},nature`;
//retrieving cities 
  useEffect(() => {
    setLoading(false)
    try{
      fetch(url)
        .then(response => response.json())
        .then(responseData => setCities(responseData))
       
    } catch (error){
      setError(error)
    }
  }, [url])



   return (
    <div>
      <div className="site-container">
        <Navbar />
        {error}
        <main className="site-content">
          
            <section className="city-search">

              <div className="city-search-form">
                <DisplayCity 
                  cities={cities}
                  props={props}
                  loading={loading}
                />
              </div>

              <div className="city-search-image">
                <Unsplash 
                  imageUrl={imageUrl}
                  loading={loading}
                />
              </div>

            </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Country;
