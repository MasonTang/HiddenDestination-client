import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../sass/destination.scss"
import {Link} from 'react-router-dom'
import LiRiver from '../images/li-river.jpg'
import Machu from '../images/machu-pichu.jpg'
import Prague from '../images/prague.jpg'
import Sun from '../images/sun-road.jpg'
import Chef from '../images/chefchaouen.jpg'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'


const Destination = (props) => {

    return (
        <div className="destination-page">
            <Navbar />
            <main>
                <section className="search-country">
                    <div className="search-country-list">
                        <div className="search-country-list-left">
                            <Accordion>
                                <h1>Explore Hidden Destinations</h1>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <h2>+ Europe</h2>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="europe search-country-flex">
                                            <Link to="/country/europe/Albania">Albania</Link>
                                            <Link to="/country/europe/Armenia">Armenia</Link>
                                            <Link to="/country/europe/Austria">Austria</Link>
                                            <Link to="/country/europe/Belarus">Belarus</Link>
                                            <Link to="/country/europe/Belgium">Belgium</Link>
                                            <Link to="/country/europe/Bosnia">Bosnia</Link>
                                            <Link to="/country/europe/Bulgaria">Bulgaria</Link>
                                            <Link to="/country/europe/Croatia">Croatia</Link>
                                            <Link to="/country/europe/Cyprus">Cyprus</Link>
                                            <Link to="/country/europe/Czech Republic">Czech Republic</Link>
                                            <Link to="/country/europe/Denmark">Denmark</Link>
                                            <Link to="/country/europe/England">England</Link>
                                            <Link to="/country/europe/Finland">Finland</Link>
                                            <Link to="/country/europe/France">France</Link>
                                            <Link to="/country/europe/Georgia">Georgia</Link>
                                            <Link to="/country/europe/Germany">Germany</Link>
                                            <Link to="/country/europe/Greece">Greece</Link>
                                            <Link to="/country/europe/Hungary">Hungary</Link>
                                            <Link to="/country/europe/Iceland">Iceland</Link>
                                            <Link to="/country/europe/Ireland">Ireland</Link>
                                            <Link to="/country/europe/Italy">Italy</Link>
                                            <Link to="/country/europe/Lativa">Lativa</Link>
                                            <Link to="/country/europe/Liechtenstein">Liechtenstein</Link>
                                            <Link to="/country/europe/Lithuania">Lithuania</Link>
                                            <Link to="/country/europe/Luxembourg">Luxembourg</Link>
                                            <Link to="/country/europe/Macedonia">Macedonia</Link>
                                            <Link to="/country/europe/Malta">Malta</Link>
                                            <Link to="/country/europe/Moldova">Moldova</Link>
                                            <Link to="/country/europe/Monaco">Monaco</Link>
                                            <Link to="/country/europe/Montenegro">Montenegro</Link>
                                            <Link to="/country/europe/Netherlands">Netherlands</Link>
                                            <Link to="/country/europe/Norway">Norway</Link>
                                            <Link to="/country/europe/Poland">Poland</Link>
                                            <Link to="/country/europe/Portugal">Portugal</Link>
                                            <Link to="/country/europe/Romania">Romania</Link>
                                            <Link to="/country/europe/Russia">Russia</Link>
                                            <Link to="/country/europe/Serbia">Serbia</Link>
                                            <Link to="/country/europe/Slovakia">Slovakia</Link>
                                            <Link to="/country/europe/Slovenia">Slovenia</Link>
                                            <Link to="/country/europe/Spain">Spain</Link>
                                            <Link to="/country/europe/Sweden">Sweden</Link>
                                            <Link to="/country/europe/Switzerland">Switzerland</Link>
                                            <Link to="/country/europe/Turkey">Turkey</Link>
                                            <Link to="/country/europe/Ukraine">Ukraine</Link>
                                        </div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                       <h2>+ Asia</h2>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <div className="asia search-country-flex">
                                            <Link to="/country/asia/Azerbaijan">Azerbaijan</Link>
                                            <Link to="/country/asia/Brunei">Brunei</Link>
                                            <Link to="/country/asia/Cambodia">Cambodia</Link>
                                            <Link to="/country/asia/China">China</Link>
                                            <Link to="/country/asia/East Timor">East Timor</Link>
                                            <Link to="/country/asia/Hong Kong">Hong Kong</Link>
                                            <Link to="/country/asia/India">India</Link>
                                            <Link to="/country/asia/Indonesia">Indonesia</Link>
                                            <Link to="/country/asia/Japan">Japan</Link>
                                            <Link to="/country/asia/Kazakhstan">Kazakhstan</Link>
                                            <Link to="/country/asia/Kyrgystan">Kyrgystan</Link>
                                            <Link to="/country/asia/Laos">Laos</Link>
                                            <Link to="/country/asia/Macau">Macau</Link>
                                            <Link to="/country/asia/Malaysia">Malaysia</Link>
                                            <Link to="/country/asia/Mongolia">Mongolia</Link>
                                            <Link to="/country/asia/Myanmar">Myanmar</Link>
                                            <Link to="/country/asia/Nepal">Nepal</Link>
                                            <Link to="/country/asia/Pakistan">Pakistan</Link>
                                            <Link to="/country/asia/Philippines">Philippines</Link>
                                            <Link to="/country/asia/Saudi Arabia">Saudi Arabia</Link>
                                            <Link to="/country/asia/Singapore">Singapore</Link>
                                            <Link to="/country/asia/SouthKorea">South Korea</Link>
                                            <Link to="/country/asia/Sri Lanka">Sri Lanka</Link>
                                            <Link to="/country/asia/Taiwan">Taiwan</Link>
                                            <Link to="/country/asia/Tajikistan">Tajikistan</Link>
                                            <Link to="/country/asia/Thailand">Thailand</Link>
                                            <Link to="/country/asia/Uzbekistan">Uzbekistan</Link>
                                            <Link to="/country/asia/Vietnam">Vietnam</Link>
                                        </div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                       <h2>+ Middle East</h2>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <div className="middleEast search-country-flex">
                                            <Link to="/country/middleEast/Bahrain">Bahrain</Link>
                                            <Link to="/country/middleEast/Egypt">Egypt</Link>
                                            <Link to="/country/middleEast/Iran">Iran</Link>
                                            <Link to="/country/middleEast/Israel">Israel</Link>
                                            <Link to="/country/middleEast/Jordan">Jordan</Link>
                                            <Link to="/country/middleEast/Lebanon">Lebanon</Link>
                                            <Link to="/country/middleEast/Oman">Oman</Link>
                                            <Link to="/country/middleEast/Palestine">Palestine</Link>
                                            <Link to="/country/middleEast/UAE">UAE</Link>
                                        </div>     
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                       <h2>+ Africa</h2>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                    <div className="Africa search-country-flex">
                                        <Link to="/country/Africa/Algeria">Algeria</Link>
                                        <Link to="/country/Africa/Cameroon">Cameroon</Link>
                                        <Link to="/country/Africa/Ethiopia">Ethiopia</Link>
                                        <Link to="/country/Africa/Ghana">Ghana</Link>
                                        <Link to="/country/Africa/Ivory Coast">Ivory Coast</Link>
                                        <Link to="/country/Africa/Madagascar">Madagascar</Link>
                                        <Link to="/country/Africa/Morocco">Morocco</Link>
                                        <Link to="/country/Africa/Mozambique">Mozambique</Link>
                                        <Link to="/country/Africa/Nigeria">Nigeria</Link>
                                        <Link to="/country/Africa/Rwanda">Rwanda</Link>
                                        <Link to="/country/Africa/Senegal">Senegal</Link>
                                        <Link to="/country/Africa/South Africa">South Africa</Link>
                                        <Link to="/country/Africa/Tanzania">Tanzania</Link>
                                        <Link to="/country/Africa/Tunisia">Tunisia</Link>
                                        <Link to="/country/Africa/Uganda">Uganda</Link>
                                        <Link to="/country/Africa/Zambia">Zambia</Link>
                                        <Link to="/country/Africa/Zimbabwe">Zimbabwe</Link>
                                    </div>
                                        
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>

                        <div className="search-country-list-right">
                            <Accordion>

                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                       <h2>+ North America</h2>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    <div className="NorthAmerica search-country-flex">
                                        <Link to="/country/NorthAmerica/Antigua">Antigua and Barbuda</Link>
                                        <Link to="/country/NorthAmerica/Aruba">Aruba</Link>
                                        <Link to="/country/NorthAmerica/Bahamas">Bahamas</Link>
                                        <Link to="/country/NorthAmerica/Barbados">Barbados</Link>
                                        <Link to="/country/NorthAmerica/Canada">Canada</Link>
                                        <Link to="/country/NorthAmerica/Carribean Islands">Carribean Islands</Link>
                                        <Link to="/country/NorthAmerica/Cayman Islands">Cayman Islands</Link>
                                        <Link to="/country/NorthAmerica/Dominica">Dominica</Link>
                                        <Link to="/country/NorthAmerica/Dominican Republic">Dominican Republic</Link>
                                        <Link to="/country/NorthAmerica/Greenland">Greenland</Link>
                                        <Link to="/country/NorthAmerica/Hati">Hati</Link>
                                        <Link to="/country/NorthAmerica/Jamaica">Jamaica</Link>
                                        <Link to="/country/NorthAmerica/Mexico">Mexico</Link>
                                        <Link to="/country/NorthAmerica/Puerto Rico">Puerto Rico</Link>
                                        <Link to="/country/NorthAmerica/Virgin Islands">Virgin Islands</Link>
                                    </div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                       <h2>+ United States</h2>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <div className="united-states search-country-flex">
                                            <Link to="/country/united-states/Alabama">Alabama</Link>
                                            <Link to="/country/united-states/Alaska">Alaska</Link>
                                            <Link to="/country/united-states/Arizona">Arizona</Link>
                                            <Link to="/country/united-states/Arkansas">Arkansas</Link>
                                            <Link to="/country/united-states/California">California</Link>
                                            <Link to="/country/united-states/Colorado">Colorado</Link>
                                            <Link to="/country/united-states/Connecticut">Connecticut</Link>
                                            <Link to="/country/united-states/Delaware">Delaware</Link>
                                            <Link to="/country/united-states/Florida">Florida</Link>
                                            <Link to="/country/united-states/Georgia">Georgia</Link>
                                            <Link to="/country/united-states/Hawaii">Hawaii</Link>
                                            <Link to="/country/united-states/Idaho">Idaho</Link>
                                            <Link to="/country/united-states/Illinois">Illinois</Link>
                                            <Link to="/country/united-states/Indiana">Indiana</Link>
                                            <Link to="/country/united-states/Iowa">Iowa</Link>
                                            <Link to="/country/united-states/Kansas">Kansas</Link>
                                            <Link to="/country/united-states/Kentucky">Kentucky</Link>
                                            <Link to="/country/united-states/Louisiana">Louisiana</Link>
                                            <Link to="/country/united-states/Maine">Maine</Link>
                                            <Link to="/country/united-states/Maryland">Maryland</Link>
                                            <Link to="/country/united-states/Massachusetts">Massachusetts</Link>
                                            <Link to="/country/united-states/Michigan">Michigan</Link>
                                            <Link to="/country/united-states/Minnesota">Minnesota</Link>
                                            <Link to="/country/united-states/Mississippi">Mississippi</Link>
                                            <Link to="/country/united-states/Missouri">Missouri</Link>
                                            <Link to="/country/united-states/Montana">Montana</Link>
                                            <Link to="/country/united-states/Nebraska">Nebraska</Link>
                                            <Link to="/country/united-states/Nevada">Nevada</Link>
                                            <Link to="/country/united-states/New Hampshire">New Hampshire</Link>
                                            <Link to="/country/united-states/New Jersey">New Jersey</Link>
                                            <Link to="/country/united-states/New Mexico">New Mexico</Link>
                                            <Link to="/country/united-states/New York">New York</Link>
                                            <Link to="/country/united-states/North Carolina">North Carolina</Link>
                                            <Link to="/country/united-states/North Dakota">North Dakota</Link>
                                            <Link to="/country/united-states/Ohio">Ohio</Link>
                                            <Link to="/country/united-states/Oklahoma">Oklahoma</Link>
                                            <Link to="/country/united-states/Oregon">Oregon</Link>
                                            <Link to="/country/united-states/Pennsylvania">Pennsylvania</Link>
                                            <Link to="/country/united-states/Rhode Island">Rhode Island</Link>
                                            <Link to="/country/united-states/South Carolina">South Carolina</Link>
                                            <Link to="/country/united-states/South Dakota">South Dakota</Link>
                                            <Link to="/country/united-states/Tennessee">Tennessee</Link>
                                            <Link to="/country/united-states/Texas">Texas</Link>
                                            <Link to="/country/united-states/Utah">Utah</Link>
                                            <Link to="/country/united-states/Vermont">Vermont</Link>
                                            <Link to="/country/united-states/Virginia">Virginia</Link>
                                            <Link to="/country/united-states/Washington">Washington</Link>
                                            <Link to="/country/united-states/WestVirgina">West Virgina</Link>
                                            <Link to="/country/united-states/Wisconsin">Wisconsin</Link>
                                            <Link to="/country/united-states/Wyoming">Wyoming</Link>
                                        </div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                       <h2>+ Central America</h2>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <div className="CentralAmerica search-country-flex">
                                            <Link to="/country/CentralAmerica/Belize">Belize</Link>
                                            <Link to="/country/CentralAmerica/Costa Rica">Costa Rica</Link>
                                            <Link to="/country/CentralAmerica/El Salvador">El Salvador</Link>
                                            <Link to="/country/CentralAmerica/Guatemala">Guatemala</Link>
                                            <Link to="/country/CentralAmerica/Honduras">Honduras</Link>
                                            <Link to="/country/CentralAmerica/Nicaragua">Nicaragua</Link>
                                            <Link to="/country/CentralAmerica/Panama">Panama</Link>
                                        </div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                       <h2>+ South America</h2>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        <div className="SouthAmerica search-country-flex">
                                            <Link to="/country/SouthAmerica/Argentina">Argentina</Link>
                                            <Link to="/country/SouthAmerica/Bolivia">Bolivia</Link>
                                            <Link to="/country/SouthAmerica/Brazil">Brazil</Link>
                                            <Link to="/country/SouthAmerica/Chile">Chile</Link>
                                            <Link to="/country/SouthAmerica/Colombia">Colombia</Link>
                                            <Link to="/country/SouthAmerica/Ecuador">Ecuador</Link>
                                            <Link to="/country/SouthAmerica/French Guiana">French Guiana</Link>
                                            <Link to="/country/SouthAmerica/Guyana">Guyana</Link>
                                            <Link to="/country/SouthAmerica/Paraguay">Paraguay</Link>
                                            <Link to="/country/SouthAmerica/Peru">Peru</Link>
                                            <Link to="/country/SouthAmerica/Suriname">Suriname</Link>
                                            <Link to="/country/SouthAmerica/Uruguay">Uruguay</Link>
                                            <Link to="/country/SouthAmerica/Venezuela">Venezuela</Link>
                                        </div>     
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                       <h2>+ Oceania</h2>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        <div className="Oceania search-country-flex">
                                            <Link to="/country/Oceania/Australia">Australia</Link>
                                            <Link to="/country/Oceania/Fiji">Fiji</Link>
                                            <Link to="/country/Oceania/New Zealand">New Zealand</Link>
                                            <Link to="/country/Oceania/Samoa">Samoa</Link>
                                        </div>   
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </section>

                <section className="destination-pictures">
                    <h2>Traveler's Photos</h2>
                    <div className="destination-pictures-border">
                        <img src={Machu} alt="Machu Pichu"/>
                        <p>Machu Pichu </p>
                        <p>Photo from Willian Justen</p>
                    </div>
                    <div className="destination-pictures-border">
                        <img src={Chef} alt="Chefchaouen"/>
                        <p>Chefchaouen </p>
                        <p>Photo from Mohammed Lake</p>
                    </div>
                    <div className="destination-pictures-border">
                        <img src={Prague} alt="Prague"/>
                        <p>Prague </p>
                        <p>Photo from Raul Cacho Oses</p>
                    </div>
                    <div className="destination-pictures-border">
                        <img src={LiRiver} alt="Li River"/>
                        <p>Li River </p>
                        <p>Photo from Sam Beasley</p>
                    </div>
                    <div className="destination-pictures-border">
                        <img src={Sun} alt="Sun Road"/>
                        <p>Going-To-The-Sun Road </p>
                        <p>Photo from Tony Reid</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Destination
