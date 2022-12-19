/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from '../Button/Button'
import teacher from '../../public/constor.png'
import Co2 from '../../public/co2.png'

function NewComp() {
  return (
    <div className="container_main py-10">
      {/* <div className="absolute mt-28 h-[430px] w-[600px] rounded-xl rounded z-[1px] bg-[rgba(0,0,0,0.4)]" /> */}
      <div className="md:flex w-full z-10 relative">
        <div className="w-full md:w-[700px] flex md:justify-end justify-center">
          <img src={Co2.src} alt="imo image" className="h-[420px] w-[250px] md:h-[530px] md:w-[320px]" />
        </div>
        <div className="mt-2 md:mt-0 md:px-9 flex items-center w-full">
          <div>
            <h1 className="text-4xl font-medium py-2">Become an instructor</h1>
            <p className="font-medium py-2 text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              magni eos, mollitia quisquam dolore totam omnis accusamus dolores
              molestiae impe
            </p>
            <Button className="mt-3">Start teaching today</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewComp
