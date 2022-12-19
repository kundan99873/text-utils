import React, { useState } from 'react'

export default function About() {
    const enableDark = () =>{
        let newStyle = {
            color : "white",
            backgroundColor : "black"
        }
        let style2 = {
            color : "black",
            backgroundColor : "white"
        }
        if(myStyle.color === "white"){
            setMyStyle(style2)
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle(newStyle)
            setBtnText("Disable Dark Mode")
        }
    }

    const [myStyle, setMyStyle] = useState({
        color : "black",
        backgroundColor : "white"
    })

    const [btnText, setBtnText] = useState("Enable dark mode")
  return (
    <div>
      <div className="container" style={myStyle}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit inventore autem ut alias repellat provident, rem amet magnam aut illum neque itaque! Tempora laudantium amet vitae nemo laboriosam ab ipsam.</p>
        <button className="btn btn-outline-success" onClick={enableDark}>{btnText}</button>
      </div>
    </div>
  )
}
