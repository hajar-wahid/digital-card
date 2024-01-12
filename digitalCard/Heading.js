import React from "react"

export default function Heading(){
    return (
        <div className = "header">
            <img className = "profile" src = "./myself.jpg"  alt = "My-profile-picture"/>
            <h3 className = "name">Hajar Wahid</h3>
            <h5 className = "title" >Front End Developer</h5>
            <h6 className = "email">hajarwahid@yahoo.com</h6>
            <button className = "btn">✉️ Email</button>
        </div>
    )
}