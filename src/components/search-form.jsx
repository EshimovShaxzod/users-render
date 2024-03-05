import React from 'react'


const SearchForm = ({data, reload}) => {

  const value = React.useRef('')
  const clickUsers = (evt) => {
    data(evt)
  }

  const refreshUi = () => {
    // evt.preventDefault();
    reload()
  }

   return (
    <form className=' flex items-center gap-6 mb-16 w-full max-w-[350px] mx-auto dark:bg-[#2d2f33]'>
      <input ref={value} onChange={clickUsers}  className='px-2 py-2 w-full rounded-xl border outline-none dark:bg-[#414245] dark:text-white dark:border-none' type="text" placeholder='Search..' />
      <button className='px-6 py-2 cursor-pointer rounded-md bg-black text-white dark:bg-white dark:text-black' onClick={refreshUi}>Refresh</button>
    </form>
  )
}

export default SearchForm