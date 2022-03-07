import React from 'react';
import {FaUserAlt, FaHeart} from 'react-icons/fa';
import {BsFillHandbagFill} from 'react-icons/bs';
import {MdSportsVolleyball} from 'react-icons/md';
import './navbar.css';

export default function navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><MdSportsVolleyball />Ludis Ostende</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">SHOES</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">COLLECTIONS</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">ORIGINALS</a>
                    </li>
                </ul>
                    <a href="#!" className='icon-links'><FaUserAlt /></a> &nbsp;&nbsp; &nbsp;
                    <a href="#!" className='icon-links'><FaHeart /></a> &nbsp;&nbsp; &nbsp;
                    <a href="#!" className='icon-links'><BsFillHandbagFill /></a>  &nbsp;&nbsp;
                    
                </div>
            </div>
            </nav>
    </div>
  )
}
