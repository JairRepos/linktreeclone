import React, { useContext, useEffect } from 'react'

import '../index.css'
import { UserContext } from './useContext/UserContext';

const SocialMedia = (props) => {

    const { social, setSocial, setErrorFB, setErrorIG, setErrorTW } = props;

    const { description, facebook, instagram, twitter } = social;

    const { setUser } = useContext(UserContext);

    useEffect(() => {

        const expFacebook = /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/[a-z]+/i;
        const expInstagram = /^(?:@)[a-z]+/i;
        const expTwitter = /^(?:@)[a-z]+/i;

        function validarForm() {
            if (!expFacebook.test(facebook)) {
                setErrorFB(true);
            }
            if (!expInstagram.test(instagram)) {
                setErrorIG(true);
            }
            if (!expTwitter.test(twitter)) {
                setErrorTW(true);
            }
        }

        validarForm();

        return () => {
            setErrorFB(false);
            setErrorIG(false);
            setErrorTW(false);
        }

    }, [facebook, instagram, twitter, setErrorFB, setErrorIG, setErrorTW])

    const handleChange = (e) => {
        setSocial({
            ...social,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="w-full pt-5 pb-1">

            <button className="border-2 border-black text-sm px-6 py-1 rounded-md float-right links duration-500"
                onClick={() => setUser('')}
            >Cambiar username
            </button>

            <label className="block mx-auto mt-14 mb-5 w-11/12 md:w-3/4 text-xs font-semibold" htmlFor="description">Descripción</label>
            <textarea
                type="text"
                onChange={handleChange}
                name="description"
                value={description}
                maxLength="87"
                className="block text-sm border-b-2 border-gray-600 outline-none mb-8 mx-auto w-11/12 md:w-3/4 focus:border-green-400 duration-700 resize-none"
                id="description"
            />
            {/* <label className="block mx-auto -mt-7 w-11/12 md:w-3/4 text-xs text-red-600"></label> */}

            <h2 className="w-11/12 md:w-3/4 mx-auto font-semibold text-xl text-center text-green-500">Redes Sociales</h2>

            <label className="block mx-auto mt-4 mb-5 w-11/12 md:w-3/4 text-xs font-semibold" htmlFor="facebook">Facebook</label>
            <input
                type="text"
                onChange={handleChange}
                name="facebook"
                value={facebook}
                placeholder="https://www.facebook.com/usuario"
                className="block text-sm border-b-2 border-gray-600 outline-none mb-8 mx-auto w-11/12 md:w-3/4 focus:border-green-400 duration-700"
                id="facebook"
            />
            {/* {
                errorFB ? <label className="block mx-auto -mt-7 w-11/12 md:w-3/4 text-xs text-red-600">Ingrese un URL válido de Facebook</label> : ''
            } */}

            <label className="block mx-auto mt-10 mb-5 w-11/12 md:w-3/4 text-xs font-semibold" htmlFor="instagram">Instagram</label>
            <input
                type="text"
                onChange={handleChange}
                name="instagram"
                value={instagram}
                placeholder="@usuario"
                className="block text-sm border-b-2 border-gray-600 outline-none mb-8 mx-auto w-11/12 md:w-3/4 focus:border-green-400 duration-700"
                id="instagram"
            />
            {/* {
                errorIG ? <label className="block mx-auto -mt-7 w-11/12 md:w-3/4 text-xs text-red-600">Ingrese un usuario válido de Instagram</label> : ''
            } */}

            <label className="block mx-auto mt-10 mb-5 w-11/12 md:w-3/4 text-xs font-semibold" htmlFor="twitter">Twitter</label>
            <input
                type="text"
                onChange={handleChange}
                name="twitter"
                value={twitter}
                placeholder="@usuario"
                className={`block text-sm border-b-2 border-gray-600 outline-none mb-8 mx-auto w-11/12 md:w-3/4 focus:border-green-400 duration-700`}
                id="twitter"
            />
            {/* {
                errorTW ? <label className="block mx-auto -mt-7 w-11/12 md:w-3/4 text-xs text-red-600">Ingrese un usuario válido de Twitter</label> : ''
            } */}


        </div>

    )
}

export default SocialMedia
