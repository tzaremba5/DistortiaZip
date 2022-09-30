import React from 'react'

function Scoreboard({percent}) {
  return (
    <div className="border-2 border-gray-500 w-[500px]">
        <div className={`w-[${percent}%] h-full bg-green-300`}>
        </div>
    </div>
  )
}

export default Scoreboard