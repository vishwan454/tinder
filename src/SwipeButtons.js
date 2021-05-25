import { IconButton } from '@material-ui/core'
import { Close, Favorite, FlashOn, Replay, Star } from '@material-ui/icons'
import React from 'react'
import './SwipeButton.css'

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
           <IconButton className='swipeButtons__repeat'>
               <Replay fontSize='large'/>
           </IconButton>
           <IconButton className='swipeButtons__left'>
               <Close fontSize='large'/>
           </IconButton>
           <IconButton className='swipeButtons__star'>
               <Star fontSize='large'/>
           </IconButton>
           <IconButton className='swipeButtons__right'>
               <Favorite fontSize='large'/>
           </IconButton>
           <IconButton className='swipeButtons__lightning' >
               <FlashOn fontSize='large'/>
           </IconButton>
        </div>
    )
}

export default SwipeButtons
