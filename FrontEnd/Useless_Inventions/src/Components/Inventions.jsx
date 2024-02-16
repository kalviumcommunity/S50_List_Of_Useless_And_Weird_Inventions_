import React from 'react';

function Inventions() {
  return (
    <div className="flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r shadow-2xl">
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300 rounded-lg shadow-lg p-8 max-w-screen-sm '>
      <h1 className='text-gray-800 text-center text-5xl font-bold mb-12'>👽 Useless and Weird Inventions 👽</h1>
      <p className="text-xl text-gray-800 text-center mb-4">Welcome to the realm of oddities! Explore mind-bending inventions that defy logic and reason. 😄 😜</p>
        <div className="flex justify-center items-center mb-6">
          <img className="max-w-full rounded-lg shadow-md" src="https://assets.newatlas.com/dims4/default/1928c8d/2147483647/strip/true/crop/1920x1080+0+0/resize/1920x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Foddest-roundup-19.jpg" alt="Useless Inventions" />
        </div>
        <p className="text-lg text-gray-800 text-center mb-4">From self-stirring mugs to portable pet rocks, we've got it all! Take a journey into the bizarre and discover inventions you never knew you didn't need.</p>
        <div className="flex justify-center items-center">
        <button className="bg-gray-800 text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-700 duration-300 hover:scale-110">Embark on the Journey</button>
        </div>
      </div>
      <div className="absolute ml-20 top-0 left-0 flex flex-col justify-center items-center max-w-64 h-full px-4">
      <p className="text-xl text-white font-bold text-center mb-8">👾 Get ready for the surreal experience! Dive in now!</p>
      <img className="w-56 h-56 mb-8" src="https://emojicdn.elk.sh/🛸" alt="UFO Emoji" />
      </div>
      <div className="absolute mr-20 top-0 right-0 flex flex-col justify-center items-center h-full px-4 max-w-64">
      <p className="text-xl text-white font-bold text-center mb-8">🎪 Join the wackiest inventions club today!</p>
        <img className="w-52 h-52 mb-8" src="https://emojicdn.elk.sh/🤹‍♂️" alt="Juggling Emoji" />
      </div>
    </div>
  );
}

export default Inventions;
