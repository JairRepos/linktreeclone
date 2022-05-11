import React, { useState } from 'react'

/* UUID */
import { v4 as uuidv4 } from 'uuid';
import Error from './Error';

const Links = ({ crearLink, links }) => {

    const [formLink, setFormLink] = useState({
        nombre: '',
        link: ''
    })

    const { nombre, link } = formLink;

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangeLink = (e) => {
        setFormLink({
            ...formLink,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const expLink = /^(?:(?:(?:https?|http):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

        if (nombre.trim() === '' || !expLink.test(link)) {
            setError(true);
            setErrorMessage('Todos los campos son obligatorios / URL inválida')

            setTimeout(() => {
                setError(false);
                setErrorMessage('');
            }, 3000)

            return;
        } else if (links.length === 5) {
            setError(true);
            setErrorMessage('Solo puede ingresar 5 links.')

            setTimeout(() => {
                setError(false);
                setErrorMessage('');
            }, 3000)

            return;
        }

        formLink.id = uuidv4();

        crearLink(formLink)

        setFormLink({
            nombre: '',
            link: ''
        })

    }

    return (
        <div className="w-full pt-5 pb-9">

            <h3 className="text-center mt-5 mb-10 text-green-500 font-semibold text-xl">¡Haz que tus seguidores conecten contigo!</h3>

            {error ? <Error errorMessage={errorMessage} /> : ''}

            <form onSubmit={handleSubmit}>
                <label className="block mx-auto mb-5 w-11/12 md:w-3/4 text-xs font-semibold" htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    onChange={handleChangeLink}
                    name="nombre"
                    value={nombre}
                    className="block text-sm border-b-2 border-gray-600 outline-none mb-8 mx-auto w-11/12 md:w-3/4 focus:border-green-400 duration-700"
                    id="nombre"
                    autoComplete="off"
                    maxLength='18'
                />

                <label className="block mx-auto mb-5 w-11/12 md:w-3/4 text-xs font-semibold" htmlFor="link">Link </label>
                <input
                    type="text"
                    onChange={handleChangeLink}
                    name="link"
                    value={link}
                    placeholder="https://www.ejemplo.com"
                    className="block text-sm border-b-2 border-gray-600 outline-none mb-8 mx-auto w-11/12 md:w-3/4 focus:border-green-400 duration-700"
                    id="link"
                    autoComplete="off"
                />

                <div className="flex justify-center">
                    <button className="bg-indigo-600 w-full md:w-64 py-2 rounded-md text-white">Agregar</button>
                </div>

            </form>
        </div>
    )
}

export default Links
