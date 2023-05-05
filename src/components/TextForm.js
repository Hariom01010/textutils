import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleChange = (e)=>{
        setText(e.target.value);
        
    }

    const upperCase = ()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted To Uppercase","Success")
    }

    const lowerCase = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted To Lowercase","Success")
    }

    const clearText = ()=>{
        setText("");
        props.showAlert("Text Cleared","Success")
    }

    const copyText = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        console.log(text.select())
    }


    return (
        <>
            <div className='container'>        
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" placeholder ="Enter Text Here" value={text} onChange={handleChange} rows="8" style={{backgroundColor: props.mode==="Dark"?"#272d32":"#f8f9fa", color: props.mode==="Dark"?"#f8f9fa":"#272d32"}}></textarea>
                </div>
                <button className={`btn btn-primary mx-2 my-3 ${text.length===0?"disabled":""}`}  onClick = {upperCase}>Convert to UpperCase</button>
                <button className={`btn btn-primary mx-2 my-3 ${text.length===0?"disabled":""}`} onClick = {lowerCase}>Convert to LowerCase</button>
                <button className={`btn btn-primary mx-2 my-3 ${text.length===0?"disabled":""}`} onClick = {copyText}>Copy Text</button>
                <button className={`btn btn-danger mx-2 my-3 ${text.length===0?"disabled":""}`} onClick = {clearText}>Clear Text</button>
            </div>
            <div className="container my-4">
                <h2>Your text summary</h2>
                <p>Your text has {text.length} characters and {text.length>0?text.split(" ").length:0} words.</p>
                <p>It will take {text.length>0?(text.split(" ").length)*0.008: 0} minutes to read the text.</p>
                <h3>Text Preview</h3>
                <p>{text.length>0?text:"Enter text in above box to preview it"}</p>
            </div>
        </>
    )
}
