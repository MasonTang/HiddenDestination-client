import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import DisplayBlog from './DisplayBlog';
import Unsplash from './Unsplash'

const Blog = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const imageUrl = `https://source.unsplash.com/800x400/?${props.match.params.country},nature`;

    const url = `${process.env.REACT_APP_URL}blog/${props.match.params.region}/${props.match.params.country}/${props.match.params.city}`

//retrieving blogs
    useEffect(() => {
        try{
        setLoading(false)
        fetch(url)
            .then(response => response.json())
            .then(responseData => setBlogs(responseData))
        } catch(error) {
            setError(error)
        }
    }, [url])

    console.log(blogs)


    return (
        <div className="site-container">
            <Navbar />
            {error}
            <main className="site-content">
                <h1>{props.match.params.city} Blog Posts</h1>
                
                <div className="site-content-flex">

                    <section className="site-content-blogpost">
                        <DisplayBlog
                            blogs={blogs}
                            props={props}
                            loading={loading}
                        />
                    </section>

                    <section className="site-content-photo">
                        <Unsplash 
                        imageUrl={imageUrl}
                        loading={loading}
                        />
                    </section>
                </div>

            </main>
            
            <Footer />
        </div>
    )
}

export default Blog
