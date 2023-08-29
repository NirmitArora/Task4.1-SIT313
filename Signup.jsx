import React from 'react'

export const Signup = () => {
    return (
        <div className='signtext'>
            <form className="container" action="/subscribe">
                <h2 className="head">SIGN UP PROCESS</h2>
                <p className="signup-text">SIGN UP FOR OUR DAILY INSIDER</p>

                <input type="email" name="email" id="emailid" placeholder="Enter your email" />
                <button id="subscribe-btn">Subscribe</button>
            </form>
        </div>
    )
}
