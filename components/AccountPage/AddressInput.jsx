import React from 'react';

function AddressInput({input, setInput,onCancel,onSave}) {
    function saveAddress(){
        onSave({
            ...input,
            phoneNo: Number(input.phoneNo)
        })
    }
    return (
        <div>

            <div
                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="name"
                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Name
                </label>
                <div className="my-1 sm:mt-0 sm:col-span-2">
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={setInput}
                        id="name"
                        className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>


            <div
                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="phoneNoContact"
                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Phone Number
                </label>
                <div className="my-1 sm:mt-0 sm:col-span-2">
                    <input
                        id="phoneNoContact"
                        name="phoneNo"
                        type="number"
                        value={input.phoneNo}
                        onChange={setInput}
                        className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div
                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="addressLine1"
                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Address Line 1
                </label>
                <div className="my-1 sm:mt-0 sm:col-span-2">
                    <input
                        type="text"
                        name="addressLine1"
                        id="addressLine1"
                        value={input.addressLine1}
                        onChange={setInput}
                        className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div
                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="addressLine2"
                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Address Line 2
                </label>
                <div className="my-1 sm:mt-0 sm:col-span-2">
                    <input
                        type="text"
                        name="addressLine2"
                        id="addressLine2"
                        value={input.addressLine2}
                        onChange={setInput}
                        className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div
                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="landmark"
                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Landmark
                </label>
                <div className="my-1 sm:mt-0 sm:col-span-2">
                    <input
                        type="text"
                        name="landmark"
                        id="landmark"
                        value={input.landmark}
                        onChange={setInput}
                        className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div
                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="city"
                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    City
                </label>
                <div className="my-1 sm:mt-0 sm:col-span-2">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        value={input.city}
                        onChange={setInput}
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div
                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="state"
                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    State / Province
                </label>
                <div className="my-1 sm:mt-0 sm:col-span-2">
                    <input
                        type="text"
                        name="state"
                        id="state"
                        value={input.state}
                        onChange={setInput}
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div
                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="postal-code"
                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    ZIP / Postal code
                </label>
                <div className="my-1 sm:mt-0 sm:col-span-2">
                    <input
                        type="text"
                        name="zipcode"
                        id="postal-code"
                        value={input.zipcode}
                        onChange={setInput}
                        autoComplete="postal-code"
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="actions w-full p-2 flex justify-end">
                <button className={"border border-red-600 p-2 rounded-lg text-red-600 mr-4"} onClick={onCancel}>Cancel</button>
                <button className={"p-2 rounded-lg bg-indigo-600 text-white px-4"} onClick={saveAddress}>Save</button>
            </div>
        </div>
    );
}

export default AddressInput;