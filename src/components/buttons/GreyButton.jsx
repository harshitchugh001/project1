import React from 'react'

const GreyButton = ({ Content, onClick }) => {
    return (
        <button className='font-bold text-xl text-white hover:text-black px-3 py-3 bg-blue-500 hover:bg-gray-200 rounded-sm transform duration-500'
            onClick={onClick}>
            {Content}
        </button>
    )
}

export default GreyButton;
