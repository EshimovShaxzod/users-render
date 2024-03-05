import React from 'react'
import CakeLogo from '../assets/logo/cake.png'
import PersonInfoLogo from '../assets/logo/person-info.png'
import LocationLogo from '../assets/logo/location-pin.png'

const Card = ({data}) => {
  return (
    <div className='mx-auto text-center mb-8 shadow-md dark:bg-[#323c42d6] rounded-md w-full max-w-[330px] py-8 px-3'>
        <img className='mb-3 rounded-[50%] mx-auto' src={data.picture.large} alt="" />
        <span className='flex items-center justify-center gap-2 mb-3'>
         <img src={PersonInfoLogo} width='25' alt="" />
         <h3 className='dark:text-white'> {data.name.title} {data.name.first}  {data.name.last}</h3>
        </span>
        <span className='flex items-center justify-center gap-2 mb-2'>
            <img src={CakeLogo} width='25' alt="" />
            <h3 className='dark:text-white'>{data.dob.age} years old</h3>
        </span>
        <span className='flex items-center justify-center gap-2 mb-2'>
          <img src={LocationLogo} width='25' alt="" />
          <h3 className='dark:text-white'>{data.location.country} {data.location.state}</h3>
        </span>
    </div>
  )
}

export default Card