


function Contain(){
    return(
        <div className=" bg-lime-600 text-white container mx-auto mt-5 rounded-xl p-1 font-bold justify-center items-center text-center" id="cont">
            <h1 className="text-center align-text-top mb-2 mt-4" id="Budgy"> 
            Interested in {'Investing'}? (Content Inside of ./Account used for demo)</h1>
            <h2 className="text-center mb-10">gain additional discounts and offers on our app when you sign up to FREE financial events in Miami!</h2>
            
            <a target="_blank" href="https://www.eventbrite.com/e/financial-education-retirement-planning-101-tickets-410007091247?aff=ebdssbdestsearch" id="motd" className="text-yellow-300 underline text-bold text-lg text-center">
                EVENT OF THE MONTH:   Financial Education: Retirement Planning 101 by City of Miami (40 FUTcoins!) 
            </a>
            
            

                   <div className="mt-8">  Click <a target="_blank"href='https://www.miamidade.gov/housing/library/affordable-housing-resources/financial-literacy-training-program-english.pdf' className="text-sky-400 underline"> Here
            </a> for free financial classes, offered by the University of Miami! --Each event is worth <span className="text-yellow-200 underline font-bold text-lg">15</span> FUTcoins! </div>
                    

<div className="mt-8 mb-5">

Planning on attending or returning to College? Attend <a target="_blank"href='https://mdpls.org/event/7069022' className="text-sky-500 underline"> this </a> informational about Financial Aid and the adjusting student loan referendum
--This event is worth <span className="text-yellow-200 underline font-bold text-lg">10</span> FUTcoins!

</div>   
            
            </div>
    )
}

export default Contain;