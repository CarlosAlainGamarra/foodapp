import React, { useState } from 'react'
import { Item } from './Item'
import './style.css'

export function Recipe() {
    const[search,setSearch]=useState('');
    const[meal,setMeal]=useState();
    function searchMeal(evt){
        if(evt.key==='Enter')
        {                
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(result=>result.json())
            .then(data=> {setMeal(data.meals);setSearch('')})
        }
    }
    return (
        <div className='main'>
            <div className='head'>
                <h1>Food Recipe</h1>
            </div>
            <div className="search">
                <input 
                    type='search' 
                    className='search-bar' 
                    onChange={(e)=>setSearch(e.target.value)} 
                    value={search} onKeyPress={searchMeal}
                    placeholder='Look for recipes...'
                />
            </div>
            <div className='container'>
                {    
                (meal==null)? <p className='notSearch'>Nothing here</p> : 
                    meal.map((res)=>{
                        return(
                        <Item key={res.idMeal} data={res}/>)}  
                    )    
                }
            </div>
        </div>
    )
}
