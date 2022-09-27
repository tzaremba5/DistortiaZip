import React from 'react'

function Label({label}) {
  return (
    <div className="
    border-4 p-[20px] m-[20px] rounded-md hover:bg-green-300 hover:rounded-full ease-in duration-100 hover:text-black">
        {label}
    </div>
  )
}

export default Label