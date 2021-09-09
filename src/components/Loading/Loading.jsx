import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={'/icons/cyclone.png'} alt="load-more"
        className="w-32 animate-spin ease-in-out mr-3 spinner" />
      <div className="flex items-center gap-x-2 italic">
        <strong className="text-blue-500">Loading</strong>
        <div className="flex items-center gap-x-0.5">
          <div className="text-blue-500 text-5xl animate-bounce first-dot transition duration-700">.</div>
          <div className="text-blue-400 text-5xl animate-bounce second-dot transition duration-700">.</div>
          <div className="text-blue-300 text-5xl animate-bounce third-dot transition duration-700">.</div>
        </div>
      </div>
    </div>
  )
}

export default Loading;
