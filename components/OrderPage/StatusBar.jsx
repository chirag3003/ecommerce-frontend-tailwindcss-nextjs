import React from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function StatusBar({ step }) {
    return (
        <div className="mt-6" aria-hidden="true">
            <div className="bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-2 bg-indigo-600 rounded-full"
                    style={{ width: `calc((${step} * 2 + 1) / 8 * 100%)` }}
                />
            </div>
            <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                <div className="text-indigo-600">Order placed</div>
                <div className={classNames(step > 0 ? 'text-indigo-600' : '', 'text-center')}>
                    Processing
                </div>
                <div className={classNames(step > 1 ? 'text-indigo-600' : '', 'text-center')}>
                    Shipped
                </div>
                <div className={classNames(step > 2 ? 'text-indigo-600' : '', 'text-right')}>
                    Delivered
                </div>
            </div>
        </div>
    )
}

export default StatusBar