import React from 'react'
import "./Footer.css"
import ic_outline_email from "../assests/ic_outline-email.png"
import ic_baseline_call from "../assests/ic_baseline-call.png"
import ic_outline_location_on from "../assests/ic_outline-location-on.png"
import globe from "../assests/globe.png"
import facebook from "../assests/facebook.png"
import insta from "../assests/insta.png"
import Linkedin from "../assests/Linkedin.png"
import twitter from "../assests/twitter.png"
import apple from "../assests/apple.png"
import playstore from "../assests/playstore.png"







function Footer() {
  return (
    <>


<div className="bg-black mt-5 flex flex-col">
<div className='bg-black w-full p-11   grid grid-cols-1 md:grid-cols-2  gap-2'>
<div className='w-full'>
<h1 className='text-white text-xl font-bold'>Subscribe to our newsletter </h1>
<p className='text-white'>Stay up to date with the latest news, announcements and articles.</p>

</div>
<div className='w-full sm:'>
<input className=' footer-inp' type="text" name="" id="" placeholder='Enter Your Email'/>
<button className='footer-btn mx-3 my-3 text-white '>Subscribe</button>
</div>
</div>
      <div className="bg-neutral-700 self-stretch flex w-full flex-col  pt-28 pb-16 px-5 max-md:max-w-full max-md:mt-10">
        <div className="self-center w-full max-w-[1274px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <div className="justify-center items-start flex grow flex-col max-md:mt-10">
                      <div className="text-white text-2xl font-medium self-start whitespace-nowrap">
                        Services
                      </div>
                      <div className="text-white text-opacity-70 text-xl font-medium mt-4 self-start whitespace-nowrap">
                        Umrah package
                      </div>
                      <div className="text-white text-opacity-70 text-xl font-medium mt-4">
                        Flight
                      </div>
                      <div className="text-white text-opacity-70 text-xl font-medium mt-4">
                        Get Hotel
                      </div>
                      <div className="text-white text-opacity-70 text-xl font-medium mt-4 self-start whitespace-nowrap">
                        Get Insurance
                      </div>
                      <div className="text-white text-opacity-70 text-xl font-medium mt-4">
                        Deals
                      </div>
                      <div className="text-white text-opacity-70 text-xl font-medium mt-4">
                        Get Visa
                      </div>
                      <div className="text-white text-opacity-70 text-xl font-medium mt-4">
                        Trip
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col max-md:mt-10">
                      <div className="text-white text-2xl font-medium self-start whitespace-nowrap">
                        Contact Us
                      </div>
                      <div className="items-start flex w-[191px] max-w-full gap-2 mt-14 self-start max-md:mt-10">
                        <div className="items-start self-stretch flex flex-col">
                          <img
                            loading="lazy"
                            src={ic_outline_email}
                            className="aspect-square object-cover object-center h-full w-full stroke-[1px] overflow-hidden self-stretch grow rounded-[50%]"
                          />
                        </div>
                        <div className="text-white text-opacity-70 text-center text-base font-medium self-stretch whitespace-nowrap">
                          simple@gmail.com
                        </div>
                      </div>
                      <div className="flex w-[158px] max-w-full items-start gap-2 mt-8 self-start">
                        <div className="items-start self-center flex flex-col my-auto">
                          <img
                            loading="lazy"
                            src={ic_baseline_call}
                            className="aspect-square object-cover object-center w-full h-full stroke-[1px] overflow-hidden self-stretch grow rounded-[50%]"
                          />
                        </div>
                        <div className="text-white text-opacity-70 text-base font-medium">
                          {" "}
                          +92-123456789
                          <br />
                          +92-123456789
                        </div>
                      </div>
                      <div className="items-start flex w-[232px] max-w-full gap-3 mt-7 self-start">
                        <div className="items-start self-stretch flex flex-col">
                          <img
                            loading="lazy"
                            src={ic_outline_location_on}
                            className="aspect-square object-cover object-center h-full w-full stroke-[1px] overflow-hidden self-stretch grow rounded-[50%]"
                          />
                        </div>
                        <div className="text-white text-opacity-70 text-center text-base font-medium self-stretch whitespace-nowrap">
                          Phone no : 23456783452
                        </div>
                      </div>
                      <div className="items-start flex w-44 max-w-full gap-3 mt-5 self-start">
                        <div className="items-start self-stretch flex flex-col">
                          <img
                            loading="lazy"
                            src={globe}
                            className="aspect-square object-cover object-center h-full w-full stroke-[1px] overflow-hidden self-stretch grow rounded-[50%]"
                          />
                        </div>
                        <div className="text-white text-opacity-70 text-center text-base font-medium self-stretch whitespace-nowrap">
                          Yourwebsite.com{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-start flex flex-col mt-2.5 max-md:mt-10">
                      <div className="text-white text-2xl font-medium self-start whitespace-nowrap">
                        Company
                      </div>
                      <div className="text-white text-opacity-70 text-center text-xl font-medium mt-5 self-start whitespace-nowrap">
                        About Us
                      </div>
                      <div className="text-white text-opacity-70 text-center text-xl font-medium mt-5 self-start whitespace-nowrap">
                        FAQ
                      </div>
                      <div className="text-white text-opacity-70 text-center text-xl font-medium mt-5 self-start whitespace-nowrap">
                        Privacy policy
                      </div>
                      <div className="text-white text-opacity-70 text-center text-xl font-medium mt-5 self-start whitespace-nowrap">
                        Term of use
                      </div>
                      <div className="text-white text-opacity-70 text-center text-xl font-medium mt-5 self-start whitespace-nowrap">
                        Blogs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[19%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-5 max-md:mt-10">
                <div className="text-white text-2xl font-medium self-stretch whitespace-nowrap">
                  Social links
                </div>
                <div className="justify-between items-start self-stretch flex gap-4 mt-10 max-md:justify-center max-md:mr-0.5">
                  <img
                    loading="lazy"
                    src={facebook}
                    className=" object-cover object-center h-full w-full  fill-white overflow-hidden flex-1"
                  />
                  <img
                    loading="lazy"
                    src={insta}
                    className=" object-cover object-center w-full fill-white overflow-hidden flex-1"
                  />
                  <img
                    loading="lazy"
                    src={Linkedin}
                    className=" object-cover object-center w-full fill-white overflow-hidden flex-1"
                  />
                  <img
                    loading="lazy"
                    src={twitter}
                    className=" object-cover object-center w-full overflow-hidden flex-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:mt-10">
                <div className="text-slate-400 text-base font-medium self-start whitespace-nowrap">
                  Get the App
                </div>
                <div className="justify-center items-center border flex w-[234px] max-w-full flex-col mt-5 px-5 py-4 rounded-xl border-solid border-white self-start">
                  <div className="items-start self-center flex w-[170px] max-w-full gap-4">
                    <img
                      loading="lazy"
                      src={apple}
                      className="aspect-[0.82] object-cover object-center w-9 overflow-hidden self-center max-w-full my-auto"
                    />
                    <div className="items-start self-stretch flex flex-col">
                      <div className="text-white text-opacity-80 text-xs font-medium">
                        Download on the
                      </div>
                      <div className="text-white text-xl font-semibold self-stretch whitespace-nowrap">
                        Apple Store
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-center items-center border flex w-[234px] max-w-full grow flex-col mt-7 px-5 py-4 rounded-xl border-solid border-white self-start">
                  <div className="items-start self-center flex w-[173px] max-w-full gap-4">
                    <img
                      loading="lazy"
                      src={playstore}
                      className="aspect-[0.95] object-cover object-center w-9 overflow-hidden self-center max-w-full my-auto"
                    />
                    <div className="items-start self-stretch flex flex-col">
                      <div className="text-white text-opacity-80 text-xs font-medium">
                        Get it on
                      </div>
                      <div className="text-white text-xl font-semibold self-stretch whitespace-nowrap">
                        Google Play
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






      
    </>
  )
}

export default Footer
