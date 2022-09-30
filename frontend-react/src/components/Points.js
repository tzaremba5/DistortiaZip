import React from 'react'

function Points({score}) {
  return (
    <div className="bg-yellow-300 flex-col rounded-md text-black p-5">
        <div>
            Your score
        </div>
        <div className="flex justify-center">
            {score}
        </div>
    </div>
  )
}

export default Points