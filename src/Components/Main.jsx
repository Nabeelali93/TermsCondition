import "../app.css";
import React, { useState } from "react";
import airplane from "../assests/airplane.png";
import deals from "../assests/get-deals.png";
import hotel from "../assests/get-hotel.png";
import umrah from "../assests/umrah-package.png";
import settings from "../assests/setting.png";
import trip from "../assests/trip.png";
import visa from "../assests/get-visa.png";
import insurrance from "../assests/get-insurrance.png";
import { Link } from "react-router-dom";
import SearchUmrah from "./SearchUmrah";
import Footer from "./Footer";
import Makkah from "./Makkah";
import NestedNav from "../Config/NestedNav";
import { useNavigate } from "react-router-dom";
import Flight from "./Flights";
import Navbar from "./Navbar";
import ManageBooking from "./ManageBooking";

function Main() {
  const [content, setcontent] = useState("SearchUmrah");

  const nav = useNavigate();

  const [input, setinput] = useState("");
  const [todo, settodo] = useState([]);
  const [Sidebar, setSidebar] = useState(true);
  const togle = () => {
    if (Sidebar == false) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  };

  // nesting Function

 

  // todo work


  // todo work and


const goDeals=()=>{
  nav("DealsOffer")
}





  return (

      <div className=" bg-gray-100">


        {/* Navbar Start */}

 <Navbar/>

        {/* Navbar Close */}

      
      
    


        <div className=" flex  first-letter md:mt-[77px] mt-[150px] bg-yellow-300 ">


  {/* SideBar Start */}
<div className="w-1/4  bg-[#699FC9]  ">

 <div className="      overflow-y-auto  md:p-4 p-1  ">
          <ul className="space-y-4 mt-8 text-left md:leading-loose">
            <li className="hover:bg-white hover:rounded-tl-2xl hover:rounded-bl-2xl hover:p-1  w-48 text-white hover:text-[#699FC9]">
              <Link onClick={()=>setcontent("SearchUmrah")} className="flex items-center">
                <img
                  src={umrah}
                  alt="..."
                  className="md:w-5  md:h-3 w-4 h-2.5 hover:bg-[#699FC9]"
                />

                <p className=" mx-1 md:mx-3 md:text-lg text-xs">
                  Umrah Packages
                </p>
              </Link>
            </li>
            <li className="hover:bg-white hover:rounded-tl-2xl hover:rounded-bl-2xl hover:p-1  w-48 text-white hover:text-[#699FC9]">
              <button  onClick={()=>setcontent("Flight")}  className="flex items-center">
                <img
                  className="md:w-7 md:h-7 w-6 h-6 -ml-1.5"
                  src={airplane}
                  alt="..."
                />
                <p className=" mx-1 md:mx-3 md:text-lg text-xs">
                  Flight
                </p>
              </button>
            </li>
            <li className="hover:bg-white hover:rounded-tl-2xl hover:rounded-bl-2xl hover:p-1  w-48 text-white hover:text-[#699FC9]">
              <button    onClick={()=>setcontent("GetHotel")} className="flex items-center">
                <img src={hotel} className="md:w-5 md:h-3 w-4 h-3" alt="..." />
                <p className=" mx-1 md:mx-3 md:text-lg text-xs">
                  Get Hotel
                </p>
              </button>
            </li>
            <li className="hover:bg-white hover:rounded-tl-2xl hover:rounded-bl-2xl hover:p-1  w-48 text-white hover:text-[#699FC9]">
              <button onClick={()=>setcontent("ManageBooking")} className="flex items-center">
                <img
                  className="bg-white md:w-5 md:h-5 w-4 h-4"
                  src={settings}
                  alt="..."
                />
                <p className=" mx-1 md:mx-3 md:text-lg text-xs">
                  Manage booking
                </p>
              </button>
            </li>
            <li className="hover:bg-white hover:rounded-tl-2xl hover:rounded-bl-2xl hover:p-1  w-48 text-white hover:text-[#699FC9]">
              <button  className="flex items-center">
                <img
                  src={insurrance}
                  className="md:w-5 md:h-5 w-4 h-4"
                  alt="..."
                />
                <p className=" mx-1 md:mx-3 md:text-lg text-xs">
                  Get insurrance
                </p>
              </button>
            </li>{" "}
            <li className="hover:bg-white hover:rounded-tl-2xl hover:rounded-bl-2xl hover:p-1  w-48 text-white hover:text-[#699FC9]">
              <button onClick={()=>goDeals()}  className="flex items-center">
                <img src={deals} className="md:w-5 md:h-5 w-4 h-4" alt="..." />
                <p className=" mx-1 md:mx-3 md:text-lg text-xs">
                  Deals
                </p>
              </button>
            </li>
            <li className="hover:bg-white hover:rounded-tl-2xl hover:rounded-bl-2xl hover:p-1  w-48 text-white hover:text-[#699FC9]">
              <Link  className="flex items-center  ">
                <img
                  className="-ml-1 md:w-6 md:h-6 w-4 h-4"
                  src={visa}
                  alt="..."
                />
                <p className=" mx-1 md:mx-3 md:text-lg text-xs">
                  Get visa
                </p>
              </Link>
            </li>
            <li className="hover:bg-white hover:rounded-tl-2xl hover:rounded-bl-2xl hover:p-1  w-48 text-white hover:text-[#699FC9]">
              <Link  className="flex items-center ">
                <img
                  src={trip}
                  className="-ml-1 md:w-5 md:h-5 w-4 h-4"
                  alt="..."
                />
                <p className=" mx-1 md:mx-3 md:text-lg text-xs">
                  Trip
                </p>
              </Link>
            </li>
          </ul>

          <div className="md:w-32 w-24 text-sm flex justify-center bg-white md:text-md text-[#699FC9] md:p-1.5 p-0.5 rounded-tl-lg rounded-br-lg mt-5">
            <button>Log Out</button>
          </div>
        </div>


</div>
        
 {/* Sidebar Close */}

        <div className=" w-3/4 bg-gray-100 ">
        

          {
  content == 'SearchUmrah' ? <SearchUmrah/> : // if 
  content == 'GetHotel' ? <Makkah/> : // else if 
  content== 'Flight' ? <Flight/> : // else if
  content== 'ManageBooking' ? <ManageBooking/> : // else if


  null

    
    
    }


        </div>

        </div>

       


       

       
      

       


        <Footer/>



  

      </div>
  );
}

export default Main;
