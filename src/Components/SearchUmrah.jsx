import React, { useState } from "react";
import booking from "../assests/booking.png";
import download from "../assests/download.png";
import help from "../assests/help.png";
import haram from "../assests/Images/haram.png";
import masjid from "../assests/Images/masjid.png";
import world from "../assests/Images/world.png";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";
import madina from "../assests/buttonIcons/madina.png";
import mecca from "../assests/buttonIcons/mecca.png";
import "../app.css"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function SearchUmrah() {


    const [showModal, setShowModal] = useState(false);
    const [Qustions,setQustions]=useState(false)
    const [Qustions1,setQustions1]=useState(false)
    const [Qustions2,setQustions2]=useState(false)
    const [Qustions3,setQustions3]=useState(false)
    const [Qustions4,setQustions4]=useState(false)
    const [Qustions5,setQustions5]=useState(false)
    const [Qustions6,setQustions6]=useState(false)
    const [Qustions7,setQustions7]=useState(false)








    const QustionTornari =()=>{
      if(Qustions==false){
        setQustions(true)
      }else{
        setQustions(false)
      }
    }


    const QustionTornari1 =()=>{
      if(Qustions1==false){
        setQustions1(true)
      }else{
        setQustions1(false)
      }
    }



    const QustionTornari2 =()=>{
      if(Qustions2==false){
        setQustions2(true)
      }else{
        setQustions2(false)
      }
    }

    const QustionTornari3 =()=>{
      if(Qustions3==false){
        setQustions3(true)
      }else{
        setQustions3(false)
      }
    }

    const QustionTornari4 =()=>{
      if(Qustions4==false){
        setQustions4(true)
      }else{
        setQustions4(false)
      }
    }

    const QustionTornari5 =()=>{
      if(Qustions5==false){
        setQustions5(true)
      }else{
        setQustions5(false)
      }
    }

    const QustionTornari6 =()=>{
      if(Qustions6==false){
        setQustions6(true)
      }else{
        setQustions6(false)
      }
    }


    const QustionTornari7 =()=>{
      if(Qustions7==false){
        setQustions7(true)
      }else{
        setQustions7(false)
      }
    }

  const allMonthValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState();

  const [returnCalenderModal,setreturnCalenderModal] = useState()


  // State for text above calander
  const [calendarText, setCalendarText] = useState(`No Date is selected`);

  // Function to update selected date and calander text
  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
  };

  // Function to handle selected Year change
  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year  is selected`);
  };

  // Function to handle selected Month change
  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Month  is selected`);
  };




  return (
    <>


    
        <div className="   bg-[#699FC9]">
         <div >
         <h1
            id="package_heading"
            className="md:text-3xl p-5 text-lg   font-bold text-white "
          >
            Search umrah package
            <br />
            <span
              id="find_Best_deal"
              className="md:text-3xl  text-lg  font-normal"
            >
              Find best deals for umrah trip
            </span>
          </h1>
         </div>
       
          {/* Button Section Start */}

       
  

<section className=" body-font">
            <div className="container flex  px-5 py-10 mx-auto">
              <div className="flex flex-wrap justify-evenly -m-2">
                <div className="p-2 md:h-[60px] md:w-[230px] h-16 w-60 ">
                  
                  <div          onClick={() => setShowModal(true)}  className="h-full flex items-center cursor-pointer  border p-4 bg-white rounded-lg hover:bg-gray-50 active:bg-gray-100">
                    <div className="   flex justify-center mr-4 ">
                    <svg width="48" height="37" viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="calendar-date-schedule-svgrepo-com 1">
<g id="SVGRepo_iconCarrier">
<g id="Group">
<path id="Vector" d="M18.2181 16.5732H15.0629C14.795 16.5732 14.5781 16.7403 14.5781 16.9469V19.379C14.5781 19.5853 14.795 19.7527 15.0629 19.7527H18.2181C18.4861 19.7527 18.7029 19.5853 18.7029 19.379V16.9469C18.7029 16.7406 18.4861 16.5732 18.2181 16.5732ZM17.7333 19.0053H15.5478V17.3206H17.7333V19.0053Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_2" d="M25.5769 16.5732H22.4217C22.1538 16.5732 21.9369 16.7403 21.9369 16.9469V19.379C21.9369 19.5853 22.1538 19.7527 22.4217 19.7527H25.5769C25.8445 19.7527 26.0617 19.5853 26.0617 19.379V16.9469C26.0617 16.7406 25.8445 16.5732 25.5769 16.5732ZM25.0921 19.0053H22.9065V17.3206H25.0921V19.0053Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_3" d="M32.7088 16.5732H29.5537C29.286 16.5732 29.0688 16.7403 29.0688 16.9469V19.379C29.0688 19.5853 29.286 19.7527 29.5537 19.7527H32.7088C32.9765 19.7527 33.1937 19.5853 33.1937 19.379V16.9469C33.1937 16.7406 32.9765 16.5732 32.7088 16.5732ZM32.224 19.0053H30.0385V17.3206H32.224V19.0053Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_4" d="M18.2181 22.1131H15.0629C14.795 22.1131 14.5781 22.2805 14.5781 22.4868V24.9189C14.5781 25.1252 14.795 25.2926 15.0629 25.2926H18.2181C18.4861 25.2926 18.7029 25.1252 18.7029 24.9189V22.4868C18.7029 22.2805 18.4861 22.1131 18.2181 22.1131ZM17.7333 24.5452H15.5478V22.8605H17.7333V24.5452Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_5" d="M25.5769 22.1131H22.4217C22.1538 22.1131 21.9369 22.2805 21.9369 22.4868V24.9189C21.9369 25.1252 22.1538 25.2926 22.4217 25.2926H25.5769C25.8445 25.2926 26.0617 25.1252 26.0617 24.9189V22.4868C26.0617 22.2805 25.8445 22.1131 25.5769 22.1131ZM25.0921 24.5452H22.9065V22.8605H25.0921V24.5452Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_6" d="M32.7088 22.1131H29.5537C29.286 22.1131 29.0688 22.2805 29.0688 22.4868V24.9189C29.0688 25.1252 29.286 25.2926 29.5537 25.2926H32.7088C32.9765 25.2926 33.1937 25.1252 33.1937 24.9189V22.4868C33.1937 22.2805 32.9765 22.1131 32.7088 22.1131ZM32.224 24.5452H30.0385V22.8605H32.224V24.5452Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_7" d="M36.5486 9.33633H33.3466C33.3424 9.33633 33.3388 9.33708 33.3346 9.33733V8.83954C33.3346 8.02535 32.4755 7.36313 31.4193 7.36313C30.363 7.36313 29.504 8.0256 29.504 8.83954V9.33633H25.896V8.83954C25.896 8.02535 25.0369 7.36313 23.9806 7.36313C22.9244 7.36313 22.0653 8.0256 22.0653 8.83954V9.33633H18.4569V8.83954C18.4569 8.02535 17.5978 7.36313 16.5416 7.36313C15.4853 7.36313 14.6262 8.0256 14.6262 8.83954V9.33658C14.6246 9.33658 14.623 9.33633 14.6214 9.33633H11.42C11.1521 9.33633 10.9352 9.5035 10.9352 9.71004V29.0798C10.9352 29.2861 11.1521 29.4535 11.42 29.4535H36.5486C36.8163 29.4535 37.0335 29.2861 37.0335 29.0798V9.71004C37.0335 9.5035 36.8163 9.33633 36.5486 9.33633ZM30.4736 8.83954C30.4736 8.43743 30.8976 8.11055 31.4193 8.11055C31.941 8.11055 32.365 8.43743 32.365 8.83954V10.9017C32.365 11.3036 31.941 11.6307 31.4193 11.6307C30.8976 11.6307 30.4736 11.3038 30.4736 10.9017V8.83954ZM23.9806 8.11055C24.5019 8.11055 24.9263 8.43743 24.9263 8.83954V10.9017C24.9263 11.3036 24.5023 11.6307 23.9806 11.6307C23.4589 11.6307 23.0349 11.3038 23.0349 10.9017V9.74492C23.0362 9.73321 23.0394 9.722 23.0394 9.70979C23.0394 9.69758 23.0362 9.68637 23.0349 9.67466V8.83954C23.0349 8.43743 23.4589 8.11055 23.9806 8.11055ZM15.5959 8.83954C15.5959 8.43743 16.0199 8.11055 16.5416 8.11055C17.0629 8.11055 17.4873 8.43743 17.4873 8.83954V10.9017C17.4873 11.3036 17.0633 11.6307 16.5416 11.6307C16.0199 11.6307 15.5959 11.3038 15.5959 10.9017V8.83954ZM36.0638 28.7061H11.9048V10.0838H14.6214C14.623 10.0838 14.6246 10.0835 14.6262 10.0835V10.9019C14.6262 11.7161 15.4857 12.3783 16.5416 12.3783C17.5975 12.3783 18.4569 11.7161 18.4569 10.9019V10.084H22.0653V10.9019C22.0653 11.7161 22.9247 12.3783 23.9806 12.3783C25.0365 12.3783 25.896 11.7161 25.896 10.9019V10.084H29.504V10.9019C29.504 11.7161 30.363 12.3783 31.4193 12.3783C32.4755 12.3783 33.3346 11.7161 33.3346 10.9019V10.0828C33.3388 10.0828 33.3424 10.0838 33.3466 10.0838H36.0638V28.7061Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
</g>
</g>
</g>
</svg>                    </div>
                    <div className="flex-grow">
                    
                      <h2 className="text-gray-900 text-[0.995rem]">
                        Date of Travel 
                      </h2>
                    
                    </div>
                  </div>
                </div>

                <div className="p-2 md:h-[60px] md:w-[230px] h-16 w-60 ">
                  <div onClick={()=>setreturnCalenderModal(true)} className="h-full flex items-center  border p-4  hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                    <svg width="48" height="37" viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="calendar-date-schedule-svgrepo-com 1">
<g id="SVGRepo_iconCarrier">
<g id="Group">
<path id="Vector" d="M18.2181 16.5732H15.0629C14.795 16.5732 14.5781 16.7403 14.5781 16.9469V19.379C14.5781 19.5853 14.795 19.7527 15.0629 19.7527H18.2181C18.4861 19.7527 18.7029 19.5853 18.7029 19.379V16.9469C18.7029 16.7406 18.4861 16.5732 18.2181 16.5732ZM17.7333 19.0053H15.5478V17.3206H17.7333V19.0053Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_2" d="M25.5769 16.5732H22.4217C22.1538 16.5732 21.9369 16.7403 21.9369 16.9469V19.379C21.9369 19.5853 22.1538 19.7527 22.4217 19.7527H25.5769C25.8445 19.7527 26.0617 19.5853 26.0617 19.379V16.9469C26.0617 16.7406 25.8445 16.5732 25.5769 16.5732ZM25.0921 19.0053H22.9065V17.3206H25.0921V19.0053Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_3" d="M32.7088 16.5732H29.5537C29.286 16.5732 29.0688 16.7403 29.0688 16.9469V19.379C29.0688 19.5853 29.286 19.7527 29.5537 19.7527H32.7088C32.9765 19.7527 33.1937 19.5853 33.1937 19.379V16.9469C33.1937 16.7406 32.9765 16.5732 32.7088 16.5732ZM32.224 19.0053H30.0385V17.3206H32.224V19.0053Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_4" d="M18.2181 22.1131H15.0629C14.795 22.1131 14.5781 22.2805 14.5781 22.4868V24.9189C14.5781 25.1252 14.795 25.2926 15.0629 25.2926H18.2181C18.4861 25.2926 18.7029 25.1252 18.7029 24.9189V22.4868C18.7029 22.2805 18.4861 22.1131 18.2181 22.1131ZM17.7333 24.5452H15.5478V22.8605H17.7333V24.5452Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_5" d="M25.5769 22.1131H22.4217C22.1538 22.1131 21.9369 22.2805 21.9369 22.4868V24.9189C21.9369 25.1252 22.1538 25.2926 22.4217 25.2926H25.5769C25.8445 25.2926 26.0617 25.1252 26.0617 24.9189V22.4868C26.0617 22.2805 25.8445 22.1131 25.5769 22.1131ZM25.0921 24.5452H22.9065V22.8605H25.0921V24.5452Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_6" d="M32.7088 22.1131H29.5537C29.286 22.1131 29.0688 22.2805 29.0688 22.4868V24.9189C29.0688 25.1252 29.286 25.2926 29.5537 25.2926H32.7088C32.9765 25.2926 33.1937 25.1252 33.1937 24.9189V22.4868C33.1937 22.2805 32.9765 22.1131 32.7088 22.1131ZM32.224 24.5452H30.0385V22.8605H32.224V24.5452Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
<path id="Vector_7" d="M36.5486 9.33633H33.3466C33.3424 9.33633 33.3388 9.33708 33.3346 9.33733V8.83954C33.3346 8.02535 32.4755 7.36313 31.4193 7.36313C30.363 7.36313 29.504 8.0256 29.504 8.83954V9.33633H25.896V8.83954C25.896 8.02535 25.0369 7.36313 23.9806 7.36313C22.9244 7.36313 22.0653 8.0256 22.0653 8.83954V9.33633H18.4569V8.83954C18.4569 8.02535 17.5978 7.36313 16.5416 7.36313C15.4853 7.36313 14.6262 8.0256 14.6262 8.83954V9.33658C14.6246 9.33658 14.623 9.33633 14.6214 9.33633H11.42C11.1521 9.33633 10.9352 9.5035 10.9352 9.71004V29.0798C10.9352 29.2861 11.1521 29.4535 11.42 29.4535H36.5486C36.8163 29.4535 37.0335 29.2861 37.0335 29.0798V9.71004C37.0335 9.5035 36.8163 9.33633 36.5486 9.33633ZM30.4736 8.83954C30.4736 8.43743 30.8976 8.11055 31.4193 8.11055C31.941 8.11055 32.365 8.43743 32.365 8.83954V10.9017C32.365 11.3036 31.941 11.6307 31.4193 11.6307C30.8976 11.6307 30.4736 11.3038 30.4736 10.9017V8.83954ZM23.9806 8.11055C24.5019 8.11055 24.9263 8.43743 24.9263 8.83954V10.9017C24.9263 11.3036 24.5023 11.6307 23.9806 11.6307C23.4589 11.6307 23.0349 11.3038 23.0349 10.9017V9.74492C23.0362 9.73321 23.0394 9.722 23.0394 9.70979C23.0394 9.69758 23.0362 9.68637 23.0349 9.67466V8.83954C23.0349 8.43743 23.4589 8.11055 23.9806 8.11055ZM15.5959 8.83954C15.5959 8.43743 16.0199 8.11055 16.5416 8.11055C17.0629 8.11055 17.4873 8.43743 17.4873 8.83954V10.9017C17.4873 11.3036 17.0633 11.6307 16.5416 11.6307C16.0199 11.6307 15.5959 11.3038 15.5959 10.9017V8.83954ZM36.0638 28.7061H11.9048V10.0838H14.6214C14.623 10.0838 14.6246 10.0835 14.6262 10.0835V10.9019C14.6262 11.7161 15.4857 12.3783 16.5416 12.3783C17.5975 12.3783 18.4569 11.7161 18.4569 10.9019V10.084H22.0653V10.9019C22.0653 11.7161 22.9247 12.3783 23.9806 12.3783C25.0365 12.3783 25.896 11.7161 25.896 10.9019V10.084H29.504V10.9019C29.504 11.7161 30.363 12.3783 31.4193 12.3783C32.4755 12.3783 33.3346 11.7161 33.3346 10.9019V10.0828C33.3388 10.0828 33.3424 10.0838 33.3466 10.0838H36.0638V28.7061Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.00159473"/>
</g>
</g>
</g>
</svg>                     </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-[0.995rem]">
                        Return Date
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-2 md:h-[60px] md:w-[250px] h-16 w-60">
                  <div className="h-full flex items-center  border p-2 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                    <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="city-svgrepo-com (3) 1">
<g id="SVGRepo_iconCarrier">
<path id="Vector" d="M12.25 12H12.2675M12.25 17.3333H12.2675M12.25 22.6667H12.2675M26.25 9.33333H26.2675M26.25 14.6667H26.2675M26.25 20H26.2675M31.5 18.6667H31.5175M31.5 24H31.5175M15.75 6.66667H7C6.03351 6.66667 5.25 7.26363 5.25 8V26.6667C5.25 27.4031 6.03351 28 7 28H15.75M21 6.13333V25.8667C21 26.6135 21 26.9868 21.1908 27.272C21.3586 27.5229 21.6261 27.7268 21.9555 27.8547C22.3298 28 22.8198 28 23.8 28H33.95C34.9302 28 35.4202 28 35.7945 27.8547C36.1239 27.7268 36.3914 27.5229 36.5593 27.272C36.75 26.9868 36.75 26.6135 36.75 25.8667V15.3333C36.75 14.7121 36.75 14.4015 36.6168 14.1564C36.4392 13.8297 36.0985 13.5701 35.6697 13.4348C35.3481 13.3333 34.9403 13.3333 34.125 13.3333C33.3097 13.3333 32.9019 13.3333 32.5803 13.2318C32.1515 13.0965 31.8108 12.8369 31.6332 12.5102C31.5 12.2652 31.5 11.9546 31.5 11.3333V6.13333C31.5 5.3866 31.5 5.01323 31.3093 4.72801C31.1414 4.47713 30.8739 4.27316 30.5445 4.14532C30.1702 4 29.6802 4 28.7 4H23.8C22.8198 4 22.3298 4 21.9555 4.14532C21.6261 4.27316 21.3586 4.47713 21.1908 4.72801C21 5.01323 21 5.3866 21 6.13333Z" stroke="#699FC9" strokeWidth="1.932" strokeLinecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>                    </div>
                    <div className="flex-grow text-[0.995rem]">
                      <select required>
                        <option value="" selected disabled>
                          Choose your city
                        </option>

                        <option value="">Karachi</option>
                        <option value="a-value-here">Lahore</option>
                        <option value="a-value-here">Islamabad</option>

                        <option value="a-value-here">Sialkot</option>

                        <option value="a-value-here">Multan</option>
                        <option value="a-value-here">Peshawar</option>


                      </select>{" "}
                    </div>
                  </div>
                </div>

                <div className="p-2 md:h-[60px] md:w-[250px] h-16 w-60">
                  <div className="h-full flex items-center  border px-3.5 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                    <div className="   flex justify-center  ">
                    <svg width="57" height="50" viewBox="0 0 57 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="city-svgrepo-com (1) 1" clipPath="url(#clip0_1_403)">
<g id="SVGRepo_iconCarrier">
<path id="Vector" d="M6.53125 22.1677C5.96881 22.1677 5.419 22.0042 4.95135 21.6979C4.4837 21.3916 4.11921 20.9563 3.90397 20.4469C3.68873 19.9376 3.63242 19.3771 3.74214 18.8364C3.85187 18.2957 4.12271 17.799 4.52042 17.4092C4.91812 17.0194 5.42483 16.7539 5.97646 16.6463C6.5281 16.5388 7.09988 16.594 7.61951 16.805C8.13913 17.0159 8.58327 17.3732 8.89574 17.8316C9.20822 18.29 9.375 18.8289 9.375 19.3802C9.3741 20.1192 9.0742 20.8277 8.54109 21.3503C8.00798 21.8728 7.28518 22.1668 6.53125 22.1677ZM6.53125 18.1856C6.29021 18.1856 6.05457 18.2557 5.85415 18.3869C5.65373 18.5182 5.49752 18.7048 5.40527 18.9231C5.31303 19.1414 5.28889 19.3816 5.33592 19.6133C5.38294 19.845 5.49902 20.0579 5.66946 20.225C5.83991 20.392 6.05707 20.5058 6.29348 20.5519C6.5299 20.598 6.77495 20.5743 6.99765 20.4839C7.22034 20.3935 7.41069 20.2404 7.54461 20.0439C7.67852 19.8475 7.75 19.6165 7.75 19.3802C7.74964 19.0635 7.62111 18.7599 7.39263 18.5359C7.16415 18.3119 6.85437 18.186 6.53125 18.1856Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.000444853"/>
<path id="Vector_2" d="M16.261 39.9382L13.7147 34.114H7.94474C7.22857 34.1132 6.53265 33.8809 5.96476 33.4532C5.39687 33.0255 4.9887 32.4262 4.80345 31.7481L3.47599 26.8692C3.26425 26.0751 3.38193 25.231 3.8033 24.5217C4.22467 23.8123 4.91545 23.2954 5.72458 23.0839C6.53372 22.8724 7.39537 22.9835 8.12113 23.393C8.8469 23.8025 9.37772 24.477 9.59753 25.2691L10.2704 27.7427H15.0635V29.3355H9.02147L8.0281 25.6793C7.91604 25.2989 7.65632 24.9767 7.30467 24.7818C6.95302 24.587 6.53746 24.535 6.14714 24.637C5.75683 24.739 5.42287 24.987 5.21691 25.3276C5.01096 25.6682 4.94942 26.0744 5.0455 26.459L6.37296 31.3374C6.46567 31.6767 6.66992 31.9766 6.95407 32.1906C7.23821 32.4045 7.58641 32.5207 7.94474 32.5211H14.786L17.7551 39.3109L16.261 39.9382Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.000444853"/>
<path id="Vector_3" d="M22.375 19.7784H19.125V16.5928H17.5V19.7784H14.25V21.3713H17.5V24.5569H19.125V21.3713H22.375V19.7784Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.000444853"/>
<path id="Vector_4" d="M12.6255 37.2996H4.31171C3.9537 37.2993 3.6058 37.1832 3.32191 36.9694C3.03802 36.7556 2.83401 36.456 2.74147 36.117L-0.347656 24.7621L1.22258 24.3518L4.31171 35.7067H12.6255V37.2996Z" fill="#699FC9" stroke="#699FC9" strokeWidth="0.000444853"/>
<path id="&#60;Transparent Rectangle&#62;" d="M24 15H-2V40.4853H24V15Z" stroke="#699FC9" strokeWidth="0.000444853"/>
</g>
</g>
<defs>
<clipPath id="clip0_1_403">
<rect width="57" height="52" fill="white"/>
</clipPath>
</defs>
</svg>                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900  text-[0.995rem]">
                        Total Passengers
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-2 md:h-[60px] md:w-[229px] h-16 w-60">
                  <div className="h-full flex items-center  border p-2.5 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                      <img className="h-7 w-7" src={mecca} alt="..." />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-[0.995rem]">
                        Night in Mecca
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-2 md:h-[60px] md:w-[229px] h-16 w-60">
                  <div className="h-full flex items-center  border px-2.5 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                      <img src={madina} alt="..." />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-[0.995rem]">
                        Night in Madina
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-2 md:h-[60px] md:w-[250px]  h-16 w-60">
                  <div className="h-full flex items-center  border p-2.5 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                    <div className="   flex justify-center  ">
                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="passport-1-svgrepo-com 1">
<g id="SVGRepo_iconCarrier">
<g id="Passport 1">
<g id="Group">
<path id="Vector" d="M17.8923 30.0745H4.67238C3.69845 30.0745 2.76442 29.7128 2.07574 29.069C1.38707 28.4252 1.00018 27.5519 1.00018 26.6414V6.21878C1.00018 5.30827 1.38707 4.43505 2.07574 3.79123C2.76442 3.1474 3.69845 2.78571 4.67238 2.78571H17.8923C18.8662 2.78571 19.8003 3.1474 20.4889 3.79123C21.1776 4.43505 21.5645 5.30827 21.5645 6.21878V26.6414C21.5645 27.5519 21.1776 28.4252 20.4889 29.069C19.8003 29.7128 18.8662 30.0745 17.8923 30.0745ZM4.67238 4.15893C4.08802 4.15893 3.5276 4.37595 3.1144 4.76225C2.7012 5.14854 2.46906 5.67247 2.46906 6.21878V26.6414C2.46906 27.1877 2.7012 27.7117 3.1144 28.098C3.5276 28.4843 4.08802 28.7013 4.67238 28.7013H17.8923C18.4766 28.7013 19.0371 28.4843 19.4503 28.098C19.8635 27.7117 20.0956 27.1877 20.0956 26.6414V6.21878C20.0956 5.67247 19.8635 5.14854 19.4503 4.76225C19.0371 4.37595 18.4766 4.15893 17.8923 4.15893H4.67238Z" fill="#699FC9"/>
<path id="Vector_2" d="M11.2824 17.2032C10.2656 17.2032 9.27159 16.9214 8.42615 16.3932C7.5807 15.8651 6.92176 15.1145 6.53264 14.2362C6.14352 13.358 6.04171 12.3916 6.24008 11.4593C6.43845 10.5269 6.92809 9.67055 7.64709 8.99837C8.36608 8.3262 9.28213 7.86844 10.2794 7.68299C11.2767 7.49754 12.3104 7.59272 13.2498 7.9565C14.1892 8.32027 14.9921 8.93631 15.557 9.7267C16.1219 10.5171 16.4235 11.4463 16.4235 12.3969C16.4235 13.6716 15.8818 14.8942 14.9177 15.7955C13.9535 16.6969 12.6459 17.2032 11.2824 17.2032ZM11.2824 8.96387C10.5561 8.96387 9.8461 9.16521 9.24221 9.54244C8.63832 9.91968 8.16765 10.4558 7.88971 11.0832C7.61177 11.7105 7.53905 12.4007 7.68074 13.0667C7.82243 13.7326 8.17217 14.3444 8.68574 14.8245C9.19931 15.3046 9.85363 15.6316 10.566 15.764C11.2783 15.8965 12.0167 15.8285 12.6877 15.5687C13.3587 15.3088 13.9322 14.8688 14.3357 14.3043C14.7392 13.7397 14.9546 13.0759 14.9546 12.3969C14.9546 11.4864 14.5677 10.6132 13.879 9.96939C13.1903 9.32557 12.2563 8.96387 11.2824 8.96387Z" fill="#699FC9"/>
<path id="Vector_3" d="M15.689 25.271H6.87574C6.68095 25.271 6.49414 25.1987 6.35641 25.0699C6.21867 24.9411 6.1413 24.7665 6.1413 24.5844C6.1413 24.4023 6.21867 24.2276 6.35641 24.0989C6.49414 23.9701 6.68095 23.8978 6.87574 23.8978H15.689C15.8838 23.8978 16.0706 23.9701 16.2083 24.0989C16.3461 24.2276 16.4234 24.4023 16.4234 24.5844C16.4234 24.7665 16.3461 24.9411 16.2083 25.0699C16.0706 25.1987 15.8838 25.271 15.689 25.271Z" fill="#699FC9"/>
</g>
</g>
</g>
</g>
</svg>                    </div>
                    <div className="flex-grow  w-52  h-12 flex justify-between  items-center   text-black  ">
                      <h2 className="text-gray-900 text-[0.995rem]">
                        Umrah Visa
                      </h2>

                      <label className="font-normal  text-xs" htmlFor="yes">
                        Yes
                      </label>
                      <input type="radio" name="visa" id="yes" />
                      <label className="font-normal text-xs" htmlFor="no">
                        No
                      </label>
                      <input type="radio" name="visa" id="no" />
                    </div>
                  </div>
                </div>

                <div className="p-2 md:h-[60px] md:w-[240px] h-16 w-60 text-center">
                  <div className="h-full flex   border p-2.5 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-[#E4F0FF] rounded-lg">
                    <div className="   flex justify-center mr-4 "></div>
                    <div className="flex-grow">
                      <button>

                      <h2 className="text-[#699FC9] text-[0.995rem]">
                        Continue
                      </h2>

                      </button>
                    </div>
                  </div>
                </div>

                {/* Images */}
              </div>
            </div>
          </section>






















           
       

        {/* Button Section End */}
        </div>
       

        <div className="">
          <section className="text-gray-600 body-font ">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white">
                    <div className="bg-[#E4F0FF]  rounded-full h-12 w-12 flex justify-center mr-4 ">
                      <img
                        alt="team"
                        className=" object-contain h-6 w-6 m-auto"
                        src={download}
                      />
                    </div>{" "}
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-bold">
                        Download Umrah App
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Find the best deals on our mobile app.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white">
                    <div className="bg-[#E4F0FF]  rounded-full h-12 w-12 flex justify-center mr-4 ">
                      <img
                        alt="team"
                        className=" object-contain h-6 w-6 m-auto"
                        src={help}
                      />
                    </div>{" "}
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-bold">
                        Help Center
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Connect with our support team
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white">
                    <div className="bg-[#E4F0FF]  rounded-full h-12 w-12 flex justify-center mr-4 ">
                      <img
                        alt="team"
                        className=" object-contain h-6 w-6 m-auto"
                        src={booking}
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-bold">
                        Manage Bookings
                      </h2>
                      <p className="text-gray-500 text-sm">
                        View and manage your bookings{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Card Section End */}

          {/* Special Deal Start */}

          <div className="md:ml-0 ml-5">
            <h1 className=" text-2xl mx-5">Umrah Special deals</h1>
            <p className="  mx-5">
              We provide the best and most affordable services in Pakistan
            </p>

            <section className="text-gray-600 body-font">
              <div className="container px-5 py-6 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 sm:w-1/3 ">
                    <img src={masjid} alt="" />
                  </div>
                  <div className="p-4 sm:w-1/3 ">
                    <img src={haram} alt="" />
                  </div>
                  <div className="p-4 sm:w-1/3 ">
                    <img src={world} alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Special Deal End */}

          {/* Frequently Questions Start */}

          {/* <div className="md:ml-1 ml-5 mt-5 border-[#699FC9] border-l-8">
            <h1 className="text-2xl mx-5">Frequently asked Questions</h1>
            <br />

            <div className="flex float-right md:mr-14 mr-6">
              <button>
                <img src={plus} alt="" />
              </button>
              <button>
                <img src={minus} alt="" />
              </button>
            </div>

            <br />
            <p className=" mx-5">Why saer.pk</p>

            <input
              type="text"
              
             
              className="mx-5   outline-none  mt-2 h-20 w-11/12"
              placeholder="Write Your Question Here !"
            />
            <br />

           

            <br />
            <br />
            <br />
          </div> */}

<div className="md:ml-1 cursor-pointer ml-5 mt-5 border-[#699FC9] border-l-8">
            <h1 className="text-2xl mx-5">Frequently asked Questions</h1>
            <br />
            <br />

            <button className=" mx-5" onClick={()=>QustionTornari()} >Why saer.pk</button>
{
  Qustions ?

  null
  
  :
  <>
  <p className=" mx-5 mt-3 text-[15px] font-[400px] text-[#908F8F] flex-wrap flex " >
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
  scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting 
  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
   took a galley of type and scrambled it to make a type specimen book.
  </p>
  
  
  </>
}
           
            <br />
<br />
           
            <hr className=" border-gray-400 w-6/6 mx-5" />
            <p className="p-5 ml-2 cursor-pointer text-[20px] " onClick={()=>QustionTornari1()}>Can I customize my Umrah package?</p>
            {
              Qustions1 ?
              <p className=" mx-5 mt-3 mb-5 text-[15px] font-[400px] text-[#908F8F] flex-wrap flex">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and!
  </p>
              
              :

null
            }
            
            <hr className=" border-gray-400 w-6/6 mx-5" />
            <p className="p-5 ml-2 cursor-pointer text-[20px]" onClick={()=>QustionTornari2()}>What is included in a typical Umrah package?</p>
            {
              Qustions2 ?
              
              <p className=" mx-5 mt-3 text-[15px] cursor-pointer mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and!
  </p>
              :

null
            }
            <hr className=" border-gray-400 w-6/6 mx-5" />
            <p className="p-5 ml-2 cursor-pointer text-[20px] " onClick={()=>QustionTornari3()}>How do I choose the right Umrah package for me?</p>
            {
              Qustions3 ?
              <p className=" mx-5 mt-3 text-[15px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and!
  </p>
              
              :

null
            }
            <hr className=" border-gray-400 w-6/6 mx-5" />
            <p className="p-5 ml-2 cursor-pointer text-[20px] " onClick={()=>QustionTornari4()}>What is the best time to book an Umrah package?</p>
            {
              Qustions4 ?
              <p className=" mx-5 mt-3 text-[15px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and!
              </p>
              
              :

null
            }
            <hr className=" border-gray-400 w-6/6 mx-5" />
            <p className="p-5 ml-2 cursor-pointer text-[20px] " onClick={()=>QustionTornari5()}>What documents are required for Umrah?</p>

            {
              Qustions6 ?
              <p className=" mx-5 mt-3 text-[15px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and!
              </p>
              
              :

null
            }

            <hr className=" border-gray-400 w-6/6 mx-5" />
            <p className="p-5 ml-2 cursor-pointer text-[20px] " onClick={()=>QustionTornari6()}>Are there any age restrictions for Umrah?</p>
            {
              Qustions6 ?
              <p className=" mx-5 mt-3 text-[15px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and!
              </p>
              
              
              :

null
            }
            <hr className=" border-gray-400 w-6/6 mx-5" />
            <p className="p-5 ml-2 cursor-pointer text-[20px] " onClick={()=>QustionTornari7()}>What types of Umrah packages are available?</p>
            {
              Qustions7 ?
              <p className=" mx-5 mt-3 text-[15px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and!
  </p>
              
              
              :

null
            }

            

            <br />
            <br />
            <br />
          </div>


        </div>


{/* Travel date calender Modal start */}
{showModal ? (
        <>
          <div
          
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto  mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   Date of Travel
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                <div className="app flex ">


        <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
        className="mt-10"
        

        
      />

    

 

    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#699FC9] text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
{/* Travel date calender Modal End */}


{/* Return date calender Modal start */}
{returnCalenderModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   Return Date
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setreturnCalenderModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                <div className="app flex justify-center">


        <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
        className="mt-10"
        
      />

    

 

    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setreturnCalenderModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#699FC9] text-white active:bg-[#5f91b8] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setreturnCalenderModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
{/* Return date calender Modal End */}


    </>
  );


}
export default SearchUmrah;


