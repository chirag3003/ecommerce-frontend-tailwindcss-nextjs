import React, {useContext, useEffect, useState} from "react";
import Auth from "helpers/Auth";
import toast from "react-hot-toast";
import Addresses from "../Addresses";

export default function AccountPage() {
    const auth = useContext(Auth)
    const [input, setInput] = useState({
        name: ""
    })
    function onInputChange(setState) {
        return (evt) => {
            const {name, value} = evt.target
            setState(old => {
                return {
                    ...old, [name]: value
                }
            })
        }
    }

    async function saveInput() {
        auth.Axios.patch("/user/name", input).then(res => {
            toast.success("Successfully Saved!")
            auth.getUserData()
        }).catch(err => {
            toast.error("Error Saving Data!")
        })
    }



    useEffect(() => {
        setInput(auth.user)
    }, [auth.user])

    return (<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-36">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">

            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can
                        receive mail.</p>
                </div>
                <div className="space-y-6 sm:space-y-5">
                    <div
                        className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="name"
                               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Full Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={input?.name}
                                onChange={onInputChange(setInput)}
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button
                                onClick={saveInput}
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                    </div>

                    <Addresses/>
                </div>
            </div>

        </div>

    </main>)
}
