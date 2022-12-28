import React, {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const CreateBlog = (props) => {
    const username = localStorage.getItem('username')
    const userId = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const initialFormState = {region:"", country:"", city:"", category:"", blog:"", username:username, userId:userId};

    const [blog, setBlog] = useState(initialFormState)
    const [error, setError] = useState('')

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setBlog({...blog, [name]: value})
    }

    const createBlog = blog => {
        const url = `${process.env.REACT_APP_URL}blog`
        fetch(url, {
            method:"POST",
            body: JSON.stringify(blog),
            headers:{
                "Content-Type": "application/json",
                "Authorization":'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(blogpost => {
            setBlog(blogpost)
            props.history.push('/destination')
            return blogpost
        })
        .catch(error => setError(error))
    }

    console.log(blog)
    let dropdown
    const selectCountry = <label htmlFor="blog-country">Select Country</label>    

    if(blog.region === "Europe"){
        dropdown = 
        <select required onChange={handleInputChange} name="country" id="blog-country">
            <option selected value="">Select Country</option>
            <option value="Albania">Albania</option>
            <option value="Armenia">Armenia</option>
            <option value="Austria">Austria</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Bosnia">Bosnia</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Croatia">Croatia</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="England">England</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="Italy">Italy</option>
            <option value="Lativa">Lativa</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Malta">Malta</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Norway">Norway</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Serbia">Serbia</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Turkey">Turkey</option>
            <option value="Ukraine">Ukraine</option>

        </select>
    }
    else if(blog.region === "Asia"){
        dropdown = 
        <select required onChange={handleInputChange} name="country" id="blog-country">
            <option selected value="">Select Country</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Brunei">Brunei</option>
            <option value="Cambodia">Cambodia</option>
            <option value="China">China</option>
            <option value="East Timor">East Timor</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Japan">Japan</option>
            <option value="Kyrgystan">Kyrgystan</option>
            <option value="Loas">Loas</option>
            <option value="Macau">Macau</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Nepal">Nepal</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Philippines">Philippines</option>
            <option value="Singapore">Singapore</option>
            <option value="South Korea">South Korea</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Thailand">Thailand</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vietnam">Vietnam</option>
        </select>
    }
    else if(blog.region === "Middle East"){
        dropdown = 
        <select required onChange={handleInputChange} name="country" id="blog-country">
            <option selected value="">Select Country</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Egypt">Egypt</option>
            <option value="Iran">Iran</option>
            <option value="Israel">Israel</option>
            <option value="Jordan">Jordan</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Oman">Oman</option>
            <option value="Palestine">Palestine</option>
        </select>
    }
    else if(blog.region === "Africa"){
        dropdown = 
        <select required onChange={handleInputChange} name="country" id="blog-country">
            <option selected value="">Select Country</option>
            <option value="Algeria">Algeria</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Ghana">Ghana</option>
            <option value="Ivory Coast">Ivory Coast</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Senegal">Senegal</option>
            <option value="South Africa">South Africa</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Uganda">Uganda</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
        </select>
    }
    else if(blog.region === "North America"){
        dropdown = 
        <select required onChange={handleInputChange} name="country" id="blog-country">
            <option selected value="">Select Country</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Aruba">Aruba</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Barbados">Barbados</option>
            <option value="Canada">Canada</option>
            <option value="Carribean Islands">Carribean Islands</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Greenland">Greenland</option>
            <option value="Hati">Hati</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Mexico">Mexico</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Virgin Islands">Virgin Islands</option>
        </select>
    }
    else if(blog.region === "United States"){
        dropdown = 
        <select required onChange={handleInputChange} name="country" id="blog-country">
            <option selected value="">Select Country</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virgina">West Virgina</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
        </select>
    }
    else if(blog.region === "Central America"){
        dropdown = 
        <select required onChange={handleInputChange} name="country" id="blog-country">
            <option selected value="">Select Country</option>
            <option value="Belize">Belize</option> 
            <option value="Costa Rica">Costa Rica</option> 
            <option value="El Salvador">El Salvador</option> 
            <option value="Guatemala">Guatemala</option> 
            <option value="Honduras">Honduras</option> 
            <option value="Nicaragua">Nicaragua</option> 
            <option value="Panama">Panama</option> 
        </select>
    }
    else if(blog.region === "South America"){
        dropdown = 
        <select required onChange={handleInputChange} name="country" id="blog-country">
            <option selected value="">Select Country</option>
            <option value="Argentina">Argentina</option> 
            <option value="Bolivia">Bolivia</option> 
            <option value="Brazil">Brazil</option> 
            <option value="Chile">Chile</option> 
            <option value="Colombia">Colombia</option> 
            <option value="Ecuador">Ecuador</option> 
            <option value="French Guiana">French Guiana</option> 
            <option value="Guyana">Guyana</option> 
            <option value="Paraguay">Paraguay</option> 
            <option value="Peru">Peru</option> 
            <option value="Suriname">Suriname</option> 
            <option value="Uruguay">Uruguay</option> 
            <option value="Venezuela">Venezuela</option> 
        </select>
    }
    else if(blog.region === "Oceania"){
        dropdown = 
        <select required onChange={handleInputChange} name="country" id="blog-country">
            <option selected value="">Select Country</option>
            <option value="Australia">Australia</option> 
            <option value="Fiji">Fiji</option> 
            <option value="New Zealand">New Zealand</option> 
            <option value="Samoa">Samoa</option> 
        </select>
    }

    return (
        <div className="site-container">
            <Navbar />
            <main className="site-content">
                {error}
                <form
                    onSubmit={event =>{
                        event.preventDefault()
                        createBlog(blog)
                    }}
                >
                    <h1>Create A Blog Post</h1>
                    
                    <div className="dropdown">
                        <label htmlFor="blog-region">Where</label>
                        <div>
                            <select required onChange={handleInputChange} name="region" id="blog-country">
                                <option name="region" value="">Select Region</option>
                                <option name="region" value="Europe">Europe</option>
                                <option name="region" value="Asia">Asia</option>
                                <option name="region" value="Middle East">Middle East</option>
                                <option name="region" value="Africa">Africa</option>
                                <option name="region" value="North America">North America</option>
                                <option name="region" value="United States">United States</option>
                                <option name="region" value="Central America">Central America</option>
                                <option name="region" value="South America">South America</option>
                                <option name="region" value="Oceania">Oceania</option>
                            </select>
                        </div>
                    </div>
                   
                    <div className="dropdown">
                        {blog.region ? selectCountry : ""}
                        <div>
                            {dropdown}
                        </div>
                    </div>

                    <p>Add City</p>
                    <input 
                        required
                        type="text"
                        placeholder="Minca"
                        name="city"
                        onChange={handleInputChange}
                    />

                    <div className="dropdown">
                        <label htmlFor="Category">Category</label>
                        <div>
                            <select required onChange={handleInputChange} name="category" id="blog-country">
                                <option value="">Select a Category</option>
                                <option value="Personal Blog">Personal Blog</option>
                                <option value="Nature">Nature</option>
                                <option value="Adventures">Adventures</option>
                                <option value="Foods">Foods</option>
                                <option value="Parties">Parties</option>
                                <option value="Hostel">Hostel</option>
                                <option value="Family">Family</option>
                            </select>
                        </div>
                    </div>

                    <p>Create a blog</p>
                    <textarea
                        required
                        minLength="20"
                        type="text"
                        name="blog"
                        className="blogbox"
                        placeholder="Blog till your heart is content! Minimum length is 20 characters"
                        onChange={handleInputChange}
                    />
                    <div>
                    <button
                        type="submit"
                        className="submit-blog"
                    >
                        Submit
                    </button>
                    </div>

                </form>
            </main>
            <Footer />
        </div>
    )
}

export default CreateBlog
