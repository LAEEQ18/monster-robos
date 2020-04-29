import React from 'react';

import './card.style.css';

export const Card = props =>
 (
<div className ='card-container'>

   <img alt = 'monsters'
   src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} />

    <h1 >{props.monsters.name}</h1>
<h2>{props.monsters.email}</h2>
<h3>{props.monsters.id}</h3>
    </div>

);