import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types'
import './App.css'

const Fader = ({text}) =>{

const [fadeProp, setFadeProp] = useState({
    fade: 'fade-in',
})

useEffect(() =>{
        const timeout = setInterval(() => {
            if(fadeProp.fade === 'fade-in'){
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })

            }
        }, 2500);
    },[])




    return(
        <>
      <div className={fadeProp.fade} id="fades">{text}</div>
    </>
    )
}

Fader.defaultProps = {
    text:'Only 28 percent of Hispanic households own stock. We want to change that. Welcome to Futuro / Bienvenidos a Futuro'
}

Fader.propTypes = {
    text: PropTypes.string,
}


export default Fader