import React, { useState } from "react";
import moment from "moment";


export default function App() {
  const [date, setDate] = useState(new Date());
  const [dateDiffInYears, setDateDiffInYears] = useState(0); 
  const [dateDiffInDays, setDateDiffInDays] = useState(0);
  const [dateDiffInMonths, setdateDiffInMonths] = useState(0)
  const [dateDiffInMinutes, setDateDiffInMinutes ] = useState(0)
  const [dateDiffInSeconds, setDateDiffInSeconds] = useState(0)

  
  function handleChange(event) {
    setDate(moment(new Date(event.target.value)).format("YYYY-MM-DD"));
  }

  function calculateDayFromBirth(){
    let currentDate = moment()
    let dateOfBirth = date

    setDateDiffInYears(currentDate.diff(dateOfBirth,'years'))

    setDateDiffInDays(currentDate.diff(dateOfBirth, 'days'))
    setdateDiffInMonths(currentDate.diff(dateOfBirth, 'months'))
    setDateDiffInMinutes(currentDate.diff(dateOfBirth, 'minutes'))
    setDateDiffInSeconds(currentDate.diff(dateOfBirth, 'seconds'))
    
    

  }

  return (
    <div className="App  ">
     
            

      <h1 className="text-base bg-red-100 sm:text md:px-40 text-center px-8 py-6 md:text-sm lg:text-2xl font-semibold mb-6 ">This App Takes Date of Birth As the  Input and Returns the Difference in  <span className="text-green-600">Years</span> , <span className="text-green-600">Months</span>, and <span className="text-green-600">Days</span> as compared to the current date. </h1>

      <form className="flex justify-center  items-center">
      <label className="text-green-600" for="start">Date of Birth &nbsp; :&nbsp;&nbsp;  </label> <br/> 
      <input className="px-2 py-2 border border-red-300" type="date" placeholder=" Date Of Birth" value={date} onChange={handleChange} />


      </form>

      <br />
      
      <div className="mt-2 text-center">
        <p className="bg-green-400 text-lg py-2 font-black "> Date Differences:</p>
      <p className="text-xl bg-gray-400 text-white font-serif px-2 py-2">  Years&nbsp;: <span className="text-green-500 text-2xl bg-black px-2 py-2 "> {dateDiffInYears}</span></p>

       <p className="text-xl bg-gray-400 text-white font-serif px-2 py-2"> Months&nbsp;: <span className="text-green-600 text-2xl bg-black px-2 py-2">{dateDiffInMonths}</span> </p>

       <p className="text-xl bg-gray-400 text-white font-serif px-2 py-2"> Days&nbsp;: <span className="text-green-600 text-2xl bg-black px-2 py-2"> {dateDiffInDays}</span></p>

       <p className="text-xl bg-gray-400 text-white font-serif px-2 py-2"> Minutes&nbsp;: <span className="text-green-600 text-2xl bg-black px-2 py-2"> {dateDiffInMinutes}</span></p>

       <p className="text-xl bg-gray-400 text-white font-serif px-2 py-2"> Seconds&nbsp;: <span className="text-green-600 text-2xl bg-black px-2 py-2"> {dateDiffInSeconds}</span></p>
      
      </div>
      
      <div className="flex justify-center items-center pt-10">

      <button onClick={calculateDayFromBirth} className="bg-green-600  text-white font-bold py-2 px-4 ">
        Generate Results
       </button>
     
      </div>
      <p className="mt-8 text-center "> <span className="font-bold">How To Use</span> : Input your date of birth and click on generate results to display the results. </p>

      <p className="text-center text-sm font-black py-4 text-blue-500"> Kwaku Louis&copy;</p>
     
     
    </div>
  );
}

