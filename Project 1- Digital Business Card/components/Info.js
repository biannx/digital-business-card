import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="https://i.pinimg.com/736x/e6/9c/50/e69c50ce17e13c3b259a91d1893b65ba.jpg" />
            <h1>Bianca Aquino</h1>
            <h3>Frontend Developer</h3>
            <p>biancaaquino.website</p>
            <div className="email-linkedin-buttons">
            
                <button className="Email">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </button>

                <button className="LinkedIn">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </button>
                
            </div>
        </div>
    )
}