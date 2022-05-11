import React from 'react'

const AvatarProfile = () => {
    return (
        <>            
        <div className="w-full flex justify-center py-5">
            <div className="w-96">                
                <div className="grid grid-cols-2">
                    <div className="col-span-1 flex justify-center items-center">
                        <img src="https://image.flaticon.com/icons/png/512/260/260507.png" alt="user_avatar" className="border-2 border-green-400 w-32 rounded-full p-2 mx-auto"></img>
                    </div>
                    <div className="col-span-1 p-2 flex justify-center items-center">
                        <div className="grid gap-y-2">
                            <button className="text-white duration-1000 border-2 bg-gray-700 hover:bg-gray-900 rounded-lg w-full px-4 py-2">Cargar imagen</button>
                            <button className="text-white duration-1000 border-2 bg-gray-700 hover:bg-gray-900 rounded-lg w-full px-4 py-2">Eliminar</button>
                        </div>                    
                    </div>
                </div>                
            </div>
        </div>
        </>
    )
}

export default AvatarProfile
