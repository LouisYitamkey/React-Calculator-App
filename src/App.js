import React, { useState } from "react";
import moment from "moment";
import Button from '@mui/material/Button';
import  "./index.css";


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
    <div className=" py-24 md:py-5   ">
     
            

      <h1 className="text-sm text-center pt-10 pb-8 md:pt-10 md:pb-8 font-medium"> Enter your date of birth and generate the results.  </h1>

      <form className="flex justify-center   items-center">
      <label className="text-black font-bold text-base" for="start">Date of Birth &nbsp;:&nbsp;&nbsp;  </label> <br/> 
      <input className="px-2 py-2 border border-red-300" type="date" placeholder=" Date Of Birth" value={date} onChange={handleChange} />


      </form>

      <br />
      
      {/* <div className="mt-2 text-center">
        <p className="bg-green-400 text-lg py-2 font-medium "> Date Differences:</p>
      <p className="text-xl bg-gray-400 text-white font-serif px-2 py-3">  Years&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp; <span className="text-green-600 text-2xl bg-black px-2 py-2"> {dateDiffInYears}</span></p>

       <p className="text-xl bg-gray-400 text-white font-serif px-2 py-3"> Months&nbsp;:&nbsp; <span className="text-green-600 text-2xl bg-black px-2 py-2">{dateDiffInMonths}</span> </p>

       <p className="text-xl bg-gray-400 text-white font-serif px-2 py-3"> Days&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-green-600 text-2xl bg-black px-2 py-2"> {dateDiffInDays}</span></p>

       <p className="text-xl bg-gray-400 text-white font-serif px-2 py-3"> Minutes&nbsp;: <span className="text-green-600 text-2xl bg-black px-2 py-2"> {dateDiffInMinutes}</span></p>

       <p className="text-xl bg-gray-400 text-white font-serif px-2 py-3"> Seconds&nbsp;: <span className="text-green-600 text-2xl bg-black px-2 py-2"> {dateDiffInSeconds}</span></p>
      
      </div> */}
    

      {/* <div class="flex flex-row my-10 gap-4 justify-center items-center ">
  <div className="bg-red-200 px-5 rounded-md py-5">  <p className="font-medium">  Years&nbsp;: <br/>  <br/>  <span className=" bg-cyan-100 rounded-md text-black px-4 py-2"> {dateDiffInYears}</span></p></div>
  <div className="bg-red-200 rounded-md px-5 py-5">  <p className="font-medium"> Months&nbsp;:&nbsp; <br/>  <br/>   <span className="bg-cyan-100 rounded-md text-black px-4 py-2">{dateDiffInMonths}</span> </p></div>
  <div className="bg-red-200  rounded-md  px-5 py-5">  <p className="font-medium"> Days&nbsp;:&nbsp;<br/>  <br/> <span className="bg-cyan-100 rounded-md text-black px-4 py-2">{dateDiffInDays}</span> </p></div>
  
</div>
<div class="flex flex-row gap-4 justify-center items-center ">
  <div className="bg-red-200 px-5 rounded-md py-5">  <p className="font-medium">  Minutes&nbsp;:<br/>  <br/>  <span className="bg-cyan-100 rounded-md text-black px-4 py-2"> {dateDiffInMinutes}</span></p></div>
  <div className="bg-red-200 px-5  rounded-md py-5">  <p className="font-medium">Seconds&nbsp;:&nbsp;<br/>  <br/> <span className="bg-cyan-100 rounded-md text-black text-lg px-4 py-2">{dateDiffInSeconds}</span> </p></div>

  
</div> */}
  <div className="md:flex md:justify-center md:items-center">
    
<div className="grid grid-cols-3 px-2 pt-10 pb-5 md:grid-cols-4 gap-2">
<div className="bg-red-200 px-5 rounded-md py-5">  <p className="font-medium">  Years&nbsp;: <br/>  <br/>  <span className=" bg-cyan-100 rounded-md text-black px-4 py-2"> {dateDiffInYears}</span></p></div>
  <div className="bg-red-200 rounded-md px-5 py-5">  <p className="font-medium"> Months&nbsp;:&nbsp; <br/>  <br/>   <span className="bg-cyan-100 rounded-md text-black px-4 py-2">{dateDiffInMonths}</span> </p></div>
  <div className="bg-red-200  rounded-md  px-5 py-5">  <p className="font-medium"> Days&nbsp;:&nbsp;<br/>  <br/> <span className="bg-cyan-100 rounded-md text-black px-4 py-2">{dateDiffInDays}</span> </p></div>




</div>

<div className="grid grid-cols-3  px-2  pt-8 md:grid-cols-3  gap-2 md:gap-6">
<div className="bg-red-200 px-5 rounded-md py-5">  <p className="font-medium ">  Minutes&nbsp;:<br/>  <br/>  <span className="bg-cyan-100 rounded-md text-black px-4 py-2"> {dateDiffInMinutes}</span></p></div>
  <div className="bg-red-200 px-5  rounded-md py-5">  <p className="font-medium">Seconds:<br/>  <br/> <span className="bg-cyan-100 rounded-md text-black text-lg px-4 py-2">{dateDiffInSeconds}</span> </p></div>

</div>


  </div>


<div className="flex justify-center items-center pt-14">

    
<Button  onClick={calculateDayFromBirth}  variant="outlined">Generate Results</Button>

</div>


<p className="text-center text-sm  py-6 "> Kwaku Louis &copy;</p>
     
    </div>

    
  );
}

