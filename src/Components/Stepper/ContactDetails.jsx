import  React from "react";
import { useState } from "react";
// import { Stepper, Step, StepLabel} from "@mui/material";
import plus from "../../assests/pluss.png"
import round from "../../assests/round.png"
import travel from "../../assests/image 76.png"

import { useNavigate } from "react-router-dom";


export default function ContactDetails () {

const nav = useNavigate()

 const  payment =()=>{
  nav("/paymentmethod")
 }


    const [activestep1, setActiveStep] = useState(0)

    const steps = [
        'Booking',
         'Payment',
         "Confirmation"
        
        ];
       const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
    return (
    <div className="bg-neutral-100 flex flex-col px-5 ">
      <div className="self-center flex w-full max-w-[1324px] flex-col mb-10  max-md:max-w-full max-md:mb-10">
        <div className=" justify-center items-center bg-white self-center flex w-full max-w-[1187px] flex-col px-5 py-10 max-md:max-w-full">

    {/* <div className="flex w-full">
    <Stepper  activeStep={activestep1}  className="w-full flex justify-center">
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className="items-start  mx-3 self-center md:flex hidden w-[187px] max-w-full justify-between gap-5 my-auto">
              <div className="justify-center text-neutral-400 text-center text-xs self-stretch">
                Finish Booking in
              </div>
              <div className="text-slate-400 text-center text-xs font-medium self-stretch whitespace-nowrap">
                04:58:50
              </div>
            </div>
    </div> */}
                
              
        </div>
        <div className="justify-center text-slate-400 text-center text-2xl font-medium ml-5 mt-24 self-start whitespace-nowrap max-md:ml-2.5 max-md:mt-10">
          Contact Details
        </div>
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow flex-col w-full mx-auto pt-12 pb-28 px-5 rounded-lg max-md:max-w-full max-md:mt-8">
                <div className="text-neutral-700 text-center text-base ml-10 self-start whitespace-nowrap max-md:ml-2.5">
                  Mobile Number
                </div>
                <div>
      
      <div className="relative border-none mt-2  md:mx-10 mx-0 rounded-md "> 
        <div>
  <div class="flex rounded-md ">
    <span class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500  dark:border-gray-700 dark:text-gray-400"> 
    <select
           
            className="h-full  outline-none rounded-md border-0 bg-transparent py-0     text-gray-500   sm:text-sm"
          >
            <option selected  disabled>Country</option>
            <option>Pk+92</option>
            <option>Ind+91</option>
          </select>
          </span>
    <input type="number" class="py-3 px-4 outline-none   pr-11 block md:w-[345px] w-full border-gray-300 border-2 shadow-sm rounded-r-md text-sm  dark:text-gray-400"/>
  </div>
</div>
     
      </div>
    </div>
                <div className="text-neutral-400 text-opacity-70 text-center text-base ml-10 mt-2 self-start whitespace-nowrap max-md:ml-2.5">
                  e.g +923456789112
                </div>
                <div className="items-start flex w-[372px] max-w-full gap-3 ml-10 mt-5 self-start max-md:ml-2.5">
                  <div className="text-neutral-700 text-center text-base self-stretch">
                    Email
                  </div>
                  <div className="items-start self-stretch flex grow shrink-0 basis-auto justify-between gap-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0f0e6eb-2b96-4f60-8807-86a0a10142b2?"
                      className="aspect-square object-contain object-center w-5 overflow-hidden self-center max-w-full my-auto"
                    />
                    <div className="text-neutral-400 text-opacity-70 text-center text-base self-stretch grow shrink-0 basis-auto whitespace-nowrap md:block hidden">
                      (Your package will be Emailed here)
                    </div>
                  </div>
                </div>
                <input type="email" className=" border-gray-300 border-2 shadow-sm flex md:w-[460px] w-full outline-none p-4 h-[52px] flex-col md:ml-10 ml-0 mt-2 rounded-xl border-solid  self-start max-md:max-w-full" name="" id="" />
                <div className="text-neutral-400 text-opacity-70 text-center text-base ml-10 mt-2 self-start whitespace-nowrap max-md:ml-2.5">
                  e.g name@outlook.com
                </div>
                <div className="items-start flex mb-0 md:w-[454px] w-full max-w-full gap-1.5 md:ml-10 ml-0 mt-12 self-start max-md:mt-10 max-md:mb-2.5">
                  <div className="flex mt-[5px] ">
                  <input type="checkbox" className=" bg-sky-700 self-center " name="" id="" />
                  </div>
                  <div className="text-neutral-700 mr-20 md:text-center text-base self-stretch grow shrink-0 basis-auto  max-md:max-w-full">
                    I agree to receive travel related information and deals
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow flex-col w-full mx-auto pt-8 pb-10 px-5 rounded-lg max-md:max-w-full max-md:mt-8">
                <div className="self-center flex w-[386px] max-w-full flex-col">
                  <div className="items-start flex w-[365px] max-w-full gap-3.5 self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5725339f-a3a3-4909-8312-f6ee2da8364a?"
                      className="aspect-square fill-[#699FC9] object-contain object-center w-7 overflow-hidden self-center max-w-full my-auto"
                    />
                    <div className="text-neutral-700 text-base self-stretch max-w-[323px] grow md:shrink-0 basis-auto">
                      Pakistan’s most reliable booking platform!
                    </div>
                  </div>
                  <div className="items-start self-center flex w-full gap-3.5 mt-14 max-md:mt-10">
                    <div className="items-start self-stretch flex justify-between gap-0">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ecc4e4b-e602-466d-bea2-abdaa4133266?"
                        className="aspect-[5.11] bg-[#E4F0FF] object-contain object-center  w-[194px] justify-scenter items-center overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-white text-base font-medium leading-5 self-stretch justify-center items-center bg-[#699FC9] w-[46px] max-w-full pl-3 pr-3.5 py-3.5 rounded-none whitespace-nowrap">
                        5.5
                      </div>
                    </div>
                    <div className="items-start self-center flex gap-1 my-auto">
                      <div className="items-start flex gap-1 self-start">
                        <div className="text-black text-base leading-5 lowercase self-stretch">
                          ON
                        </div>
                        <div className="items-start justify-center self-stretch md:flex hidden flex-col">
<img src={round} className=" relative " alt="" />
<img src={plus} className="md:right-[150px] right-5 absolute items-center" alt="" />



                        </div>
                      </div>
                      <div className="text-neutral-700 text-base leading-5 uppercase self-start whitespace-nowrap">
                        reviews.
                      </div>
                    </div>
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-4 mt-11 max-md:ml-1 max-md:mt-10">
                    <img
                      loading="lazy"
                      src={travel}
                      className="aspect-[1.2] object-contain object-center w-[173px] mix-blend-multiply overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-neutral-700 text-base leading-7 my-auto">
                      Sign in to book faster using
                      <br />
                      Passenger Quick pick and
                      <br />
                      exclusive vouchers!
                    </div>
                  </div>
                  <div className="items-center bg-[#699FC9] self-center flex w-[310px] max-w-full grow flex-col mt-8 px-5 py-4 rounded-br-xl rounded-tl-xl">
                    <div className="justify-center text-white text-xl font-medium leading-7 self-center whitespace-nowrap">
                      Start
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#699FC9] md:text-center text-right md:text-4xl text-3xl font-medium capitalize md:ml-3 ml-0 mt-7 self-start whitespace-nowrap max-md:max-w-full">
          Travel Details for adult 1
        </div>
        <div className="self-stretch mt-6 max-md:max-w-full max-md:mr-1">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow flex-col w-full mx-auto pt-5 pb-12 px-5 rounded-lg max-md:max-w-full max-md:mt-8">
                <div className="self-stretch flex flex-col mr-3 max-md:max-w-full max-md:mr-2.5">
                  <div className="flex w-[655px] max-w-full items-start justify-between gap-5 md:ml-5 ml-0 self-start max-md:flex-wrap">
                    <div className="text-neutral-700 text-center text-base capitalize self-start">
                      Tittle
                    </div>
                    <div className="text-black text-center md:flex hidden text-xs capitalize mt-2 self-start whitespace-nowrap">
                      Upload Passport image
                    </div>
                  </div>
                  <div className="flex w-[761px] max-w-full items-start gap-4 ml-5 mt-1.5 self-start max-md:flex-wrap">
                    <div className="rounded md:border bg-white self-stretch flex w-[488px] max-w-full grow shrink-0 basis-auto items-start justify-between gap-5 md:pl-4 pl-0 pr-0.5 md:border-solid md:border-zinc-300 max-md:flex-wrap">
                      <div className="justify-between  items-start self-center md:flex  w-14 max-w-full gap-5 my-auto">

                      <div className="text-neutral-400 text-center   md:border-r-2 h-12  text-sm font-medium capitalize self-stretch whitespace-nowrap">
                   <div className="flex  w-36">
                    <input type="radio" className="mr-3 rounded-lg mt-3" />
                    <span className="mt-3">Mr</span>
                   </div> 
                   
                   </div> 
                   <div className="text-neutral-400 text-center  md:border-r-2 h-12  text-sm font-medium capitalize self-stretch whitespace-nowrap">
                   <div className="flex  w-36">
                   <input type="radio" className="mr-3 rounded-lg mt-3" />
                    <span className="mt-3">Mrs</span>                   </div> 
                   
                   </div> 
                   <div className="text-neutral-400 text-center   text-sm font-medium capitalize self-stretch whitespace-nowrap">
                   <div className="flex  w-32">
                   <input type="radio" className="mr-3 rounded-lg mt-3" />
                    <span className="mt-3">Ms</span>                   </div> 
                   
                   </div> 
                       
                      </div>
                     
                    </div>
                 <div className="border-gray-200 mt-[2px]">
                 <div className="text-black mb-3 text-xs md:hidden capitalize mt-2 self-start whitespace-nowrap">
                      Upload Passport image
                    </div>
                 <input
                 accept="image/*"
    class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15]  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem]  file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] focus:border-primary  focus:shadow-te-primary focus:outline-none   dark:file:text-neutral-100 dark:focus:border-primary"
    id="formFileLg"
    type="file" />                 </div>
                  </div>
                  <div className="w-[642px] max-w-full md:ml-5 ml-0 mt-12 self-start max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:mt-9">
                          <div className="text-black text-center text-sm capitalize self-start whitespace-nowrap">
                            Given Name
                          </div>
                        <input type="text"  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl w-full justify-end items-center overflow-hidden mt-3.5 self-start border-gray-300 border-2 outline-none p-5" />
                          <div className="text-zinc-500 text-opacity-70 text-center text-xs lowercase mt-3 self-start whitespace-nowrap">
                            Enter name as per passport to avoid boarding issues.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:mt-9">
                          <div className="text-black text-center text-sm capitalize self-start whitespace-nowrap">
                            Surname
                          </div>
                          <input type="text"  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl w-full justify-end items-center overflow-hidden mt-3.5 self-start border-gray-300 border-2 outline-none p-5" />
                          <div className="text-zinc-500 text-opacity-70 text-center text-xs lowercase mt-3 self-start whitespace-nowrap">
                            Enter name as per passport to avoid boarding issues.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-center flex w-[738px] max-w-full items-start justify-between gap-5 mt-6 max-md:flex-wrap">
                    <div className="flex flex-col grow shrink-0 basis-auto self-start">
                      <div className="text-neutral-700 text-center text-xs font-light capitalize items-start w-[75px] max-w-full self-start whitespace-nowrap">
                        date of birth
                      </div>
                      <div class="relative max-w-sm mt-4 ">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input datepicker datepicker-format="mm/dd/yyyy" type="text" class=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:text-white h-[50px] outline-none" placeholder="Select date"/>
</div>
                    </div>
                    <div className="flex flex-col grow shrink-0 basis-auto self-start">
                      <div className="text-black text-center text-sm capitalize self-start whitespace-nowrap">
                        Nationality
                      </div>
                      <div>
                      <div class=" inset-y-0 border-2 right-0 flex items-center mt-[10px] h-[50px] rounded-br-xl rounded-tl-xl">
   
   <select id="currency" name="currency" class="h-full rounded-md outline-none w-full  border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500  sm:text-sm">
    {country_list.map((v,i)=>{
return(
    <>
    <option value="" key={i}>{v}</option>
    </>
)

    })}
   </select>
 </div>
</div>
                    </div>
                  </div>
                  <div className="flex w-[759px] max-w-full items-start justify-between gap-5 mt-5 self-start max-md:flex-wrap">
                    <div className="flex flex-col grow shrink-0 basis-auto mt-1.5 self-start">
                      <div className="text-black text-center text-sm capitalize self-start whitespace-nowrap">
                        Passport Number
                      </div>

                      <input type="text"  className="border flex w-[303px] h-[53px] flex-col mt-2.5  border-solid border-zinc-300 self-start items-center overflow-hidden rounded-br-xl rounded-tl-xl    outline-none p-5" />


                    </div>
                    <div className="flex flex-col grow shrink-0 basis-auto self-start">
                      <div className="text-neutral-700 text-center text-xs font-light capitalize items-start w-[89px] max-w-full self-start whitespace-nowrap">
                        Passport Expiry
                      </div>
                      <div class="relative max-w-sm mt-4  ">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input datepicker datepicker-format="mm/dd/yyyy" type="text" class=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:text-white h-[50px] outline-none" placeholder="Select date"/>
</div>
                    </div>
                  </div>
                  <div className="text-zinc-500 text-opacity-70 text-center text-xs lowercase self-center ml-20 mt-2.5 whitespace-nowrap">
                    Please ensure your passport is currently valid.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-1 max-md:max-w-full max-md:mt-9">
                <div className="text-slate-400 text-center text-lg font-medium lowercase items-center border w-[456px] max-w-full pl-4 pr-5 py-7 rounded-xl border-solid border-zinc-300 self-start whitespace-nowrap">
                  Price Summary
                </div>
                <div className="items-start bg-white flex w-[456px] max-w-full flex-col mt-4 pl-4 pr-5 py-6 rounded-xl border-b-zinc-300 border-b border-solid self-start">
                  <div className="flex w-[378px] max-w-full items-start justify-between gap-5 self-start">
                    <div className="items-start flex gap-1 self-start">
                      <div className="text-zinc-500 text-center text-sm lowercase self-stretch">
                        qatar airway
                      </div>
                      <div className="text-zinc-500 text-center text-sm capitalize self-stretch whitespace-nowrap">
                        (Adult x 1)
                      </div>
                    </div>
                    <div className="text-black text-center text-base uppercase mt-1.5 self-start whitespace-nowrap">
                      Pkr 777,00
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white flex w-[456px] max-w-full flex-col mt-4 pl-5 pr-5 py-7 rounded-xl border-b-zinc-300 border-b border-solid self-start">
                  <div className="flex w-[376px] max-w-full items-start justify-between gap-5 self-start">
                    <div className="text-neutral-700 text-center text-lg font-medium capitalize">
                      Price you pay
                    </div>
                    <div className="text-black text-center text-base uppercase self-start whitespace-nowrap">
                      Pkr 777,00
                    </div>
                  </div>
                </div>
                <div className="items-start flex w-[162px] max-w-full justify-between gap-5 mt-6 self-start">
                  <div className="text-slate-400 text-center text-base font-medium lowercase">
                    Your bookings
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b072abf3-5251-48f9-b039-12fbab3c8d30?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center rounded bg-[#699FC9] self-center flex w-[207px] max-w-full grow flex-col md:ml-40 ml-0 mt-7 px-5 py-4">
          <div className="text-white  md:text-center text-2xl font-medium lowercase self-center whitespace-nowrap">
            <button onClick={()=>payment()}>
            Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


