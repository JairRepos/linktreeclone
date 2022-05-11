import React from 'react'

const Temas = ({ setThemePicker }) => {

    const themes = [
        { theme: 'bg-gradient-to-t from-yellow-500 to-blue-500' },
        { theme: 'bg-gradient-to-t from-pink-500 to-green-400' },
        { theme: 'bg-gradient-to-t from-blue-600 to-purple-500' },
        { theme: 'bg-gradient-to-t from-yellow-400 via-red-500 to-pink-500' }
    ]


    return (
        <div className="w-full pt-5 pb-9">

            <h3 className="text-center mt-5 mb-10 text-green-500 font-semibold text-xl">Temas LinkTree - Clone</h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 w-full">

                {themes.map(themes => (
                    <div key={themes.theme} className={`w-10/12 md:w-11/12 h-64 md:h-72 xl:h-96 border-8 border-black rounded-3xl ${themes.theme} mx-auto`}
                        onClick={() => setThemePicker(themes.theme)}
                    >
                    </div>
                ))}


            </div>

        </div>
    )
}

export default Temas
