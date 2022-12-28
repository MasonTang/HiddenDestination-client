import React from 'react'
import {Link} from 'react-router-dom'


const DisplayCity = (props) => {
    
    if(props.loading) {
        return (
            <div>
                <p>Loading Cities ...</p>
            </div>
        )
        
    } else {
        return (
            <div>
                <h1>{props.props.match.params.country} Cities</h1>
                    <ul>
                        {props.cities.map(city => (
                        <li key={city._id}>
                            { <Link to={`/blog/${city.region[0]}/${city.country[0]}/${city._id}`}>{city._id} ({city.total} blog post)</Link> }
                        </li>
                        ))}
                    </ul>
            </div>
        )
    }
}

export default DisplayCity


 