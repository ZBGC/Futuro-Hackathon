import {useEffect, useRef, useState} from 'react';
import './body.css'



function Body() {
    const bottomRef = useRef(null)

    useEffect(() =>{
        const timer = setTimeout(()=> 
        bottomRef.current?.scrollIntoView({behavior: 'smooth'}), 3000)
    })

    return (
    
      <div class="flex flex-nowrap mt-12 ..." id='cont'>
    <div class= "container bg-slate-100 rounded-xl shadow border m-12 ml-8 font-bold w-90 shadow-xl" id='cont'> <h1 className='text-center mb-5 text-xl'>Welcome to Futuro, where we aim to be part of your futuro.  </h1>
     <p className='ml-4'>
      "Yet inadequate access to {'financial literacy'.toUpperCase()} has led most of this growing population to miss out on what has been the source of significant prosperity for other ethnic groups."
      How can we improve our culture?</p> <p class=' ml-4 font-medium mt-10'>With Futuro, we aim to take a step towards slowly- but surely raising the Hispanic investment rate by not only providing *free* access to local courses, but by also collaborating with local investors to increase participation in investments by Hispanics!
    </p>

    <p class=" text-yellow-700 text-lg text-center mt-0"> Please, allow us to present with an unlocked account, some key demonstrations!</p>
    
    
    </div>
    <img className=''src='https://hnmagazine.com/wp-content/uploads/2020/10/AdobeStock_86769672.jpeg'></img>
    <div ref={bottomRef}/>
    </div>
    )}

export default Body;
