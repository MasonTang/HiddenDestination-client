import React from 'react'
import "../sass/homepage.scss"
import {Link} from 'react-router-dom'

const Main = () => {
    const auth = localStorage.getItem('token')
    let navigation

    const notLoggedIn = 
        <main>
            <section className="mission">
                <h1 className="underline">We are Travelers</h1>
                <p>Like you, traveling is in our blood and we love discovering hidden destinations. 
                    Our mission is to create a backpackers community in which you can a blog about a 
                    city or find your next off-the-beaten-path travel destination.</p>
            </section>
            <hr/>
            <section className="blog-flex">
                <Link to="/register" className="blog">
                    <h2>Create New Stories</h2>
                </Link>
                <Link to="/destination" className="destination">
                    <h2>Find Destinations</h2>
                </Link> 
            </section>
            <section className="destination-list">
                <h1>Traveler's Gallery</h1>
                    <div className="gallery-flex">
                        <div className="destination-list-photo-1 photos">Guatepe</div>
                        <div className="destination-list-photo-2 photos">Lake Bled</div>
                        <div className="destination-list-photo-3 photos">Mostar</div>
                        <div className="destination-list-photo-4 photos">Phuket</div>
                        <div className="destination-list-photo-5 photos">Sevilla</div>
                        <div className="destination-list-photo-6 photos">Lake Atilan</div>
                    </div>
            </section>
            <section className="mission">
                <Link to=""><h1 className="underline">Contribute Today</h1></Link>
                <p>Create your first blog post today and help other travelers find hidden destinations!</p>
            </section>
        </main>

    const loggedIn =
    <main>
            <section className="mission">
                <h1 className="underline">We are Travelers</h1>
                <p>Like you, traveling is in our blood and we love discovering hidden destinations. 
                    Our mission is to create a backpackers community in which you can a blog about a 
                    city or find your next off-the-beaten-path travel destination.</p>
            </section>
            <hr/>
            <section className="blog-flex">
                <Link to="/createblog" className="blog">
                    <h2>Create New Stories</h2>
                </Link>
                <Link to="/destination" className="destination">
                    <h2>Find Destinations</h2>
                </Link> 
            </section>
            <section className="destination-list">
                <h1>Traveler's Gallery</h1>
                    <div className="gallery-flex">
                        <div className="destination-list-photo-1 photos">Guatepe</div>
                        <div className="destination-list-photo-2 photos">Lake Bled</div>
                        <div className="destination-list-photo-3 photos">Mostar</div>
                        <div className="destination-list-photo-4 photos">Phuket</div>
                        <div className="destination-list-photo-5 photos">Sevilla</div>
                        <div className="destination-list-photo-6 photos">Lake Atilan</div>
                    </div>
            </section>
            <section className="mission">
                <Link to=""><h1 className="underline">Contribute Today</h1></Link>
                <p>Create your first blog post today and help other travelers find hidden destinations!</p>
            </section>
        </main>

if(auth === null){
    navigation = notLoggedIn
} else{
 navigation = loggedIn
}

    return (
    <div>
       {navigation}
    </div>
    )
}

export default Main
