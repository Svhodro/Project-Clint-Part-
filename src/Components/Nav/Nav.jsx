import React, { useContext, useState } from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import UserContext from '../../context/UserContext'




function Nav() {
    const [user, setuser] = useState(true)
    const { register, setRegister } = useContext(UserContext)
    const handleLoginFrom = () => {
        setRegister(true)
    }
    const handleRegisterFrom = () => {
        setRegister(false)
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='btn btn-ghost' >About</li>
                            <li className='btn btn-ghost'>Product's</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <li className='btn btn-ghost'>About</li>
                        <li className='btn btn-ghost'>Product's</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>{register ? "SignIn" : "Signup"}</button>
                    <dialog id="my_modal_1" className="modal bg-transparent">
                        <div className="modal-box ">

                            <div className="modal-action flex flex-col justify-center items-center">
                                {register ? <Login /> : <Register />}


                                <p>Don't have any account?
                                    {register ? <button className="btn btn-active btn-link" onClick={handleRegisterFrom}>Register
                                    </button> : <button className="btn btn-active btn-link" onClick={handleLoginFrom}>Login
                                    </button>}
                                </p>
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    )
}

export default Nav