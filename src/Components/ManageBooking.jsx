import React from 'react'
// import Navigation from './Config/Navigation'
// import HotelCardDetails from './Components/HotelCardDetails'

import image94 from "../assests/image 94.png"
import qatar from "../assests/flight/qatar.png"

import booking from "../assests/booking.png";
import download from "../assests/download.png";
import help from "../assests/help.png";
import haram from "../assests/Images/haram.png";
import masjid from "../assests/Images/masjid.png";
import world from "../assests/Images/world.png";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";

import umrahvisa from "../assests/buttonIcons/umrahvisa.png";

import madina from "../assests/buttonIcons/madina.png";
import mecca from "../assests/buttonIcons/mecca.png";
import dateoftravel from "../assests/buttonIcons/dateoftravel.png";
import returndate from "../assests/buttonIcons/returndate.png";
import passengers from "../assests/buttonIcons/passengers.png";

import city from "../assests/buttonIcons/city.png";


function ManageBooking() {
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

          <section class=" body-font">
            <div class="container flex   py-5 mx-auto ">
              <div class="flex flex-wrap justify-evenly -m-2 ">
                <div class="p-2 h-16 w-56">
                  <div class="h-full flex items-center  border p-4 bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                      <img src={dateoftravel} alt="..." />
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-bold">
                        Date of Travel
                      </h2>
                    </div>
                  </div>
                </div>

                <div class="p-2 h-16 w-56">
                  <div class="h-full flex items-center  border p-4 bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                      <img src={returndate} alt="..." />
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-bold">
                        Return Date
                      </h2>
                    </div>
                  </div>
                </div>

                <div class="p-2 h-16 w-56">
                  <div class="h-full flex items-center  border p-4 bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                      <img src={city} alt="..." />
                    </div>
                    <div class="flex-grow font-bold">
                      <select required>
                        <option value="" selected disabled>
                          Choose your city
                        </option>

                        <option value="">Empty but valid</option>
                        <option value="a-value-here">Fully valid</option>
                      </select>{" "}
                    </div>
                  </div>
                </div>

                <div class="p-2 h-16 w-56">
                  <div class="h-full flex items-center  border p-2.5 bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                      <img src={passengers} alt="..." />
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-bold">
                        Total Passengers
                      </h2>
                    </div>
                  </div>
                </div>

                <div class="p-2 h-16 w-56">
                  <div class="h-full flex items-center  border p-2.5 bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                      <img className="h-8 w-8" src={mecca} alt="..." />
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-bold">
                        Night in Mecca
                      </h2>
                    </div>
                  </div>
                </div>

                <div class="p-2 h-16 w-56">
                  <div class="h-full flex items-center  border p-2.5 bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 ">
                      <img src={madina} alt="..." />
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-bold">
                        Night in Madina
                      </h2>
                    </div>
                  </div>
                </div>

                <div class="p-2 h-16 w-56">
                  <div class="h-full flex items-center  border p-2.5 bg-white rounded-lg">
                    <div className="   flex justify-center  ">
                      <img className="h-8 w-10" src={umrahvisa} alt="..." />
                    </div>
                    <div class="flex-grow  w-52  h-12 flex justify-between  items-center font-bold   text-black  ">
                      <h2 class="text-gray-900 title-font font-bold">
                        Umrah Visa
                      </h2>

                      <label className="font-normal  text-xs" htmlFor="yes">
                        Yes
                      </label>
                      <input type="radio" name="visa" id="yes" />
                      <label className="font-light text-xs" htmlFor="no">
                        No
                      </label>
                      <input type="radio" name="visa" id="no" />
                    </div>
                  </div>
                </div>

                <div class="p-2 h-16 w-56 text-center">
                  <div class="h-full flex   border p-2.5 bg-white rounded-lg">
                    <div className="   flex justify-center mr-4 "></div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-bold">
                        Continue
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Images */}
              </div>
            </div>
          </section>
        </div>



    
<div className='flex justify-between md:flex-row flex-col  '>

<div className='flex  bg-white items-center h-12  md:m-10 m-3'>
  <input type="text" placeholder='Search with order id' className='outline-none border-r-2 border-gray-200 p-2' />

  <svg width="35" height="35" className='p-2' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:sharp-search">
<path id="Vector" d="M18.0833 16.3333H17.1617L16.835 16.0183C18.0179 14.6464 18.668 12.8948 18.6667 11.0833C18.6667 9.58349 18.2219 8.11734 17.3886 6.87026C16.5554 5.62319 15.371 4.65121 13.9854 4.07725C12.5997 3.50329 11.0749 3.35311 9.6039 3.64572C8.13288 3.93832 6.78166 4.66056 5.72111 5.72111C4.66056 6.78166 3.93832 8.13288 3.64572 9.6039C3.35311 11.0749 3.50329 12.5997 4.07725 13.9854C4.65121 15.371 5.62319 16.5554 6.87026 17.3886C8.11734 18.2219 9.58349 18.6667 11.0833 18.6667C12.9617 18.6667 14.6883 17.9783 16.0183 16.835L16.3333 17.1617V18.0833L22.1667 23.905L23.905 22.1667L18.0833 16.3333ZM11.0833 16.3333C8.17834 16.3333 5.83334 13.9883 5.83334 11.0833C5.83334 8.17834 8.17834 5.83334 11.0833 5.83334C13.9883 5.83334 16.3333 8.17834 16.3333 11.0833C16.3333 13.9883 13.9883 16.3333 11.0833 16.3333Z" fill="#A5A5A5"/>
</g>
</svg>

</div>

<div className='md:m-10 m-3'>
  <h1 className='font-semibold text-sm md:text-xl ml-0.5'>Booking type</h1>

<div className='bg-white p-3  w-52 '>
  <select name="" id="" className='w-44 outline-none'>
    <option value=""  selected disabled>Umrah Packages</option>

<option value="">Hajj Package</option>
<option value="">Umrah Package</option>
<option value="">World Package</option>

  </select>

</div>

</div>


</div>

{/* card 01 start */}
<div className=' rounded-xl w-[90%]  mx-auto   bg-white'>
  <div className='flex justify-between bg-[#8cc0eb] items-center  px-8 rounded-tl-lg rounded-tr-lg '>

    <div className=' flex m-2 '>
      <img src={image94} alt="" />
      Umrah package
    </div>
    <span>Order iD: 767676</span>



  </div>
<div className='flex md:flex-row flex-col'  >

<div className='md:w-1/5 w-full '>

<h1 className="text-black text-base font-medium whitespace-nowrap self-start  ml-8 mt-10 mb-5 md:text-left text-center ">  Passenger</h1>
<div className='flex flex-col gap-3 items-center'>

  <div className='flex rounded-2xl border border-solid p-1  border-[#699FC9] items-center'>

  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-account-circle">
<path id="Vector" d="M12.5 2.08337C6.75004 2.08337 2.08337 6.75004 2.08337 12.5C2.08337 18.25 6.75004 22.9167 12.5 22.9167C18.25 22.9167 22.9167 18.25 22.9167 12.5C22.9167 6.75004 18.25 2.08337 12.5 2.08337ZM12.5 6.25004C14.5105 6.25004 16.1459 7.88546 16.1459 9.89587C16.1459 11.9063 14.5105 13.5417 12.5 13.5417C10.4896 13.5417 8.85421 11.9063 8.85421 9.89587C8.85421 7.88546 10.4896 6.25004 12.5 6.25004ZM12.5 20.8334C10.3855 20.8334 7.88546 19.9792 6.10421 17.8334C7.9288 16.4018 10.1809 15.6238 12.5 15.6238C14.8192 15.6238 17.0713 16.4018 18.8959 17.8334C17.1146 19.9792 14.6146 20.8334 12.5 20.8334Z" fill="#699FC9"/>
</g>
</svg>
    <span className='flex text-xs '>Mrs.Malik Nadia-Adult</span>
  </div>


  <div className='flex rounded-2xl border border-solid  p-1 border-slate-400 items-center'>

<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-account-circle">
<path id="Vector" d="M12.5 2.08337C6.75004 2.08337 2.08337 6.75004 2.08337 12.5C2.08337 18.25 6.75004 22.9167 12.5 22.9167C18.25 22.9167 22.9167 18.25 22.9167 12.5C22.9167 6.75004 18.25 2.08337 12.5 2.08337ZM12.5 6.25004C14.5105 6.25004 16.1459 7.88546 16.1459 9.89587C16.1459 11.9063 14.5105 13.5417 12.5 13.5417C10.4896 13.5417 8.85421 11.9063 8.85421 9.89587C8.85421 7.88546 10.4896 6.25004 12.5 6.25004ZM12.5 20.8334C10.3855 20.8334 7.88546 19.9792 6.10421 17.8334C7.9288 16.4018 10.1809 15.6238 12.5 15.6238C14.8192 15.6238 17.0713 16.4018 18.8959 17.8334C17.1146 19.9792 14.6146 20.8334 12.5 20.8334Z" fill="#699FC9"/>
</g>
</svg>
  <span className='flex flex-wrap text-xs'>Mrs.Malik Nadia-Adult</span>
</div>
<div className='flex rounded-2xl border border-solid p-1 border-slate-400 items-center'>

<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-account-circle">
<path id="Vector" d="M12.5 2.08337C6.75004 2.08337 2.08337 6.75004 2.08337 12.5C2.08337 18.25 6.75004 22.9167 12.5 22.9167C18.25 22.9167 22.9167 18.25 22.9167 12.5C22.9167 6.75004 18.25 2.08337 12.5 2.08337ZM12.5 6.25004C14.5105 6.25004 16.1459 7.88546 16.1459 9.89587C16.1459 11.9063 14.5105 13.5417 12.5 13.5417C10.4896 13.5417 8.85421 11.9063 8.85421 9.89587C8.85421 7.88546 10.4896 6.25004 12.5 6.25004ZM12.5 20.8334C10.3855 20.8334 7.88546 19.9792 6.10421 17.8334C7.9288 16.4018 10.1809 15.6238 12.5 15.6238C14.8192 15.6238 17.0713 16.4018 18.8959 17.8334C17.1146 19.9792 14.6146 20.8334 12.5 20.8334Z" fill="#699FC9"/>
</g>
</svg>
  <span className='flex flex-wrap text-xs'>Mrs.Malik Nadia-Adult</span>
</div>

</div>




</div>

<div className='md:w-4/5 w-full '>

<div className='flex justify-around flex-wrap md:flex-row flex-col '>



  <div className="">



  <div className="items-start flex w-[107px] max-w-full gap-1 self-start ">
  <div className="flex items-center justify-center text-black mx-auto">
                               <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0227b7c-ec76-4ccc-893c-5b7acca577ef?"
                                className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch max-w-full"
                              />
                              <span className=' text-xl'>  Hotel  
                              </span>
                              
                              
                              </div>


                            </div>
                            <div className="justify-center items-start rounded border flex w-[130px] max-w-full grow flex-col  pl-1   border-solid border-blue-400 self-start">
                              <span className="text-black  text-md capitalize whitespace-nowrap self-start">
                              Al Faris Hotel
                              </span>
                              <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                              10 nights : 15000pkr                              </div>
                              <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                              Date:25Sep to 30Sep                              </div>
                            </div>

</div>



<div className="">



<div className="items-start flex w-[107px] max-w-full gap-1 self-start ">
<div className="flex items-center justify-center text-black mx-auto">
                             <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0227b7c-ec76-4ccc-893c-5b7acca577ef?"
                              className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch max-w-full"
                            />
                            <span className=' text-xl'>  Hotel  
                            </span>
                            
                            
                            </div>


                          </div>
                          <div className="justify-center items-start rounded border flex w-[130px] max-w-full grow flex-col  pl-1   border-solid border-blue-400 self-start">
                            <span className="text-black  text-md capitalize whitespace-nowrap self-start">
                            Al Faris Hotel
                            </span>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            10 nights : 15000pkr                              </div>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            Date:25Sep to 30Sep                              </div>
                          </div>

</div>


<div className="">



<div className="items-start flex w-[107px] max-w-full gap-1 self-start ">
<div className="flex items-center justify-center text-black mx-auto">
                             <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0227b7c-ec76-4ccc-893c-5b7acca577ef?"
                              className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch max-w-full"
                            />
                            <span className=' text-xl'>  Hotel  
                            </span>
                            
                            
                            </div>


                          </div>
                          <div className="justify-center items-start rounded border flex w-[130px] max-w-full grow flex-col  pl-1   border-solid border-blue-400 self-start">
                            <span className="text-black  text-md capitalize whitespace-nowrap self-start">
                            Al Faris Hotel
                            </span>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            10 nights : 15000pkr                              </div>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            Date:25Sep to 30Sep                              </div>
                          </div>

</div>


<div className="">



<div className="items-start flex w-[107px] max-w-full gap-1 self-start ">
<div className="flex items-center justify-center text-black mx-auto">
                             <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0227b7c-ec76-4ccc-893c-5b7acca577ef?"
                              className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch max-w-full"
                            />
                            <span className=' text-xl'>  Hotel  
                            </span>
                            
                            
                            </div>


                          </div>
                          <div className="justify-center items-start rounded border flex w-[130px] max-w-full grow flex-col  pl-1   border-solid border-blue-400 self-start">
                            <span className="text-black  text-md capitalize whitespace-nowrap self-start">
                            Al Faris Hotel
                            </span>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            10 nights : 15000pkr                              </div>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            Date:25Sep to 30Sep                              </div>
                          </div>

</div>



<div className="">

<div className="flex flex-col  mt-9 max-md:mt-10">
                            <div className="justify-center items-center rounded bg-slate-400 self-center flex w-[101px] max-w-full flex-col mx-auto  px-5 py-1">
                              <div className="text-white text-xs font-medium capitalize self-center whitespace-nowrap">
                                re-price
                              </div>
                            </div>
                            <div className="justify-center items-center border bg-slate-400 bg-opacity-20 self-stretch flex w-full grow flex-col mt-5 px-5 py-3 rounded-2xl border-solid border-slate-400">
                              <div className="text-black text-xs self-center whitespace-nowrap">
                                Order expired
                              </div>
                            </div>
                          </div>
</div>



</div>
<div className="border bg-white flex w-[95%] max-w-full flex-col mt-9 pb-2.5 rounded-lg border-solid border-zinc-300 border-opacity-50 self-start">
                      <div className=" self-stretch flex flex-col pl-4 pr-5 py-1.5 bg-[#8cc0eb] rounded-lg max-md:max-w-full">
                        <div className="flex w-[617px] max-w-full items-start justify-between gap-5 self-start max-md:flex-wrap">
                          <div className="items-start flex gap-2.5 self-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d49c7ed-ff18-4490-8dd2-2fb5e682025c?"
                              className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden flex-1"
                            />
                            <div className="text-stone-900 text-xs self-stretch whitespace-nowrap">
                              Flight{" "}
                            </div>
                          </div>
                          <div className="text-stone-900 text-sm whitespace-nowrap mt-1.5 self-start">
                            Pnr : xv8jpl
                          </div>
                        </div>
                      </div>
                      <div className="self-center w-[618px] max-w-full mt-3.5">
                        <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[91%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col w-[548px] max-md:max-w-full max-md:mt-4">
                              <div className="self-stretch flex w-full items-start justify-between gap-5 max-md:flex-wrap max-md:mr-px">
                                <div className="flex w-[155px] max-w-full items-start justify-between  self-start">
                                  <div className="self-stretch flex flex-col">
                                    <img
                                      loading="lazy"
                                      src={qatar}
                                      className="  object-center w-full mix-blend-multiply overflow-hidden self-start border-gray-200 border rounded-lg"
                                    />
                                    <div className="justify-center text-black text-xs font-light whitespace-nowrap self-start">
                                      QATAR airways
                                    </div>
                                  </div>
                                  <div className="items-start self-stretch flex flex-col">
                                    <div className="text-black text-xs whitespace-nowrap self-start">
                                      09:45 AM{" "}
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      12 sep
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      {" "}
                                      Lahore (LHE)
                                    </div>
                                  </div>
                                </div>
                                <div className="flex w-[215px] max-w-full items-start justify-between gap-5 self-start">
                                  <div className="flex flex-col mt-2.5 self-start">
                                    <div className="text-zinc-500 text-xs self-stretch whitespace-nowrap">
                                      1h 50m
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/31995553-9b67-4de2-a14d-3bcdd254e581?"
                                      className="aspect-square object-contain object-center w-2.5 stroke-[2px] stroke-slate-400 overflow-hidden self-center max-w-full mt-1.5"
                                    />
                                    <div className="text-zinc-500 text-xs self-center whitespace-nowrap mt-2">
                                      KHI
                                    </div>
                                  </div>
                                  <div className="items-start flex flex-col self-start">
                                    <div className="text-black text-xs whitespace-nowrap self-start">
                                      09:10 PM
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      12 sep
                                    </div>
                                    <div className="text-neutral-400 text-xs uppercase whitespace-nowrap self-start">
                                      Jeddah (Jed)
                                    </div>
                                  </div>




                                






                                </div>
                              </div>
                              <div className="self-stretch flex w-full items-start justify-between gap-5 mt-8 max-md:flex-wrap">
                                <div className="flex w-[155px] max-w-full items-start justify-between gap-5 self-start">
                                  <div className="self-stretch flex flex-col">
                                    <img
                                      loading="lazy"
                                      src={qatar}
                                      className=" object-center w-full mix-blend-multiply overflow-hidden self-start border-gray-200 border rounded-lg"
                                    />
                                    <span className="justify-center text-black text-xs font-light  whitespace-nowrap self-start">
                                      QATAR airways
                                    </span>
                                  </div>
                                  <div className="items-start self-stretch flex flex-col">
                                    <div className="text-black text-xs whitespace-nowrap self-start">
                                      09:45 AM{" "}
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      12 sep
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      {" "}
                                      Lahore (LHE)
                                    </div>
                                  </div>
                                </div>
                                <div className="flex w-[215px] max-w-full items-start justify-between gap-5 self-start">
                                  <div className="flex flex-col mt-2.5 self-start">
                                    <div className="text-zinc-500 text-xs self-stretch whitespace-nowrap">
                                      1h 50m
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a9aaea6-f2bd-40bf-adc0-e2959c7398b3?"
                                      className="aspect-square object-contain object-center w-2.5 stroke-[2px] stroke-slate-400 overflow-hidden self-center max-w-full mt-1.5"
                                    />
                                    <div className="text-zinc-500 text-xs self-center whitespace-nowrap mt-2">
                                      KHI
                                    </div>
                                  </div>
                                  <div className="items-start flex flex-col self-start">
                                    <div className="text-black text-xs whitespace-nowrap self-start">
                                      09:10 PM
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      12 sep
                                    </div>
                                    <div className="text-neutral-400 text-xs uppercase whitespace-nowrap self-start">
                                      Jeddah (Jed)
                                    </div>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[9%] ml-5 max-md:w-full max-md:ml-0">
                            
                          </div>
                        </div>
                      </div>
                      <div className="self-center flex w-[620px] max-w-full items-start justify-between gap-5 mt-2.5 max-md:flex-wrap">
                        <div className="items-start flex w-[181px] max-w-full justify-between gap-5 self-start">
                          <div className="items-start self-stretch flex justify-between gap-1.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b24215be-c595-4ab6-9e40-082cb96a432a?"
                              className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch max-w-full"
                            />
                            <div className="text-slate-400 text-center text-xs self-stretch whitespace-nowrap">
                              Total: 30 kg psc: 2
                            </div>
                          </div>
                          <div className="items-start self-stretch flex justify-between gap-1.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/53aa3874-cf41-438a-9e22-2eb40c9e1d32?"
                              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                            />
                            <div className="text-slate-400 text-center text-xs self-stretch whitespace-nowrap">
                              Meal
                            </div>
                          </div>
                        </div>
                        <div className="text-neutral-700 text-xs whitespace-nowrap mt-1.5 self-start">
                          <span className="font-semibold text-black text-opacity-90">
                            PKR 2,28000
                          </span>
                          <span className=" text-black text-opacity-90">/</span>
                          <span className=" text-neutral-700"> 1 Person</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded border bg-white flex w-[409px] max-w-full items-start justify-between gap-5 mt-4 pl-2.5 pr-6 py-1.5 border-solid border-slate-400 self-start max-md:justify-center max-md:ml-1">
                      <div className="text-black text-xs my-auto">
                        Booking creation date: 12-08-2024
                      </div>
                      <div className="bg-zinc-300 self-stretch flex w-px h-[26px] flex-col" />
                      <div className="text-black text-xs my-auto">
                        Booking expiry date: 12-08-2024
                      </div>
                    </div>

</div>

</div>



</div>
{/* card 01 end  */}
<br />
<br />
<div className=' rounded-xl w-[90%]  mx-auto   bg-white'>
  <div className='flex justify-between bg-[#8cc0eb] items-center  px-8 rounded-tl-lg rounded-tr-lg '>

    <div className=' flex m-2 '>
      <img src={image94} alt="" />
      Umrah package
    </div>
    <span>Order iD: 767676</span>



  </div>
<div className='flex md:flex-row flex-col'  >

<div className='md:w-1/5 w-full '>

<h1 className="text-black text-base font-medium whitespace-nowrap self-start  ml-8 mt-10 mb-5 md:text-left text-center ">  Passenger</h1>
<div className='flex flex-col gap-3 items-center'>

  <div className='flex rounded-2xl border border-solid p-1  border-[#699FC9] items-center'>

  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-account-circle">
<path id="Vector" d="M12.5 2.08337C6.75004 2.08337 2.08337 6.75004 2.08337 12.5C2.08337 18.25 6.75004 22.9167 12.5 22.9167C18.25 22.9167 22.9167 18.25 22.9167 12.5C22.9167 6.75004 18.25 2.08337 12.5 2.08337ZM12.5 6.25004C14.5105 6.25004 16.1459 7.88546 16.1459 9.89587C16.1459 11.9063 14.5105 13.5417 12.5 13.5417C10.4896 13.5417 8.85421 11.9063 8.85421 9.89587C8.85421 7.88546 10.4896 6.25004 12.5 6.25004ZM12.5 20.8334C10.3855 20.8334 7.88546 19.9792 6.10421 17.8334C7.9288 16.4018 10.1809 15.6238 12.5 15.6238C14.8192 15.6238 17.0713 16.4018 18.8959 17.8334C17.1146 19.9792 14.6146 20.8334 12.5 20.8334Z" fill="#699FC9"/>
</g>
</svg>
    <span className='flex text-xs '>Mrs.Malik Nadia-Adult</span>
  </div>


  <div className='flex rounded-2xl border border-solid  p-1 border-slate-400 items-center'>

<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-account-circle">
<path id="Vector" d="M12.5 2.08337C6.75004 2.08337 2.08337 6.75004 2.08337 12.5C2.08337 18.25 6.75004 22.9167 12.5 22.9167C18.25 22.9167 22.9167 18.25 22.9167 12.5C22.9167 6.75004 18.25 2.08337 12.5 2.08337ZM12.5 6.25004C14.5105 6.25004 16.1459 7.88546 16.1459 9.89587C16.1459 11.9063 14.5105 13.5417 12.5 13.5417C10.4896 13.5417 8.85421 11.9063 8.85421 9.89587C8.85421 7.88546 10.4896 6.25004 12.5 6.25004ZM12.5 20.8334C10.3855 20.8334 7.88546 19.9792 6.10421 17.8334C7.9288 16.4018 10.1809 15.6238 12.5 15.6238C14.8192 15.6238 17.0713 16.4018 18.8959 17.8334C17.1146 19.9792 14.6146 20.8334 12.5 20.8334Z" fill="#699FC9"/>
</g>
</svg>
  <span className='flex flex-wrap text-xs'>Mrs.Malik Nadia-Adult</span>
</div>
<div className='flex rounded-2xl border border-solid p-1 border-slate-400 items-center'>

<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-account-circle">
<path id="Vector" d="M12.5 2.08337C6.75004 2.08337 2.08337 6.75004 2.08337 12.5C2.08337 18.25 6.75004 22.9167 12.5 22.9167C18.25 22.9167 22.9167 18.25 22.9167 12.5C22.9167 6.75004 18.25 2.08337 12.5 2.08337ZM12.5 6.25004C14.5105 6.25004 16.1459 7.88546 16.1459 9.89587C16.1459 11.9063 14.5105 13.5417 12.5 13.5417C10.4896 13.5417 8.85421 11.9063 8.85421 9.89587C8.85421 7.88546 10.4896 6.25004 12.5 6.25004ZM12.5 20.8334C10.3855 20.8334 7.88546 19.9792 6.10421 17.8334C7.9288 16.4018 10.1809 15.6238 12.5 15.6238C14.8192 15.6238 17.0713 16.4018 18.8959 17.8334C17.1146 19.9792 14.6146 20.8334 12.5 20.8334Z" fill="#699FC9"/>
</g>
</svg>
  <span className='flex flex-wrap text-xs'>Mrs.Malik Nadia-Adult</span>
</div>

</div>




</div>

<div className='md:w-4/5 w-full '>

<div className='flex justify-around flex-wrap md:flex-row flex-col '>



  <div className="">



  <div className="items-start flex w-[107px] max-w-full gap-1 self-start ">
  <div className="flex items-center justify-center text-black mx-auto">
                               <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0227b7c-ec76-4ccc-893c-5b7acca577ef?"
                                className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch max-w-full"
                              />
                              <span className=' text-xl'>  Hotel  
                              </span>
                              
                              
                              </div>


                            </div>
                            <div className="justify-center items-start rounded border flex w-[130px] max-w-full grow flex-col  pl-1   border-solid border-blue-400 self-start">
                              <span className="text-black  text-md capitalize whitespace-nowrap self-start">
                              Al Faris Hotel
                              </span>
                              <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                              10 nights : 15000pkr                              </div>
                              <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                              Date:25Sep to 30Sep                              </div>
                            </div>

</div>



<div className="">



<div className="items-start flex w-[107px] max-w-full gap-1 self-start ">
<div className="flex items-center justify-center text-black mx-auto">
                             <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0227b7c-ec76-4ccc-893c-5b7acca577ef?"
                              className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch max-w-full"
                            />
                            <span className=' text-xl'>  Hotel  
                            </span>
                            
                            
                            </div>


                          </div>
                          <div className="justify-center items-start rounded border flex w-[130px] max-w-full grow flex-col  pl-1   border-solid border-blue-400 self-start">
                            <span className="text-black  text-md capitalize whitespace-nowrap self-start">
                            Al Faris Hotel
                            </span>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            10 nights : 15000pkr                              </div>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            Date:25Sep to 30Sep                              </div>
                          </div>

</div>


<div className="">



<div className="items-start flex w-[107px] max-w-full gap-1 self-start ">
<div className="flex items-center justify-center text-black mx-auto">
                             <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0227b7c-ec76-4ccc-893c-5b7acca577ef?"
                              className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch max-w-full"
                            />
                            <span className=' text-xl'>  Hotel  
                            </span>
                            
                            
                            </div>


                          </div>
                          <div className="justify-center items-start rounded border flex w-[130px] max-w-full grow flex-col  pl-1   border-solid border-blue-400 self-start">
                            <span className="text-black  text-md capitalize whitespace-nowrap self-start">
                            Al Faris Hotel
                            </span>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            10 nights : 15000pkr                              </div>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            Date:25Sep to 30Sep                              </div>
                          </div>

</div>


<div className="">



<div className="items-start flex w-[107px] max-w-full gap-1 self-start ">
<div className="flex items-center justify-center text-black mx-auto">
                             <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0227b7c-ec76-4ccc-893c-5b7acca577ef?"
                              className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch max-w-full"
                            />
                            <span className=' text-xl'>  Hotel  
                            </span>
                            
                            
                            </div>


                          </div>
                          <div className="justify-center items-start rounded border flex w-[130px] max-w-full grow flex-col  pl-1   border-solid border-blue-400 self-start">
                            <span className="text-black  text-md capitalize whitespace-nowrap self-start">
                            Al Faris Hotel
                            </span>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            10 nights : 15000pkr                              </div>
                            <div className="text-black  text-opacity-90 text-xs whitespace-nowrap mt-1 self-start">
                            Date:25Sep to 30Sep                              </div>
                          </div>

</div>



<div className="">

<div className="flex flex-col  mt-9 max-md:mt-10">
                            <div className="justify-center items-center rounded bg-slate-400 self-center flex w-[101px] max-w-full flex-col mx-auto  px-5 py-1">
                              <div className="text-white text-xs font-medium capitalize self-center whitespace-nowrap">
                                re-price
                              </div>
                            </div>
                            <div className="justify-center items-center border bg-slate-400 bg-opacity-20 self-stretch flex w-full grow flex-col mt-5 px-5 py-3 rounded-2xl border-solid border-slate-400">
                              <div className="text-black text-xs self-center whitespace-nowrap">
                                Order expired
                              </div>
                            </div>
                          </div>
</div>



</div>
<div className="border bg-white flex w-[95%] max-w-full flex-col mt-9 pb-2.5 rounded-lg border-solid border-zinc-300 border-opacity-50 self-start">
                      <div className=" self-stretch flex flex-col pl-4 pr-5 py-1.5 bg-[#8cc0eb] rounded-lg max-md:max-w-full">
                        <div className="flex w-[617px] max-w-full items-start justify-between gap-5 self-start max-md:flex-wrap">
                          <div className="items-start flex gap-2.5 self-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d49c7ed-ff18-4490-8dd2-2fb5e682025c?"
                              className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden flex-1"
                            />
                            <div className="text-stone-900 text-xs self-stretch whitespace-nowrap">
                              Flight{" "}
                            </div>
                          </div>
                          <div className="text-stone-900 text-sm whitespace-nowrap mt-1.5 self-start">
                            Pnr : xv8jpl
                          </div>
                        </div>
                      </div>
                      <div className="self-center w-[618px] max-w-full mt-3.5">
                        <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[91%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col w-[548px] max-md:max-w-full max-md:mt-4">
                              <div className="self-stretch flex w-full items-start justify-between gap-5 max-md:flex-wrap max-md:mr-px">
                                <div className="flex w-[155px] max-w-full items-start justify-between  self-start">
                                  <div className="self-stretch flex flex-col">
                                    <img
                                      loading="lazy"
                                      src={qatar}
                                      className="  object-center w-full mix-blend-multiply overflow-hidden self-start border-gray-200 border rounded-lg"
                                    />
                                    <div className="justify-center text-black text-xs font-light whitespace-nowrap self-start">
                                      QATAR airways
                                    </div>
                                  </div>
                                  <div className="items-start self-stretch flex flex-col">
                                    <div className="text-black text-xs whitespace-nowrap self-start">
                                      09:45 AM{" "}
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      12 sep
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      {" "}
                                      Lahore (LHE)
                                    </div>
                                  </div>
                                </div>
                                <div className="flex w-[215px] max-w-full items-start justify-between gap-5 self-start">
                                  <div className="flex flex-col mt-2.5 self-start">
                                    <div className="text-zinc-500 text-xs self-stretch whitespace-nowrap">
                                      1h 50m
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/31995553-9b67-4de2-a14d-3bcdd254e581?"
                                      className="aspect-square object-contain object-center w-2.5 stroke-[2px] stroke-slate-400 overflow-hidden self-center max-w-full mt-1.5"
                                    />
                                    <div className="text-zinc-500 text-xs self-center whitespace-nowrap mt-2">
                                      KHI
                                    </div>
                                  </div>
                                  <div className="items-start flex flex-col self-start">
                                    <div className="text-black text-xs whitespace-nowrap self-start">
                                      09:10 PM
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      12 sep
                                    </div>
                                    <div className="text-neutral-400 text-xs uppercase whitespace-nowrap self-start">
                                      Jeddah (Jed)
                                    </div>
                                  </div>




                                






                                </div>
                              </div>
                              <div className="self-stretch flex w-full items-start justify-between gap-5 mt-8 max-md:flex-wrap">
                                <div className="flex w-[155px] max-w-full items-start justify-between gap-5 self-start">
                                  <div className="self-stretch flex flex-col">
                                    <img
                                      loading="lazy"
                                      src={qatar}
                                      className=" object-center w-full mix-blend-multiply overflow-hidden self-start border-gray-200 border rounded-lg"
                                    />
                                    <span className="justify-center text-black text-xs font-light  whitespace-nowrap self-start">
                                      QATAR airways
                                    </span>
                                  </div>
                                  <div className="items-start self-stretch flex flex-col">
                                    <div className="text-black text-xs whitespace-nowrap self-start">
                                      09:45 AM{" "}
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      12 sep
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      {" "}
                                      Lahore (LHE)
                                    </div>
                                  </div>
                                </div>
                                <div className="flex w-[215px] max-w-full items-start justify-between gap-5 self-start">
                                  <div className="flex flex-col mt-2.5 self-start">
                                    <div className="text-zinc-500 text-xs self-stretch whitespace-nowrap">
                                      1h 50m
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a9aaea6-f2bd-40bf-adc0-e2959c7398b3?"
                                      className="aspect-square object-contain object-center w-2.5 stroke-[2px] stroke-slate-400 overflow-hidden self-center max-w-full mt-1.5"
                                    />
                                    <div className="text-zinc-500 text-xs self-center whitespace-nowrap mt-2">
                                      KHI
                                    </div>
                                  </div>
                                  <div className="items-start flex flex-col self-start">
                                    <div className="text-black text-xs whitespace-nowrap self-start">
                                      09:10 PM
                                    </div>
                                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                                      12 sep
                                    </div>
                                    <div className="text-neutral-400 text-xs uppercase whitespace-nowrap self-start">
                                      Jeddah (Jed)
                                    </div>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[9%] ml-5 max-md:w-full max-md:ml-0">
                            
                          </div>
                        </div>
                      </div>
                      <div className="self-center flex w-[620px] max-w-full items-start justify-between gap-5 mt-2.5 max-md:flex-wrap">
                        <div className="items-start flex w-[181px] max-w-full justify-between gap-5 self-start">
                          <div className="items-start self-stretch flex justify-between gap-1.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b24215be-c595-4ab6-9e40-082cb96a432a?"
                              className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch max-w-full"
                            />
                            <div className="text-slate-400 text-center text-xs self-stretch whitespace-nowrap">
                              Total: 30 kg psc: 2
                            </div>
                          </div>
                          <div className="items-start self-stretch flex justify-between gap-1.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/53aa3874-cf41-438a-9e22-2eb40c9e1d32?"
                              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                            />
                            <div className="text-slate-400 text-center text-xs self-stretch whitespace-nowrap">
                              Meal
                            </div>
                          </div>
                        </div>
                        <div className="text-neutral-700 text-xs whitespace-nowrap mt-1.5 self-start">
                          <span className="font-semibold text-black text-opacity-90">
                            PKR 2,28000
                          </span>
                          <span className=" text-black text-opacity-90">/</span>
                          <span className=" text-neutral-700"> 1 Person</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded border bg-white flex w-[409px] max-w-full items-start justify-between gap-5 mt-4 pl-2.5 pr-6 py-1.5 border-solid border-slate-400 self-start max-md:justify-center max-md:ml-1">
                      <div className="text-black text-xs my-auto">
                        Booking creation date: 12-08-2024
                      </div>
                      <div className="bg-zinc-300 self-stretch flex w-px h-[26px] flex-col" />
                      <div className="text-black text-xs my-auto">
                        Booking expiry date: 12-08-2024
                      </div>
                    </div>

</div>

</div>



</div>

                  
                



    </>
  )
}

export default ManageBooking