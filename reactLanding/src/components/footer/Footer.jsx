import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className="container">
            <div className='wrapper'>
                <div className="left-wrap">
                    <h1 className="wrap-title">Contact us</h1>
                    <p className="c-details">
                       <i className="fa fa-location"></i> Contact us and we will get back to you within 24 hours.
                    </p>
                    <p className="c-details">
                        <i className="fa fa-map-marker"></i> kampala,Uganda
                    </p>
                    <p className="c-details">
                        <i className="fa fa-phone"></i> +256 778 800 900
                    </p>
                    <p className="c-details">
                        <i className="fa fa-phone"></i> +256 778 800 900
                    </p>   
                    <p className="c-details">
                        <i className="fa fa-envelope"></i> xyz@gmail.com
                    </p> 
                </div>
                <div className="right-wrap">
                    <p className="c-detail">
                        <b>What's your story? </b> Get in touch, Let's talk about the next big thing.
                    </p>
                    <form>
                        <input type='text' placeholder='Enter your name' required/>
                        <input type='email' placeholder='Enter your email address' required/>
                        <textarea rows='5' placeholder="Enter your comment" required></textarea>
                        <button type="submit">SEND NOW</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
