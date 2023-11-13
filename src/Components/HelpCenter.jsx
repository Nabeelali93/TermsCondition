import React,{useState} from 'react'

function HelpCenter() {
    const [todo, settodo] = useState([
        "Can I customize my Umrah package?",
        "What is included in a typical Umrah package?",
        "How do I choose the right Umrah package for me?",
        "What is the best time to book an Umrah package?",
        "What documents are required for Umrah?",
        "Are there any age restrictions for Umrah?",
        "What types of Umrah packages are available?"
    ]);

  

  return (
    <div>

<div className='flex flex-col '>
    <div className='flex justify-center '>
        <h1 className=' text-2xl md:text-6xl font-medium p-12'>HELP CENTER</h1>
    </div>

    <div className='flex justify-center' >
      

    <div className='flex  bg-white items-center h-12 md:h-14  md:w-[50%] w-[60%]'>
  <input type="text" placeholder='Any search question' className='outline-none border-r-2 border-gray-200 p-2 w-full' />

  <svg width="35" height="35" className='p-2' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:sharp-search">
<path id="Vector" d="M18.0833 16.3333H17.1617L16.835 16.0183C18.0179 14.6464 18.668 12.8948 18.6667 11.0833C18.6667 9.58349 18.2219 8.11734 17.3886 6.87026C16.5554 5.62319 15.371 4.65121 13.9854 4.07725C12.5997 3.50329 11.0749 3.35311 9.6039 3.64572C8.13288 3.93832 6.78166 4.66056 5.72111 5.72111C4.66056 6.78166 3.93832 8.13288 3.64572 9.6039C3.35311 11.0749 3.50329 12.5997 4.07725 13.9854C4.65121 15.371 5.62319 16.5554 6.87026 17.3886C8.11734 18.2219 9.58349 18.6667 11.0833 18.6667C12.9617 18.6667 14.6883 17.9783 16.0183 16.835L16.3333 17.1617V18.0833L22.1667 23.905L23.905 22.1667L18.0833 16.3333ZM11.0833 16.3333C8.17834 16.3333 5.83334 13.9883 5.83334 11.0833C5.83334 8.17834 8.17834 5.83334 11.0833 5.83334C13.9883 5.83334 16.3333 8.17834 16.3333 11.0833C16.3333 13.9883 13.9883 16.3333 11.0833 16.3333Z" fill="#A5A5A5"/>
</g>
</svg>

</div>


    </div>
</div>

<div className='mx-auto w-[90%] mt-10 border-2 border-solid bg-white    '>
{todo.map((v, i) => {
              return (
                <div >
                    <div className='flex justify-between w-[90%] items-center'>
                    <p className="p-5 ml-2">{v}</p>

                    <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bceb57c-16a8-4ed5-93e4-07c0a26b559d?"
          className="h-[11.12px] object-center w-[12px] fill-neutral-400 overflow-hidden self-center max-w-full my-auto"
        />

                    </div>
                  <hr className=" border-gray-400 w-[90%] mx-5" />

                </div>
              );
            })}
</div>


<div className='flex md:flex-row flex-col mt-10'>
<div className="flex flex-col  w-[29%] max-md:w-full max-md:ml-0">
            <div className="justify-end items-center rounded shadow-md bg-neutral-100 flex w-[216px] max-w-full flex-col m-auto pl-5 pr-4 py-3.5 max-md:mt-10">
              <div className="items-start  self-stretch flex w-full justify-between gap-5 max-md:ml-px">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1362e25-ebee-49dd-a9d4-e00fca2f5a6b?"
                  className="aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden self-center max-w-full my-auto"
                />
                <div className="items-start self-stretch flex flex-col">
                  <div className="text-slate-400 text-lg self-stretch whitespace-nowrap">
                    Email Us
                  </div>
                  <div className="text-slate-400 text-xs font-light self-stretch whitespace-nowrap mt-2">
                    AHSAN@SAER.PK
                  </div>
                  <div className="text-slate-400 text-xs font-light self-stretch whitespace-nowrap mt-2">
                    Contact@saer.pk
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col items-stretch w-2/5 h-[14%] max-md:w-full max-md:ml-0">
            <div className="justify-end items-center rounded shadow-lg bg-neutral-100 flex w-[330px] max-w-full grow flex-col mx-auto pl-3 pr-1 pt-3 max-md:mt-8">
              <div className="items-start  flex w-full justify-between gap-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9bb8090-4143-4635-b66e-a878c32cb8a0?"
                  className="aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden self-center max-w-full my-auto"
                />
                <div className="items-start self-stretch flex flex-col">
                  <div className="text-slate-400 text-xl self-stretch whitespace-nowrap">
                    Visit Us
                  </div>
                  <div className="text-slate-400 text-base font-light self-stretch whitespace-nowrap mt-2">
                    Our team is here to serve you
                  </div>
                  <div className="text-slate-400 text-base font-light mt-2">
                    1st floor,Mall 1 main Boulevard,
                    <br />
                    Gulberg lll,Lahore ,Punjab 5460 <br />
                    Pakistan
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-stretch w-[25%] h-[7%]  max-md:w-full max-md:ml-0">
            <div className="items-center rounded shadow-md bg-neutral-100 flex w-[247px] max-w-full grow flex-col mt-2.5 mx-auto py-4 max-md:mt-10">
              <div className="items-start  flex w-full justify-around   ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/52887881-9a3d-4687-96f1-6b0b00eacd41?"
                  className="aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden self-center max-w-full my-auto"
                />
                <div className="items-start self-stretch flex flex-col">
                  <div className="text-slate-400 text-lg self-stretch whitespace-nowrap">
                    Call Us
                  </div>
                  <div className="text-slate-400 text-base font-light self-stretch whitespace-nowrap mt-2">
                    +923000709017
                  </div>
                  <div className="text-slate-400 text-lg font-light self-stretch whitespace-nowrap mt-2">
                    042-111-Saer.pk
                  </div>
                </div>
              </div>
            </div>
          </div>



</div>

<br />
<br />
<br />

       

       









        
    </div>
  )
}

export default HelpCenter