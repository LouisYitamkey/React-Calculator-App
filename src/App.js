import React, { useState } from "react";
import moment from "moment";


export default function App() {
  const [date, setDate] = useState(new Date());
  const [dateDiffInYears, setDateDiffInYears] = useState(0); 
  const [dateDiffInDays, setDateDiffInDays] = useState(0);
  const [dateDiffInMonths, setdateDiffInMonths] = useState(0)
  
  function handleChange(event) {
    setDate(moment(new Date(event.target.value)).format("YYYY-MM-DD"));
  }

  function calculateDayFromBirth(){
    let currentDate = moment()
    let dateOfBirth = date

    setDateDiffInYears(currentDate.diff(dateOfBirth,'years'))

    setDateDiffInDays(currentDate.diff(dateOfBirth, 'days'))
    setdateDiffInMonths(currentDate.diff(dateOfBirth, 'months'))

  }

  return (
    <div className="App  ">
      <div className="flex justify-center items-center">
      <p className="  mb-10  mt-32 md:mt-16 text-black text-2xl  font-bold py-2 px-4 ">  
         Date Calculator <i class="fa-solid fa-calculator text-3xl text-red-400 "></i>
        </p>

      </div>
            
    
      
      <h1 className="text-base sm:text md:px-40 text-center  md:text-sm lg:text-2xl font-semibold mb-6 ">This App Takes Date of Birth As the  Input and Returns the Difference in  <span className="text-green-600">Years</span> , <span className="text-green-600">Months</span>, and <span className="text-green-600">Days</span> as compared to the current date. </h1>


      <form className="flex justify-center items-center">
      <label className="text-green-600" for="start">Date of Birth &nbsp; :&nbsp;&nbsp;  </label> <br/> 
      <input className="px-2 py-2 border border-red-300" type="date" placeholder=" Date Of Birth" value={date} onChange={handleChange} />


      </form>

      <br />
      
      <div className="mt-2 text-center">
      <p> Date difference in  years <span className="text-green-500"> {dateDiffInYears}</span></p>

       <p> Date difference in months <span className="text-green-600">{dateDiffInMonths}</span> </p>

       <p> Date difference in days <span className="text-green-600"> {dateDiffInDays}</span></p>
      
      </div>
      
      <div className="flex justify-center items-center pt-10">

      <button onClick={calculateDayFromBirth} className="bg-blue-500  text-white font-bold py-2 px-4 ">
        Generate Results
       </button>
     
      </div>
      <p className="mt-8 text-center "> <span className="font-bold">How To Use</span> : Input your date of birth and click on generate results to display the results. </p>
     
    </div>
  );
}