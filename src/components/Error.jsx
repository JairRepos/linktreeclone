import React from 'react'

const Error = ({ errorMessage }) => {
    return (
        <div>
            <p className="text-center mb-14 p-4 bg-red-500 text-white text-sm w-full md:w-9/12 mx-auto">{errorMessage}</p>
        </div>
    )
}

export default Error
