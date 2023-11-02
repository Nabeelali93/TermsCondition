import React, { useState } from "react";
import qatar from '../assests/flight/qatar.png'
import { useNavigate } from "react-router-dom";



function Flight() {
   
  const nav = useNavigate()

  const gocontact=()=>{
nav("/ContactDetails")
  }
  
  return (
    <>
    
    <div className="   flex  gap-1 ">
        
      

  <div className="w-1/5   p-3 bg-white ">
  <h1 className="text-xl font-semibold">price</h1>
  <h1 className="text-xl  my-2 text-gray-300">Rs 228,000</h1>

  <input type="range"/>
  <br />
  <hr  className=" bg-black"/>
  <br />
  <h1 className="text-xl font-semibold">Stops</h1>
<div className="space-x-2 text-gray-300 items-center my-2">
<input type="checkbox"/>
  <label htmlFor="" className="">1 stop</label>
</div>
  <br />
  <hr  className=" bg-black"/>
  <br />

  <h1 className="text-xl font-semibold">Flights</h1>

  <div className="space-x-2 text-gray-300 items-center my-2">
<input type="checkbox"/>
  <label htmlFor="" className="">Saudia arabia airlines</label>
</div>
<div className="space-x-2 text-gray-300 items-center ">
<input type="checkbox"/>
  <label htmlFor="" className="">Qatar airways</label>
</div>
  
  
  </div> *


<div className="w-4/5  flex-row  ">  

<div className="  flex justify-between h-20">   
<h1 className="m-5" >Flights Found</h1>
<input type="text" placeholder="Search Flights "  className="rounded-tl-lg rounded-br-lg h-10 w-56 m-5 "/>



</div>

<div className="bg-white m-3">
  
 {/* <div className="bg-white flex flex-col   rounded-lg">
      <div className="self-stretch flex flex-col  mt-7 mb-5 max-md:max-w-full">
        <div className="w-[841px] max-w-full  self-end max-md:mr-2.5">
          <div className="gap-2 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[88%] max-md:w-full max-md:ml-0">
              <div className=" flex grow flex-col w-[680px] max-md:max-w-full max-md:mt-10">
                <div className=" self-stretch flex w-full items-start justify-between  max-md:flex-wrap max-md:justify-center">



                  <div className=" flex w-[215px] max-w-full items-start justify-between  self-start">
                    <div className="flex flex-col self-start">
                      <img
                        loading="lazy"
                        src={qatar}
                        className="aspect-[2.25]  border-gray-200 border object-center w-18 h-14 justify-center items-center overflow-hidden "
                      />
                      <div className="text-black text-xs font-light leading-10 self-center whitespace-nowrap">
                        QATAR airways
                      </div>
                    </div>
                    <div className="items-start flex flex-col mt-1.5 self-start">
                      <div className="text-black text-xl whitespace-nowrap self-start">
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


                  
                  <div className=" flex flex-col text-center">
                    <div className="text-zinc-500 text-xs self-stretch whitespace-nowrap">
                      1h 50m
  
                    </div>
                    <br />

                  <hr className="w-32" />
                    
                    <div className="text-zinc-500 text-xs self-center whitespace-nowrap mt-3.5">
                      KHI
                    </div>
                  </div>



                  <div className="items-start flex flex-col self-start">
                    <div className="text-black text-xl whitespace-nowrap self-start">
                      09:10 PM
                    </div>
                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                      12 sep
                    </div>
                    <div className="text-neutral-400 text-xs uppercase whitespace-nowrap self-start">
                      Jeddah (Jed)
                    </div>
                  </div>

                  <div className="justify-center items-center flex w-[88px] max-w-full flex-col self-start ">
                  <div className="text-black text-xl self-stretch whitespace-nowrap">
                    07h 50m
                  </div>
                  <div className="text-slate-400 text-xs uppercase self-center whitespace-nowrap">
                    1 stop
                  </div>
                  <div className=" text-red-400  text-xs font-light self-center whitespace-nowrap justify-center items-center rounded w-[48px] max-w-full mt-6    border-[0.5px] border-solid border-red-100">
                  3 seats available
                </div>
                </div>
                

                </div>

<hr className="border-gray-400 w-[700px]  my-3" />


               






<div className=" self-stretch flex w-full items-start justify-between  max-md:flex-wrap max-md:justify-center">



<div className=" flex w-[215px] max-w-full items-start justify-between  self-start">
  <div className="flex flex-col self-start">
    <img
      loading="lazy"
      src={qatar}
      className="aspect-[2.25]  border-gray-200 border object-center w-18 h-14 justify-center items-center overflow-hidden "
    />
    <div className="text-black text-xs font-light leading-10 self-center whitespace-nowrap">
      QATAR airways
    </div>
  </div>
  <div className="items-start flex flex-col mt-1.5 self-start">
    <div className="text-black text-xl whitespace-nowrap self-start">
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



<div className=" flex flex-col text-center">
  <div className="text-zinc-500 text-xs self-stretch whitespace-nowrap">
    1h 50m

  </div>
  <br />

<hr className="w-32" />
  
  <div className="text-zinc-500 text-xs self-center whitespace-nowrap mt-3.5">
    KHI
  </div>
</div>



<div className="items-start flex flex-col self-start">
  <div className="text-black text-xl whitespace-nowrap self-start">
    09:10 PM
  </div>
  <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
    12 sep
  </div>
  <div className="text-neutral-400 text-xs uppercase whitespace-nowrap self-start">
    Jeddah (Jed)
  </div>
</div>

<div className="justify-center items-center flex w-[88px] max-w-full flex-col self-start ">
<div className="text-black text-xl self-stretch whitespace-nowrap">
  07h 50m
</div>
<div className="text-slate-400 text-xs uppercase self-center whitespace-nowrap">
  1 stop
</div>
<div className=" text-red-400  text-xs font-light self-center whitespace-nowrap justify-center items-center rounded w-[48px] max-w-full mt-6    border-[0.5px] border-solid border-red-100">
3 seats available
</div>
</div>


</div>



<hr className="border-gray-400 w-[700px]  my-3" />


              </div>
            </div>



            



          </div>
        </div>


        
        <div className="items-start flex w-[229px] max-w-full justify-between gap-5 mr-3 mt-2.5 self-end max-md:mr-2.5">
          <div className="items-start self-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/514f4e9b-8a49-40a6-8525-a6e35b7dd9d1?"
              className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
            />
            <div className="text-slate-400 text-center text-sm self-stretch whitespace-nowrap">
              Total: 30 kg psc: 2
            </div>
          </div>
          <div className="items-start self-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1f24b2-addf-4cd2-9604-d6ae2e0bf9e9?"
              className="aspect-square object-contain object-center w-full overflow-hidden flex-1 my-auto"
            />
            <div className="text-slate-400 text-center text-sm self-stretch whitespace-nowrap">
              Meal
            </div>
          </div>
        </div>
        <div className="flex w-[846px] max-w-full items-start justify-between gap-5 mt-7 self-end max-md:flex-wrap max-md:justify-center">
          <div className="text-sky-700 text-base self-center whitespace-nowrap justify-center items-center rounded bg-sky-100 w-[122px] max-w-full my-auto px-4 py-2">
            Refundable
          </div>
          <div className="text-neutral-700 text-base my-auto">
            <span className="font-semibold text-black text-opacity-90">
              PKR 2,28000
            </span>
            <span className=" text-black text-opacity-90">/</span>
            <span className=" text-neutral-700"> 1 Person</span>
          </div>
          <div onClick={()=>gocontact()} className="text-white text-lg font-medium self-stretch whitespace-nowrap justify-center items-center rounded bg-sky-700 w-[120px] max-w-full px-5 py-2.5">
            Continue
          </div>
        </div>
      </div>
    </div>  */}


</div>
<br />



{/* <div className="bg-white m-3">
  
<div className="bg-white flex flex-col   rounded-lg">
      <div className="self-stretch flex flex-col  mt-7 mb-5 max-md:max-w-full">
        <div className="w-[841px] max-w-full  self-end max-md:mr-2.5">
          <div className="gap-2 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[88%] max-md:w-full max-md:ml-0">
              <div className=" flex grow flex-col w-[680px] max-md:max-w-full max-md:mt-10">
                <div className=" self-stretch flex w-full items-start justify-between  max-md:flex-wrap max-md:justify-center">



                  <div className=" flex w-[215px] max-w-full items-start justify-between  self-start">
                    <div className="flex flex-col self-start">
                      <img
                        loading="lazy"
                        src={qatar}
                        className="aspect-[2.25]  border-gray-200 border object-center w-18 h-14 justify-center items-center overflow-hidden "
                      />
                      <div className="text-black text-xs font-light leading-10 self-center whitespace-nowrap">
                        QATAR airways
                      </div>
                    </div>
                    <div className="items-start flex flex-col mt-1.5 self-start">
                      <div className="text-black text-xl whitespace-nowrap self-start">
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


                  
                  <div className=" flex flex-col text-center">
                    <div className="text-zinc-500 text-xs self-stretch whitespace-nowrap">
                      1h 50m
  
                    </div>
                    <br />

                  <hr className="w-32" />
                    
                    <div className="text-zinc-500 text-xs self-center whitespace-nowrap mt-3.5">
                      KHI
                    </div>
                  </div>



                  <div className="items-start flex flex-col self-start">
                    <div className="text-black text-xl whitespace-nowrap self-start">
                      09:10 PM
                    </div>
                    <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
                      12 sep
                    </div>
                    <div className="text-neutral-400 text-xs uppercase whitespace-nowrap self-start">
                      Jeddah (Jed)
                    </div>
                  </div>

                  <div className="justify-center items-center flex w-[88px] max-w-full flex-col self-start ">
                  <div className="text-black text-xl self-stretch whitespace-nowrap">
                    07h 50m
                  </div>
                  <div className="text-slate-400 text-xs uppercase self-center whitespace-nowrap">
                    1 stop
                  </div>
                  <div className=" text-red-400  text-xs font-light self-center whitespace-nowrap justify-center items-center rounded w-[48px] max-w-full mt-6    border-[0.5px] border-solid border-red-100">
                  3 seats available
                </div>
                </div>
                

                </div>

<hr className="border-gray-400 w-[700px]  my-3" />


               






<div className=" self-stretch flex w-full items-start justify-between  max-md:flex-wrap max-md:justify-center">



<div className=" flex w-[215px] max-w-full items-start justify-between  self-start">
  <div className="flex flex-col self-start">
    <img
      loading="lazy"
      src={qatar}
      className="aspect-[2.25]  border-gray-200 border object-center w-18 h-14 justify-center items-center overflow-hidden "
    />
    <div className="text-black text-xs font-light leading-10 self-center whitespace-nowrap">
      QATAR airways
    </div>
  </div>
  <div className="items-start flex flex-col mt-1.5 self-start">
    <div className="text-black text-xl whitespace-nowrap self-start">
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



<div className=" flex flex-col text-center">
  <div className="text-zinc-500 text-xs self-stretch whitespace-nowrap">
    1h 50m

  </div>
  <br />

<hr className="w-32" />
  
  <div className="text-zinc-500 text-xs self-center whitespace-nowrap mt-3.5">
    KHI
  </div>
</div>



<div className="items-start flex flex-col self-start">
  <div className="text-black text-xl whitespace-nowrap self-start">
    09:10 PM
  </div>
  <div className="text-neutral-400 text-xs whitespace-nowrap self-start">
    12 sep
  </div>
  <div className="text-neutral-400 text-xs uppercase whitespace-nowrap self-start">
    Jeddah (Jed)
  </div>
</div>

<div className="justify-center items-center flex w-[88px] max-w-full flex-col self-start ">
<div className="text-black text-xl self-stretch whitespace-nowrap">
  07h 50m
</div>
<div className="text-slate-400 text-xs uppercase self-center whitespace-nowrap">
  1 stop
</div>
<div className=" text-red-400  text-xs font-light self-center whitespace-nowrap justify-center items-center rounded w-[48px] max-w-full mt-6    border-[0.5px] border-solid border-red-100">
3 seats available
</div>
</div>


</div>



<hr className="border-gray-400 w-[700px]  my-3" />


              </div>
            </div>



            



          </div>
        </div>


        
        <div className="items-start flex w-[229px] max-w-full justify-between gap-5 mr-3 mt-2.5 self-end max-md:mr-2.5">
          <div className="items-start self-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/514f4e9b-8a49-40a6-8525-a6e35b7dd9d1?"
              className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
            />
            <div className="text-slate-400 text-center text-sm self-stretch whitespace-nowrap">
              Total: 30 kg psc: 2
            </div>
          </div>
          <div className="items-start self-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1f24b2-addf-4cd2-9604-d6ae2e0bf9e9?"
              className="aspect-square object-contain object-center w-full overflow-hidden flex-1 my-auto"
            />
            <div className="text-slate-400 text-center text-sm self-stretch whitespace-nowrap">
              Meal
            </div>
          </div>
        </div>
        <div className="flex w-[846px] max-w-full items-start justify-between gap-5 mt-7 self-end max-md:flex-wrap max-md:justify-center">
          <div className="text-sky-700 text-base self-center whitespace-nowrap justify-center items-center rounded bg-sky-100 w-[122px] max-w-full my-auto px-4 py-2">
            Refundable
          </div>
          <div className="text-neutral-700 text-base my-auto">
            <span className="font-semibold text-black text-opacity-90">
              PKR 2,28000
            </span>
            <span className=" text-black text-opacity-90">/</span>
            <span className=" text-neutral-700"> 1 Person</span>
          </div>
          <div onClick={()=>gocontact()} className="text-white text-lg font-medium self-stretch whitespace-nowrap justify-center items-center rounded bg-sky-700 w-[120px] max-w-full px-5 py-2.5">
            Continue
          </div>
        </div>
      </div>
    </div>
  
  
  </div> */}


</div> 


          
          

      </div>
    </>
    
  );
}


export default Flight