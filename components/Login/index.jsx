import React,{useState,useEffect,useContext} from "react"
import Auth from "helpers/Auth"
import Link from "next/link";
import {XCircleIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import {LOGO} from "../../config/url";

export default function Login({register=false}) {
    const router = useRouter()
    const auth = useContext(Auth)
    const [responseError,setResponseError] = useState(null)

    async function SignIn(evt){
        evt.preventDefault()
        const err = await (register?auth.register:auth.login)({email:evt.target[0].value,password:evt.target[1].value})
        if(err){
            if(err.response.data === "already exists") {
                setResponseError({
                    message: "An account with this email address already exists"
                })
            }else if(err.response.status === 401){
                setResponseError({
                    message: "Incorrect Username or Password"
                })
            }

        }
        closeError()
    }
    async function closeError(time = 4000){
        setTimeout(() => {
            setResponseError(null)
        },time)
    }
    useEffect(() => {
        console.log(auth.user)
        console.log(auth.jwt)
        if(auth.user && auth.jwt !== ""){
            router.replace("/")
        }
    },[auth.user, auth.jwt, router.isReady])

    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-5">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={LOGO}
                        alt={""}
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{register?"Register":"Sign in to"} your account</h2>

                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-gray-100">
                    <div className="bg-gray-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={SignIn} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center">
                                    <Link href={register?"/account/login":"/account/register"} passHref>
                                        <div className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                                            {register?"Login":"Register"}?
                                        </div>
                                    </Link>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {register?"Sign up":"Sign in"}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            {responseError && <div className="rounded-md bg-red-50 p-4 max-w-4xl fixed bottom-2 right-2 ml-2">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">{responseError.message}</h3>
                    </div>
                </div>
            </div>}
        </>
    )
}
