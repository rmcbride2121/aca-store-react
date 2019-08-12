import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <TopRow />
    {/* <div id="top-row">
      <div class="logo">
          <i class="fab fa-amazon fa-4x"></i>
      </div>
        <div class="input-group">
            <input
              id="input"
              class="form-control"
              onkeyup="search()"
              placeholder="Search for names..."
            />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button" onclick="search()">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div class="cart dropdown">
              <button class="btn btn-primary dropbtn" type="button" onclick="viewCart()">View Cart <i class="fas fa-shopping-cart"></i></button>
          </div>
          
    </div> */}

    <DropDown />
    {/* <div id="dropdown">
        <select class="dropdown" id='categories' onchange='filterCategory(value)'>
            <option class="dropdown-item" value='all'>All</option>
            <option class="dropdown-item" value='electronics'>Electronics</option>
            <option class="dropdown-item" value='food'>Food</option>
            <option class="dropdown-item" value='sporting'>Sporting</option>
        </select>
    </div> */}

    <LoginForm />
    {/* <div id="loginForm" class="modal">
      <form class="modal-content animate">
        <div class="close-container">
          <span onclick="logIn()" class="close" title="Close Modal">&times;</span>
          
        </div>
    
        <div class="container">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required>
    
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>
            
          <button class="login-button" type="submit" onclick="logIn()">Login</button>
          
        </div>
    
      </form>
    </div> */}

    <List />
    {/* <div id="list">
        
    </div> */}

    <Footer />
    {/* <div id="footer">
      <div>
          <i class="far fa-copyright"></i> Erin McBride 2019
      </div>
    </div> */}
    </div>
  );
}

export default App;
