import React, { useState } from 'react'
/* import AvatarProfile from './AvatarProfile' */
import Navigation from './Navigation'
import ProfilePreview from './ProfilePreview'
import SocialMedia from './SocialMedia'
import Links from './Links'
import Temas from './Temas'

import '../index.css'

const Menu = () => {

    const [opcion, setOpcion] = useState('Perfil')
    const [social, setSocial] = useState({
        description: '',
        facebook: '',
        instagram: '',
        twitter: ''
    })

    const [errorFB, setErrorFB] = useState(false);
    const [errorIG, setErrorIG] = useState(false);
    const [errorTW, setErrorTW] = useState(false);

    const [links, setLinks] = useState([]);

    const crearLink = link => {
        setLinks([...links, link]);
    }

    const eliminarLink = id => {
        const linksUpdate = links.filter(link => link.id !== id);

        setLinks(linksUpdate);
    }

    const [themePicker, setThemePicker] = useState('bg-gradient-to-t from-green-400 to-blue-500')


    return (
        <div className="w-screen mx-auto p-5
                        lg:w-11/12">
            <div className="text-center">
                <h2 className="text-green-400 uppercase font-bold text-3xl md:text-4xl m-2">LinkTree - Clone</h2>
                <p className="text-lg">Esta app te permite unificar todas tus redes sociales en un solo link.</p>
                <span className="block text-lg font-bold mt-2">¡Esto les encantará a tus seguidores!</span>
            </div>
            <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-3 mt-5">
                <div className="col-span-1 lg:col-span-2 lg:overflow-auto">
                    <Navigation setOpcion={setOpcion} />
                    {/* <AvatarProfile />
                    <hr style={{ border: '1px dashed #7C3AED' }}></hr> */}
                    {
                        opcion === 'Perfil' ? <SocialMedia social={social} setSocial={setSocial} setErrorFB={setErrorFB} setErrorIG={setErrorIG} setErrorTW={setErrorTW} /> :
                            opcion === 'Links' ? <Links crearLink={crearLink} links={links} />
                                : <Temas setThemePicker={setThemePicker} />
                    }

                </div>
                <div className="col-span-1">
                    <ProfilePreview social={social} themePicker={themePicker} eliminarLink={eliminarLink} links={links} errorFB={errorFB} errorIG={errorIG} errorTW={errorTW} />
                </div>
            </div>

        </div>
    )
}

export default Menu
