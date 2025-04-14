import './App.css';
import UserMood from './UserMood';
import ClickCounter from './ClickCounter';
import React, { useState, useEffect } from "react";

function Greeting(props) {
  return <h1>Привет, {props.name}!</h1>;
}

export default function App() {
  const [username, setUsername] = useState("Павел");
  const [darkMode, setDarkMode] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [guests, setGuests] = useState(["Павел", "Медельин"]);

  function addGuest() {
    const newName = prompt("Как тебя зовут?")?.trim();
    if (newName && !guests.includes(newName)) {
      setGuests([...guests, newName]);
    }
  }

  function removeGuest(indexToRemove) {
    setGuests(guests.filter((_, index) => index !== indexToRemove));
  }

  useEffect(() => {
    const storedGuests = localStorage.getItem("guests");
    if (storedGuests) {
      setGuests(JSON.parse(storedGuests));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("guests", JSON.stringify(guests));
  }, [guests]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <UserMood mood="happy" />
      <UserMood mood="sad" />
      <ClickCounter />

      {guests.map((name, index) => (
        <div key={index}>
          <Greeting name={name} />
          <button onClick={() => removeGuest(index)}>Удалить</button>
        </div>
      ))}

      <button onClick={addGuest}>Добавить гостя</button>
    </div>
  );
}
