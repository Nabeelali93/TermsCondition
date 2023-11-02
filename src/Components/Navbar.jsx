import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {




  return (
    <div>


        {/* Navbar Start */}

 
        <div class="text-gray-600   ">
           <div class="w-full mx-auto flex bg-[#699FC9] fixed top-0 left-0 flex-wrap  p-5 flex-col md:flex-row items-center">
              <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
                <button >
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.91699 20.6043V23.521H34.0837V20.6043H4.91699ZM4.91699 13.3127V16.2293H34.0837V13.3127H4.91699ZM4.91699 6.021V8.93766H34.0837V6.021H4.91699Z"
                      fill="white"
                    />
                  </svg>
                </button>
<Link to="/">
                <span
                  id="logo"
                  class="ml-3 px-3 text-xl font-bold text-white mb-1  cursor-pointer"
                 
                >
                  Saer.<span className="text-sm">pk</span>
                </span>
                </Link>
              </a>
              <nav class="md:ml-auto md:mr-auto flex flex-wrap  items-center text-base ">
                <div className="rounded-md border-white border bg-[#699FC9] flex items-center  px-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8699 10.4617 13.3343 9.21058 13.3333 7.91667C13.3333 6.84535 13.0157 5.79809 12.4205 4.90733C11.8253 4.01656 10.9793 3.32229 9.98954 2.91232C8.99977 2.50235 7.91066 2.39508 6.85993 2.60408C5.8092 2.81308 4.84404 3.32897 4.08651 4.08651C3.32897 4.84404 2.81309 5.8092 2.60408 6.85993C2.39508 7.91066 2.50235 8.99977 2.91232 9.98954C3.3223 10.9793 4.01656 11.8253 4.90733 12.4205C5.7981 13.0157 6.84535 13.3333 7.91667 13.3333C9.25834 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                      fill="white"
                    />{" "}
                  </svg>
                  <input
                    type="text"
                    className="outline-none bg-transparent px-2 h-9 w-72 placeholder-white "
                    placeholder="Search"
                    name=""
                    id=""
                  />
                </div>
              </nav>

              <div className="flex items-center  ">
                <button>
                  <svg
                    className="h-6 w-6  md:w-7 md:h-7 md:mt-0 mt-2.5 "
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 29.5C16.375 29.5 17.5 28.375 17.5 27H12.5C12.5 28.375 13.625 29.5 15 29.5ZM22.5 22V15.75C22.5 11.9125 20.4625 8.7 16.875 7.85V7C16.875 5.9625 16.0375 5.125 15 5.125C13.9625 5.125 13.125 5.9625 13.125 7V7.85C9.55 8.7 7.5 11.9 7.5 15.75V22L5 24.5V25.75H25V24.5L22.5 22ZM20 23.25H10V15.75C10 12.65 11.8875 10.125 15 10.125C18.1125 10.125 20 12.65 20 15.75V23.25Z"
                      fill="white"
                    />
                    <circle cx="21" cy="9" r="4" fill="#B00404" />
                  </svg>
                </button>
                <button class="inline-flex items-center border-0 py-1 px-5 md:px-7 focus:outline-none text-gray-200  text-base mt-4 md:mt-0">
                  Login
                </button>
                <button class="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none text-[#699FC9] hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  Sign Up
                </button>
              </div>
            </div>
          </div>


        {/* Navbar Close */}

    </div>
  )
}

export default Navbar