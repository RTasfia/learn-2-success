import React from 'react';
import './App.css';
import Shop from './Component/Shop/Shop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="container">
      <h1 className="heading">Learn 2 Success</h1>
      <br/>
      <nav class="navbar navbar-expand-lg navbar-light bg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="/home"><FontAwesomeIcon icon={faHome} /> Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/order-review">Order Review</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </nav>

      <br/>
      <Shop></Shop> 
    </div>
  );
}
export default App;
