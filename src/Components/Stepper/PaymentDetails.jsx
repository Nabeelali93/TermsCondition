import React from 'react'
import Securepayment from "../../assests/Securepayment/Secure_Payment.png.png"
import Refunds from "../../assests/Securepayment/Lighting_Fast_Refunds.png.png"
import Mastercard from "../../assests/Securepayment/Mastercard - png.png"
import Secure from "../../assests/Securepayment/Secure_Payment.png.png"
import HBL from "../../assests/Securepayment/HBL.png.png"
import Link1 from "../../assests/Securepayment/Link.png.png"
import Konnect from "../../assests/Securepayment/Konnect.png.png"
import JazzCash from "../../assests/Securepayment/JazzCash.png.png"
import EasyPaisa from "../../assests/Securepayment/EasyPaisa.png.png"
import Phone from "../../assests/Securepayment/Phone.png.png"

function PaymentDetails() {
  return (
    <>
        <div className="bg-neutral-100 flex flex-col px-5 overflow-hidden">
      <div className="self-center flex w-full max-w-screen-xl flex-col mb-[100px] max-md:max-w-full max-md:mb-10">
        <div className="text-slate-400 text-center text-2xl font-medium whitespace-nowrap mt-24 self-start max-md:ml-0.5 max-md:mt-10">
          Payment Options
        </div>
        <div className="self-stretch mt-7 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow flex-col w-full mx-auto rounded-lg max-md:max-w-full max-md:mt-7">
                <div className="justify-center items-center border flex w-[931px] max-w-full flex-col px-5 py-7 rounded-lg border-solid border-zinc-300 border-opacity-90 self-start">
                  <div className="items-start self-center flex w-[827px] max-w-full justify-between gap-5 max-md:flex-wrap max-md:justify-center">
                    <div className="items-start self-stretch flex justify-between gap-2">
                      <img
                        loading="lazy"
                        src={Securepayment}
                        className="aspect-square object-contain object-center w-[25px] overflow-hidden max-w-full self-start"
                      />
                      <div className="text-zinc-400 text-opacity-80 text-center text-lg whitespace-nowrap self-start">
                        Secure Payment
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-1">
                      <img
                        loading="lazy"
                        src={Refunds}
                        className="aspect-square object-contain object-center w-[25px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-zinc-400 text-opacity-80 text-center text-lg self-stretch whitespace-nowrap">
                        Lightning Fast Refunds{" "}
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/704c0f68-07b6-4952-b99b-4ee9bc0605c2?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-zinc-400 text-opacity-80 text-center text-lg self-stretch whitespace-nowrap">
                        Trust by 10 lac customers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[896px] max-w-full self-start">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
                      <div className="flex flex-col max-md:max-w-full max-md:mt-1.5">
                        <div className="rounded bg-sky-100 bg-opacity-70 flex w-[491px] max-w-full flex-col pl-5 pr-5 pt-2 pb-7 border-r-4 border-r-slate-400 border-solid self-start">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32743de8-cb61-4244-a025-eb9180481c79?"
                            className="aspect-[0.86] object-contain object-center w-1.5 overflow-hidden max-w-full self-end max-md:mr-px"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2b62e18-a302-46d0-be2f-148e4f943267?"
                            className="aspect-[0.86] object-contain object-center w-1.5 overflow-hidden max-w-full self-end max-md:mr-px"
                          />
                          <div className="flex w-[385px] max-w-full items-start justify-between gap-5 self-start max-md:justify-center">
                            <div className="justify-center text-slate-400 text-center text-xl font-medium my-auto">
                              Debit Credit Card
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f41030e4-1628-4e6d-9b55-b3393ec03a3c?"
                              className="aspect-[2.5] object-contain object-center w-[70px] overflow-hidden self-stretch max-w-full"
                            />
                            <img
                              loading="lazy"
                              src={Mastercard}
                              className="aspect-[2.26] object-contain object-center w-[61px] overflow-hidden self-stretch max-w-full"
                            />
                          </div>
                        </div>
                        <div className="items-start flex w-[388px] max-w-full justify-between gap-5 ml-4 mt-5 self-start max-md:justify-center max-md:ml-2.5">
                          <div className="items-start self-stretch flex flex-col">
                            <div className="text-neutral-800 text-center text-xl whitespace-nowrap self-start">
                              HBL Direct Transfer
                            </div>
                            <div className="text-slate-400 text-center text-base font-light whitespace-nowrap self-start">
                              Save PKR 3,214 on fees
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src={HBL}
                            className="aspect-[2.14] object-contain object-center md:w-[94px] w-28 overflow-hidden self-center max-w-full my-auto"
                          />
                          <img
                            loading="lazy"
                            src={Konnect}
                            className="aspect-square object-contain object-center md:w-11 w-28 overflow-hidden self-center max-w-full my-auto"
                          />
                        </div>
                        <div className="items-start flex w-[283px] max-w-full justify-between gap-5 ml-4 mt-5 self-start max-md:ml-2.5">
                          <div className="items-start flex flex-col self-start">
                            <div className="text-neutral-800 text-center text-xl whitespace-nowrap self-start">
                              1 Bill_ Bank Transfer
                            </div>
                            <div className="text-slate-400 text-center text-base font-light whitespace-nowrap self-start">
                              Save PKR 3,214 on fees
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src={Link1}
                            className="aspect-[1.08] object-contain object-center w-14 overflow-hidden max-w-full self-start"
                          />
                        </div>
                        <div className="items-start flex md:w-[358px] w-80 max-w-full justify-between gap-5 ml-4 mt-5 self-start max-md:ml-2.5">
                          <div className="text-black text-center text-xl self-center my-auto">
                            Jazzcash
                          </div>
                          <img
                            loading="lazy"
                            src={JazzCash}
                            className="aspect-[2.02] object-contain object-center md:w-[131px] w-28 overflow-hidden self-stretch max-w-full"
                          />
                        </div>
                        <div className="items-start flex w-[276px] max-w-full justify-between gap-5 ml-4 mt-5 self-start max-md:ml-2.5">
                          <div className="text-black text-center text-xl my-auto">
                            Easypaisa
                          </div>
                          <img
                            loading="lazy"
                            src={EasyPaisa}
                            className="aspect-square object-contain object-center w-[42px] mix-blend-multiply overflow-hidden self-stretch max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex w-[399px] max-w-full grow items-start justify-between gap-5 max-md:mt-1.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a7b9037-654c-4cf3-82b1-6f5d8ef9af18?"
                          className="aspect-[0.01] object-contain object-center w-[7px] items-center overflow-hidden self-stretch max-w-full"
                        />
                        <div className="self-center flex flex-col grow shrink-0 basis-auto md:my-auto my-10">
                          <div className="items-start flex w-[361px] max-w-full gap-3 self-start">
                            <img
                              loading="lazy"
                              src={Secure}
                              className="aspect-square object-contain object-center w-[23px] overflow-hidden self-center max-w-full my-auto"
                            />
                            <div className="text-neutral-700 text-opacity-60 text-base leading-5 self-stretch  md:max-w-[326px] max-w-[250px] grow shrink-0 basis-auto">
                              All informa is encrypted and we do not store your
                              card details.
                            </div>
                          </div>
                          <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap mt-9 self-start">
                            Name on card
                          </div>
                          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:mt-5">
                        
                          <input type="text"  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl  justify-end items-center overflow-hidden md:mt-3.5 mt-0 self-start border-gray-300 border-2 md:ml-[-20px] ml-0 outline-none p-5" />
                         
                        </div>
                      </div>
                          <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap mt-5 self-start">
                            Card Number
                          </div>
                          <div className="flex grow flex-col max-md:mt-5">
                        
                        <input type="number" placeholder='1234 5675 1235 2345'  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl  justify-end items-center overflow-hidden md:mt-3.5 mt-0 self-start border-gray-300 border-2 outline-none p-5" />
                       
                      </div>
                          <div className="flex w-[346px] max-w-full items-start md:justify-between justify-normal gap-5 mt-11 self-start max-md:mt-10">
                            <div className="self-stretch flex flex-col">
                              <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap self-start">
                                Expiry
                              </div>
                              <div class="relative max-w-sm mt-5  ">
  
  <input datepicker datepicker-format="mm/dd/yyyy" type="text" class=" w-32 border border-gray-300 text-gray-900 text-sm rounded-lg   block pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:text-white h-[50px] outline-none rounded-br-xl rounded-tl-xl" placeholder="MM/YY"/>
</div>
                            </div>
                            <div className="self-stretch flex flex-col">
                              <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap self-start">
                                CVV
                              </div>
                              <div className="flex grow flex-col max-md:mt-5">
                        
                        <input type="number" placeholder='1234 5675 1235 2345'  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl  justify-end items-center overflow-hidden md:mt-3.5 mt-0 self-start border-gray-300 border-2 outline-none w-40  pl-5 p-2.5  h-[50px]" />
                       
                      </div>
                            </div>
                          </div>
                          <div className="items-start flex w-[330px] max-w-full flex-col mt-10 self-start max-md:mt-10">
                            <div className="text-slate-400 text-xs font-medium leading-5 whitespace-nowrap self-start">
                              <span className="text-black">Please </span>
                              <span className="text-slate-400">login</span>
                              <span className="text-black">
                                {" "}
                                to avail discounts on voucher codes.
                              </span>
                            </div>
                            <div className="justify-center text-slate-400 md:w-[100%] w-[90%] text-xs leading-5 md:mt-2 mt-0 self-start">
                              <span className="text-black">
                                <br />
                              </span>
                              <span className="text-neutral-400">
                                By selecting to complete this booking, I
                                acknowledge that I have read and accept the
                                above Policy section containing Fare Rules &
                                Restrictions
                              </span>
                              <span className="text-black">,</span>
                              <span className="text-slate-400">
                                Terms of Use and privacy policy
                                <br />
                              </span>
                            </div>
                          </div>
                          <div className="justify-center items-center border flex w-[304px] max-w-full grow flex-col mt-16 px-5 py-3.5 rounded-xl border-solid border-zinc-300 border-opacity-80 self-start max-md:mt-10">
                            <div className="text-slate-400 text-sm font-medium leading-5 self-center whitespace-nowrap">
                              Pay Now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:mt-7">
                <div className="text-slate-400 text-center text-lg font-medium lowercase whitespace-nowrap items-center border w-[321px] max-w-full pl-4 pr-5 py-5 rounded-xl border-solid border-zinc-300 self-start">
                  Price Summary
                </div>
                <div className="justify-between items-start bg-white flex w-[321px] max-w-full gap-5 mt-3 pl-3 pr-3.5 py-5 rounded-xl border-b-zinc-300 border-b border-solid self-start">
                  <div className="items-start flex gap-1 self-start">
                    <div className="text-zinc-500 text-center text-xs lowercase self-stretch">
                      qatar airway
                    </div>
                    <div className="text-zinc-500 text-center text-xs capitalize self-stretch whitespace-nowrap">
                      (Adult x 1)
                    </div>
                  </div>
                  <div className="text-black text-center text-base uppercase whitespace-nowrap self-start">
                    Pkr 228,000
                  </div>
                </div>
                <div className="justify-between items-start bg-white flex w-[321px] max-w-full gap-5 mt-3 pl-3.5 pr-3.5 py-5 rounded-xl border-b-zinc-300 border-b border-solid self-start">
                  <div className="text-neutral-700 text-center text-lg font-medium capitalize">
                    Price you pay
                  </div>
                  <div className="text-black text-center text-base uppercase whitespace-nowrap mt-1 self-start">
                    Pkr 228,000
                  </div>
                </div>
                <div className="justify-center items-center rounded border bg-white flex w-[321px] max-w-full flex-col mt-6 px-3 py-4 border-solid border-sky-100 self-start">
                  <div className="items-start self-stretch flex w-full justify-between gap-5">
                    <img
                      loading="lazy"
                      src={Phone}
                      className="aspect-square object-contain object-center w-[34px] overflow-hidden self-center max-w-full my-auto"
                    />
                    <div className="text-stone-900 text-base font-medium lowercase self-stretch max-w-[240px] grow shrink-0 basis-auto">
                      <span className="text-neutral-400">
                        having a trouble making a payment? contact our helpline
                        for assistance
                      </span>
                      <span className="text-zinc-500"> </span>
                      <span className="text-stone-900">(021)111172782</span>
                    </div>
                  </div>
                </div>
                <div className="items-start flex w-[162px] max-w-full justify-between gap-5 mt-2 self-start">
                  <div className="text-slate-400 text-center text-base font-medium lowercase">
                    Your bookings
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cc1e9f0-71f5-481e-9173-bba11ee3a740?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
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

export default PaymentDetails