import React from 'react'

function Card(props) {
  console.log("props:", props.someObj.name)
  return (
    <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/29935806/pexels-photo-29935806/free-photo-of-charming-cottage-in-sunlit-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.someObj.name}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className="mt-4 bg-indigo-600 text-black py-2 px-4 rounded-md hover:bg-indigo-800">
          {props.btnText || 'No Text'}
        </button>
      </div>
    </>
  )
}

export default Card