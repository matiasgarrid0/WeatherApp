import React from 'react';
import Logo from '../logoSol.svg'
import SearchBar from './SearchBar.jsx';
import style from './SearchBar.module.css';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className = {style.inputs}>
      <img className = {style.logo} src={Logo} alt="img not found"/>
      <h3>Weather App</h3>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
