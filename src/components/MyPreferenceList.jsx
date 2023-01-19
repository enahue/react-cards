import React from 'react'

const MyPreferenceList = (props) => {
  return (
    <div className="preference-list hobbies">
    <h3>{props.title}</h3>
    <ul>
      <li>Voleibol</li>
      <li>Video Juegos</li>
      <li>Ver anime</li>
      <li>Series</li>
    </ul>
  </div>
  )
}

export default MyPreferenceList
