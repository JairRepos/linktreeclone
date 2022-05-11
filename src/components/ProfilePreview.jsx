import React, { useContext } from 'react'

/* React Icons */
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

import '../index.css'
import { UserContext } from './useContext/UserContext';

const ProfilePreview = (props) => {

    const { user } = useContext(UserContext);

    const { social, links, themePicker, eliminarLink, errorFB, errorIG, errorTW } = props;

    const { description, facebook, instagram, twitter } = social;

    console.log(user);

    return (
        <div className="flex justify-center items-center -mt-2 py-2 preview">
            <div className={`h-full w-72 relative ${themePicker}`} style={{ border: '16px solid #000', borderRadius: '50px' }}>
                <div className="">
                    <div className="col-span-1 flex justify-center items-center">
                        <img src="https://image.flaticon.com/icons/png/512/260/260507.png" className="border-2 border-black w-16 mt-4 rounded-full p-2 mx-auto" alt="profile"></img>
                    </div>

                    <div className="flex flex-col justify-center items-center my-3 w-48 overflow-hidden h-20 mx-auto relative">
                        <p className="text-sm font-normal text-white">{`${user}`}</p>
                        <p className="text-xs text-center mt-2 text-gray-200">{description}</p>
                    </div>
                </div>
                <div className="w-full mt-3 grid grid-cols-1 gap-y-2 py-3 px-3">
                    {links.map(link => (
                        <div key={link.id} className="flex">
                            <a href={link.link} className="w-11/12 mx-auto text-center py-2 transition duration-700 ease-in-out links">{link.nombre}
                            </a>
                            <button className="flex justify-center items-center w-10 ml-1 links"
                                onClick={() => eliminarLink(link.id)}
                            ><FaTrashAlt></FaTrashAlt>
                            </button>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-8 flex justify-center w-full">

                    <div className="flex py-1 px-2 effect">
                        <a href={errorFB ? 'https://www.facebook.com' : `https://www.facebook.com/${facebook.replace('https://www.facebook.com/', '')}`} className="text-2xl mx-1" style={{ color: '#405DE6' }}><FaFacebook></FaFacebook></a>
                        <a href={errorIG ? 'https://www.instagram.com' : `https://www.instagram.com/${instagram.replace('@', '')}`} className="text-2xl mx-1" style={{ color: '#E1306C' }}><FaInstagram></FaInstagram></a>
                        <a href={errorTW ? 'https://www.twitter.com' : `https://www.twitter.com/${twitter.replace('@', '')}`} className="text-2xl mx-1" style={{ color: '#00acee' }}><FaTwitter></FaTwitter></a>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ProfilePreview
