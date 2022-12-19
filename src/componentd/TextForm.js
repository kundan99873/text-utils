import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {

    // const inputText = document.getElementById("inputText")
    const handleUpClick = () => {
        console.log("Button clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to UPPERCASE")
    }

    const copyText = () =>{
        var txt = document.getElementById("inputText");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Text copy to clipboard")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowClick = () => {
        console.log("Button clicked")
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase")
    }
    const handleClick = () => {
        console.log("Button clicked")
        setText("")
        props.showAlert("Text cleared")
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" >
                <h1>{props.heading}</h1>
                <textarea className="form-control" placeholder={props.place} id="inputText" rows="8" onChange={handleOnChange} value={text}></textarea>
                <button className="btn btn-outline-success my-2 mx-3 rounded-pill p-2" onClick={handleUpClick}>CONVERT TO UPPER CASE</button>
                <button className="btn btn-outline-success my-2 mx-3 rounded-pill p-2" onClick={handleLowClick}>convert to lower case</button>
                <button className="btn btn-outline-success my-2 mx-3 rounded-pill p-2" onClick={copyText}>Copy text</button>
                <button className="btn btn-outline-success my-2 mx-3 rounded-pill p-2" onClick={handleClick}>Clear text</button>

            </div>

            <div className="container my-2" >
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>

                <h2>Preview</h2>
                <p>{text.length===0?"Enter any text in above textBox to preview it":text}</p>
            </div>
        </>
    )
}


// TextForm.propTypes = {
//     heading : PropTypes.string,
//     text : PropTypes.string
// }

// TextForm.defaultProps = {
//     heading : "hello",
//     text : "how are you"
// }