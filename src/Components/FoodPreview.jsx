import React from 'react'

import chicken from '../assests/Chicken.png'
import beef from "../assests/beef.png"
import platter from "../assests/platter.png"





function FoodPreview() {
  return (
    <>


 <div className="bg-neutral-100 flex flex-col">
      <div className="bg-white self-stretch flex w-full flex-col pt-3 pb-3 px-5 max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1320px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-black text-3xl font-medium mt-5">
            Food Preview
          </div>
          <div className="bg-zinc-300 w-px h-[45px] self-start" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d119dc-b802-4275-a017-baf6dbbf9360?"
            className="aspect-square object-contain object-center w-[30px] overflow-hidden max-w-full mt-4 self-start"
          />
        </div>
      </div>
      <div className="justify-center  items-center bg-[#699FC9] flex w-[300px] max-w-full flex-col ml-16 pt-4 pb-3 px-3 self-start max-md:ml-2.5">
        <div className="justify-center  text-white text-3xl font-medium leading-7 self-center  whitespace-nowrap">
          Food Category
        </div>
      </div>
      <div className="text-[#699FC9] text-3xl font-medium leading-7 ml-16 mt-16 self-start whitespace-nowrap max-md:ml-2.5 max-md:mt-10">
        Pakistani Food
      </div>
      <div className="bg-white self-center flex w-full max-w-[1284px] flex-col mt-9 pt-12 pb-3.5 px-5 rounded-lg max-md:max-w-full">
        <div className="self-center w-full max-w-[1206px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-center bg-neutral-400 bg-opacity-30 flex w-[370px] max-w-full flex-col mx-auto rounded-lg max-md:mt-10">
                <img
                  loading="lazy"
                  src={chicken}
                  className="aspect-[1.07] object-contain object-center w-full overflow-hidden self-stretch grow"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-white text-3xl font-medium text-center justify-center items-center rounded bg-[#699FC9] w-[750px] max-w-full p-3 self-start">
                  Chicken Biryani
                </div>
                <div className="w-[784px] max-w-full mt-5 self-start">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                      <div className="flex flex-col my-auto max-md:mt-10">
                        <div className="text-neutral-700 text-xl self-start whitespace-nowrap">
                          About
                        </div>
                        <div className="text-neutral-400 text-opacity-70 text-xl leading-7 mt-4">
                          <span className="text-black">
                            Flavorful one pot-Dish{" "}
                          </span>
                          <span className="text-neutral-400 text-opacity-70">
                            Biryani is a beloved dish in many regions, and it
                            has various regional variations in India, Pakistan,
                            and other South Asian countries.{" "}
                          </span>
                        </div>
                        <div className="items-start flex w-[137px] max-w-full gap-4 mt-4 self-start">
                          <div className="text-slate-400 text-base font-medium leading-5 self-stretch">
                            4.5
                          </div>
                          <div className="items-start self-stretch flex gap-0.5 max-md:justify-center">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a09087c7-f130-47f4-be1a-5221c2c1a0a3?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6f0ab0-21f5-4be9-ae11-721b28c75007?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cad5b0d-2243-4a87-8a8b-4404cc6b24de?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fd89d2a-177a-43b3-9bad-b095e331976e?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dfb3d21-6c9b-47df-829b-f707d02a6079?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                          </div>
                        </div>
                        <div className="text-white text-sm font-medium leading-5 justify-center items-center rounded bg-[#699FC9] w-[190px] max-w-full grow mt-4 px-2 py-2.5 self-start whitespace-nowrap">
                        <button>
                        12000/pkr for 20 days meal

                        </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col max-md:mt-10">
                        <div className="flex w-[350px] max-w-full items-start justify-between gap-5 self-start">
                          <div className="bg-zinc-300 self-stretch w-px h-[216px]" />
                          <div className="justify-center items-start self-stretch flex flex-col grow shrink-0 basis-auto w-[326px]">
                            <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:mr-1">
                              <div className="text-black text-base leading-5 flex-1">
                                Available Food{" "}
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                2 times a day
                              </div>
                            </div>
                            <div className="justify-between items-start self-stretch flex w-full gap-5 mt-3 max-md:mr-1">
                              <div className="text-black text-base leading-5">
                                service how many times
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-center my-auto whitespace-nowrap">
                                singal meal
                              </div>
                            </div>
                            <div className="justify-between items-start self-stretch flex w-full gap-5 mt-3 max-md:mr-1.5">
                              <div className="text-black text-base leading-5 self-stretch">
                                water botel
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                Include
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3 max-md:mr-1">
                              <div className="text-black text-base leading-5 self-stretch">
                                total dishes
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                01
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3 max-md:mr-px">
                              <div className="text-black text-base leading-5 self-stretch">
                                fruits
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                not include
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3 max-md:mr-px">
                              <div className="text-black text-base leading-5 self-stretch">
                                soft drink
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                not inclued
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3">
                              <div className="text-black text-base leading-5 self-stretch">
                                soda drinks
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                not inclued
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-center items-center rounded border bg-white flex w-[92px] max-w-full grow flex-col mt-6 px-5 py-2.5 border-solid border-[#699FC9] self-end">
                          <div className="text-[#699FC9] text-sm font-medium leading-5 self-center whitespace-nowrap">
                            <button>
                            select
                            </button>
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
      </div>
      




      <div className="text-[#699FC9] text-3xl font-medium leading-7 ml-16 mt-16 self-start whitespace-nowrap max-md:ml-2.5 max-md:mt-10">
      Buffet Pakistani Food
            </div>
      <div className="bg-white self-center flex w-full max-w-[1284px] flex-col mt-9 pt-12 pb-3.5 px-5 rounded-lg max-md:max-w-full">
        <div className="self-center w-full max-w-[1206px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-center bg-neutral-400 bg-opacity-30 flex w-[370px] max-w-full flex-col mx-auto rounded-lg max-md:mt-10">
                <img
                  loading="lazy"
                  src={platter}
                  className="aspect-[1.07] object-contain object-center w-full overflow-hidden self-stretch grow"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-white text-3xl font-medium text-center justify-center items-center rounded bg-[#699FC9] w-[750px] max-w-full p-3 self-start">
                Buffet style services
                                </div>
                <div className="w-[784px] max-w-full mt-5 self-start">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                      <div className="flex flex-col my-auto max-md:mt-10">
                        <div className="text-neutral-700 text-xl self-start whitespace-nowrap">
                          About
                        </div>
                        <div className="text-neutral-400 text-opacity-70 text-xl leading-7 mt-4">
                          <span className="text-black">
                            Flavorful one pot-Dish{" "}
                          </span>
                          <span className="text-neutral-400 text-opacity-70">
                            Biryani is a beloved dish in many regions, and it
                            has various regional variations in India, Pakistan,
                            and other South Asian countries.{" "}
                          </span>
                        </div>
                        <div className="items-start flex w-[137px] max-w-full gap-4 mt-4 self-start">
                          <div className="text-slate-400 text-base font-medium leading-5 self-stretch">
                            4.5
                          </div>
                          <div className="items-start self-stretch flex gap-0.5 max-md:justify-center">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a09087c7-f130-47f4-be1a-5221c2c1a0a3?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6f0ab0-21f5-4be9-ae11-721b28c75007?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cad5b0d-2243-4a87-8a8b-4404cc6b24de?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fd89d2a-177a-43b3-9bad-b095e331976e?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dfb3d21-6c9b-47df-829b-f707d02a6079?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                          </div>
                        </div>
                        <div className="text-white text-center text-sm font-medium leading-5 justify-center items-center rounded bg-[#699FC9] w-14  grow mt-4 px-2 py-2.5 self-start whitespace-nowrap">
                        <button >
                        $60

                        </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col max-md:mt-10">
                        <div className="flex w-[350px] max-w-full items-start justify-between gap-5 self-start">
                          <div className="bg-zinc-300 self-stretch w-px h-[216px]" />
                          <div className="justify-center items-start self-stretch flex flex-col grow shrink-0 basis-auto w-[326px]">
                            <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:mr-1">
                              <div className="text-black text-base leading-5 flex-1">
                                Available Food{" "}
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                2 times a day
                              </div>
                            </div>
                            <div className="justify-between items-start self-stretch flex w-full gap-5 mt-3 max-md:mr-1">
                              <div className="text-black text-base leading-5">
                                service how many times
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-center my-auto whitespace-nowrap">
                                singal meal
                              </div>
                            </div>
                            <div className="justify-between items-start self-stretch flex w-full gap-5 mt-3 max-md:mr-1.5">
                              <div className="text-black text-base leading-5 self-stretch">
                                water botel
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                Include
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3 max-md:mr-1">
                              <div className="text-black text-base leading-5 self-stretch">
                                total dishes
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                01
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3 max-md:mr-px">
                              <div className="text-black text-base leading-5 self-stretch">
                                fruits
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                not include
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3 max-md:mr-px">
                              <div className="text-black text-base leading-5 self-stretch">
                                soft drink
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                not inclued
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3">
                              <div className="text-black text-base leading-5 self-stretch">
                                soda drinks
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                not inclued
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-center items-center rounded border bg-white flex w-[92px] max-w-full grow flex-col mt-6 px-5 py-2.5 border-solid border-[#699FC9] self-end">
                          <div className="text-[#699FC9] text-sm font-medium leading-5 self-center whitespace-nowrap">
                            <button>
                            select
                            </button>
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
      </div>
     
     





      <div className="text-[#699FC9] text-3xl font-medium leading-7 ml-16 mt-16 self-start whitespace-nowrap max-md:ml-2.5 max-md:mt-10">
      Arabian Food
                  </div>
      <div className="bg-white self-center flex w-full max-w-[1284px] flex-col mt-9 pt-12 pb-3.5 px-5 rounded-lg max-md:max-w-full">
        <div className="self-center w-full max-w-[1206px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-center bg-neutral-400 bg-opacity-30 flex w-[370px] max-w-full flex-col mx-auto rounded-lg max-md:mt-10">
                <img
                  loading="lazy"
                  src={beef}
                  className="aspect-[1.07] object-contain object-center w-full overflow-hidden self-stretch grow"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-white text-3xl font-medium text-center justify-center items-center rounded bg-[#699FC9] w-[750px] max-w-full p-3 self-start">
                Beef Biryani
                                </div>
                <div className="w-[784px] max-w-full mt-5 self-start">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                      <div className="flex flex-col my-auto max-md:mt-10">
                        <div className="text-neutral-700 text-xl self-start whitespace-nowrap">
                          About
                        </div>
                        <div className="text-neutral-400 text-opacity-70 text-xl leading-7 mt-4">
                          <span className="text-black">
                            Flavorful one pot-Dish{" "}
                          </span>
                          <span className="text-neutral-400 text-opacity-70">
                            Biryani is a beloved dish in many regions, and it
                            has various regional variations in India, Pakistan,
                            and other South Asian countries.{" "}
                          </span>
                        </div>
                        <div className="items-start flex w-[137px] max-w-full gap-4 mt-4 self-start">
                          <div className="text-slate-400 text-base font-medium leading-5 self-stretch">
                            4.5
                          </div>
                          <div className="items-start self-stretch flex gap-0.5 max-md:justify-center">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a09087c7-f130-47f4-be1a-5221c2c1a0a3?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6f0ab0-21f5-4be9-ae11-721b28c75007?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cad5b0d-2243-4a87-8a8b-4404cc6b24de?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fd89d2a-177a-43b3-9bad-b095e331976e?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dfb3d21-6c9b-47df-829b-f707d02a6079?"
                              className="aspect-square object-contain object-center w-full fill-yellow-300 overflow-hidden flex-1"
                            />
                          </div>
                        </div>
                        <div className="text-white text-center text-sm font-medium leading-5 justify-center items-center rounded bg-[#699FC9] w-14  grow mt-4 px-2 py-2.5 self-start whitespace-nowrap">
                        <button >
                        $45

                        </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col max-md:mt-10">
                        <div className="flex w-[350px] max-w-full items-start justify-between gap-5 self-start">
                          <div className="bg-zinc-300 self-stretch w-px h-[216px]" />
                          <div className="justify-center items-start self-stretch flex flex-col grow shrink-0 basis-auto w-[326px]">
                            <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:mr-1">
                              <div className="text-black text-base leading-5 flex-1">
                                Available Food{" "}
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                2 times a day
                              </div>
                            </div>
                            <div className="justify-between items-start self-stretch flex w-full gap-5 mt-3 max-md:mr-1">
                              <div className="text-black text-base leading-5">
                                service how many times
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-center my-auto whitespace-nowrap">
                                singal meal
                              </div>
                            </div>
                            <div className="justify-between items-start self-stretch flex w-full gap-5 mt-3 max-md:mr-1.5">
                              <div className="text-black text-base leading-5 self-stretch">
                                water botel
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                Include
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3 max-md:mr-1">
                              <div className="text-black text-base leading-5 self-stretch">
                                total dishes
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                01
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3 max-md:mr-px">
                              <div className="text-black text-base leading-5 self-stretch">
                                fruits
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                not include
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3 max-md:mr-px">
                              <div className="text-black text-base leading-5 self-stretch">
                                soft drink
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                not inclued
                              </div>
                            </div>
                            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-3">
                              <div className="text-black text-base leading-5 self-stretch">
                                soda drinks
                              </div>
                              <div className="text-slate-400 text-base leading-5 self-stretch whitespace-nowrap">
                                not inclued
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-center items-center rounded border bg-white flex w-[92px] max-w-full grow flex-col mt-6 px-5 py-2.5 border-solid border-[#699FC9] self-end">
                          <div className="text-[#699FC9] text-sm font-medium leading-5 self-center whitespace-nowrap">
                            <button>
                            select
                            </button>
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
      </div>
     














     
    </div>




      
    </>
  )
}

export default FoodPreview
