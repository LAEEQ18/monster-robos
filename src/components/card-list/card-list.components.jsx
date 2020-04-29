import React from 'react';

import {Card} from '../card/card.componet'

import './card-list.style.css';


export const CardList = props => {
    // console.log(props); the pros are now passing names and set it in grid {props.children} is passing the children
return (<div className='card-list'>
    {
        props.monsters.map(monsters=><Card key= {monsters.id} monsters={monsters}/>)
        }


</div>)
}