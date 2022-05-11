import React from 'react'

const Navigation = ({ setOpcion }) => {
    return (
        <div>
            <nav className="">
                <div className="grid grid-cols-3 gap-x-1 text-center">
                    <div className="bg-purple-600 hover:bg-purple-700 duration-1000">
                        <button onClick={() => setOpcion('Perfil')} className="text-white py-2 cursor-pointer w-full">Perfil</button>
                    </div>
                    <div className="bg-purple-600 hover:bg-purple-700 duration-1000">
                        <button onClick={() => setOpcion('Links')} className="text-white  py-2 cursor-pointer w-full">Links</button>
                    </div>
                    <div className="bg-purple-600 hover:bg-purple-700 duration-1000">
                        <button onClick={() => setOpcion('Temas')} className="text-white  py-2 cursor-pointer w-full">Temas</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
