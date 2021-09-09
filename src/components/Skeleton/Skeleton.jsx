import React from 'react'

function Skeleton() {
  return (
    <div className="animate-pulse flex flex-col content-center p-2 sm:p-2 md:p-6 lg:p-10 border border-blue-300 mb-3 rounded w-35 text-center">
      <div className="w-52 h-52 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-28 lg:h-28 bg-blue-400 rounded-full mb-4 mx-auto" />
      <p className="mb-4 text-lg bg-blue-400 rounded w-12 h-6 mx-auto"></p>
      <div
        className="p-5 h-8 w-20 bg-blue-400 font-bold rounded mx-auto">
      </div>
    </div>
  )
}

export default Skeleton
