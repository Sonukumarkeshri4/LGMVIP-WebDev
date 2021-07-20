import React from 'react'

const Header = ({ onSetIsClicked }) => {
  const clicked = () => {
      onSetIsClicked(1);
      document.getElementById("titleNavbar").innerHTML= "User Data from the API";
  }

  return (
    <div>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>Keshri</b> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <button onClick={clicked} className="getUser btn btn-outline-dark">Get Users</button> </a>
        </li>
        


      </ul>

    </div>
  </div>
</nav>
<br/>
<center><h3 id="titleNavbar">Click Button to load data</h3></center>

</div>
  )
}
export default Header;

