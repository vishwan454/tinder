import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios'

const TinderCards = () => {
    const [people , setPeople] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/tinder/cards')

            setPeople(req.data)
        }
        fetchData()
    },[])
    
    console.log(people);

    const swiped = (direction, nameToDelete)=>{
        console.log('removing' + nameToDelete);
        // setLastDirection(direction)
    }

    const outOffFrame = (name)=>{
        console.log(name + 'left the screen');

    }
    return (
        <div className='tinderCards'>
            <div className="tinderCards__container">
                {people.map(person =>(
                    <TinderCard className='swipe' key={person.name} 
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir)=> swiped(dir,person.name)}
                    onCardLeftScreen={()=> outOffFrame(person.name)}
                    >
                        <div className="card" style={ {backgroundImage:'url('+ person.imageUrl + ')'}}>
                            <h1>{person.name}</h1>
                            
                        </div>
                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards
