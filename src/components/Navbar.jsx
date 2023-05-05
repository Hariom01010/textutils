import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Navbar(props) {
  let modeT = ""
  if(props.mode === "Light"){
    modeT = "Dark";
  }else{
    modeT = "Light";
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${(props.mode).toLowerCase()} bg-${(props.mode).toLowerCase()}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="modeToggle" onClick={props.toggle}/>
            <label class={`form-check-label text-${modeT.toLowerCase()}`} htmlfor="modeToggle">Enable {modeT} Mode</label>
          </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

Navbar.propTypes = {title:PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired}

Navbar.defaultProps = {title:"Set Title Here",
                    aboutText:"About Us"}