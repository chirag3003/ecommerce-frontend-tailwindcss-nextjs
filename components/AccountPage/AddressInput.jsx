import React from 'react';

function AddressInput(props) {
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
                        id="name"
                        autoComplete="street-address"
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
                        autoComplete="email"
                        className="block max-w-lg lg:max-w-sm w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
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
                        autoComplete="street-address"
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
                        autoComplete="street-address"
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
                        autoComplete="address-level2"
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div
                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="region"
                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    State / Province
                </label>
                <div className="my-1 sm:mt-0 sm:col-span-2">
                    <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
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
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default AddressInput;