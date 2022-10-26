import Ranger from "./components/slider";


function Calc(){
    return(
        <div className=" text-white container mx-auto bg-lime-700 rounded-xl p-1 m-20 font-bold justify-center items-center" id="cont">
            <h1 className="text-center align-text-top mb-11 mt-5" id="Budgy"> Budget Calculator based on 70/20/10 rule (Content inside of ./Account used for demo) </h1>
            <Ranger/>
            </div>
    )
}

export default Calc;