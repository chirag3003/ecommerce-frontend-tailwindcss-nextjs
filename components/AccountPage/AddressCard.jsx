import React from 'react';

function AddressCard({name,phoneNo,addressLine1,addressLine2,country,city,zipcode,landmark}) {
    return (
        <div className={"border rounded shadow p-2 px-4 w-full bg-gray-50 text-lg "}>
            <p className={"font-medium "}>{name}</p>
            <p className={" "}>{phoneNo}</p>
            <p className={" "}>{addressLine1}</p>
            <p className={" "}>{addressLine2}</p>
            <p className={" "}>{landmark}</p>
            <p className={" "}>{country}</p>
            <p className={" "}>{city}</p>
            <p className={" "}>{zipcode}</p>
            <div className="actions text-sm my-3">
                <button>Edit Me</button> | <button>Delete Address</button>
            </div>
        </div>
    );
}

export default AddressCard;