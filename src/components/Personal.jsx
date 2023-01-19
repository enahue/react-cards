import React from 'react'

const Personal = (props) => {
  const person = {
    name: "Erwin Nahue",
    age: 24,
    favoriteMovie: "The Gentlemen",
    favoritMusic: "Rock-Pop",
  };
  return (
    <div className="preference-list personal">
        <h3>{props.title}</h3>
        <ul>
          <li>{person.name}</li>
          <li>{person.age}</li>
          <li>{person.favoriteMovie}</li>
          <li>{person.favoritMusic}</li>
        </ul>
      </div>
  )
}

export default Personal