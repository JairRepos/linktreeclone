import React, { useContext, useState } from 'react'
import { UserContext } from './useContext/UserContext';

const Welcome = () => {

    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState({
        user: ''
    })

    const handleUserChange = (e) => {
        setUsername({
            [e.target.name]: e.target.value
        })
    }

    const { user } = username

    const handleUser = (e) => {
        e.preventDefault();
        setUser(user);
    }

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center flex-col bg-gradient-to-t from-green-400 to-blue-500">
                <form onSubmit={handleUser} className="glass px-8 pt-6 pb-8 my-32 w-80 overlay">
                    <h3 className="text-lg text-white font-semibold mb-16 text-center block">Bienvenido a <span className="block uppercase mt-2 text-2xl font-semibold text-green-600">LinkTree - Clone</span></h3>
                    <input
                        type="text"
                        name="user"
                        onChange={handleUserChange}
                        className="block border-b-2 bg-transparent font-medium text-white text-center placeholder-white border-gray-500 outline-none mb-8 mx-auto w-full focus:border-green-500 duration-700"
                        placeholder="Username"
                    />
                    <button className="block bg-blue-500 hover:bg-blue-600 duration-700 text-white font-medium px-4 py-2 rounded-md mx-auto w-full"

                    >Siguiente</button>
                </form>
            </div>
        </>
    )
}

export default Welcome
