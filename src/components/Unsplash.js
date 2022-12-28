import React from 'react'

const Unsplash = (props) => {

    if(props.loading){
        return(
            <div>
                <p>Loading picture ...</p>
            </div>
        )
    } else {
        return (
            <div>
                <img className="unsplash" src={props.imageUrl} alt="country"/>
            </div>
        )
    }
   
}

export default Unsplash
