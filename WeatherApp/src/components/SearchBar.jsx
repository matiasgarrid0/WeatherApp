import React, { useState } from "react";
import style from './SearchBar.module.css';
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input className = {style.bar}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className = {style.btn}  type="submit" value="Agregar" />
    </form>
  );
}
