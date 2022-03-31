import React from 'react'

function Highlights({ highlights }) {
    return (
        <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                    {highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Highlights