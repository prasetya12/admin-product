import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/dashboard')
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50 flex-col">
            <div className="flex w-full max-w-lg justify-center font-semibold text-xl	">
                Login
            </div>
            <div className='shadow-md p-8 bg-white mt-5 w-1/4 rounded-lg'>
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none  rounded-md  border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email address"
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="relative block w-full appearance-none  rounded-md  border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
                <div className='mt-4'>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={onLogin}
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Login