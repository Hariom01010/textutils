import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [mode, setMode] = useState("Light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === "Light"){ 
      setMode("Dark")
      document.body.style.backgroundColor="#212529"
      document.body.style.color="white"
      showAlert("Dark Mode is enabled","Success")
    }else{
      setMode("Light")
      document.body.style.backgroundColor="#f8f9fa"
      document.body.style.color="black"
      showAlert("Light Mode is enabled","Success")
    }
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar title="TextUtils" mode={mode} toggle={toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
          <Route path="#" element={<TextForm mode={mode} showAlert={showAlert}/>} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
