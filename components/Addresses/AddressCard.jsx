import React, {useContext, useEffect, useState} from 'react';
import AddressInput from "./AddressInput";
import Auth from "helpers/Auth";
import toast from "react-hot-toast";

function AddressCard(props) {
    const auth = useContext(Auth)
    const {_id,name, phoneNo, addressLine1, addressLine2, country, city,state, zipcode, landmark,selected=false,select=false} = props
    const [input, setInput] = useState({})
    const [editAddressOpen,setEditAddressOpen] = useState(false)
    function onInputChange(evt){
        const {name,value} = evt.target
        setInput(old => {
            return {
                ...old,
                [name]:value
            }
        })
    }
    function editToggle(e){
        e.stopPropagation()
        setEditAddressOpen(!editAddressOpen)
    }
    function editAddress(data) {
        auth.Axios.put(`/user/address/${_id}`, data).then(res => {
            toast.success("Address updated successfully")
            props.onEdit(input);
            setEditAddressOpen(false)
        }).catch(err => {
            toast.error("Error updating address")
        })
    }

    function deleteAddress(e){
        e.stopPropagation()
        auth.Axios.delete(`/user/address/${_id}`).then(res => {
            toast.success("Address Deleted Successfully")
            props.onDelete()
        }).catch(err => {
            console.error(err)
            toast.error("Error Deleting Address")
        })
    }

    useEffect(() => {
        setInput(props)
    }, [props])

    return (
        <div onClick={select?props.onSelect:() => {}} className={`border ${ selected?"border-indigo-600":""} rounded shadow p-2 px-4 w-full bg-gray-50 text-lg my-2`}>
            {!editAddressOpen && <>
                <p className={"font-medium "}>{name}</p>
                <p className={" "}>{phoneNo}</p>
                <p className={" "}>{addressLine1}</p>
                <p className={" "}>{addressLine2}</p>
                <p className={" "}>{landmark}</p>
                <p className={" "}>{country}</p>
                <p className={" "}>{city}</p>
                <p className={" "}>{state}</p>
                <p className={" "}>{zipcode}</p>
                <div className="actions text-sm my-3">
                    <button onClick={editToggle} >Edit Me</button> | <button onClick={deleteAddress}>Delete Address</button>
                </div>
            </>}
            {editAddressOpen && <AddressInput input={input} setInput={onInputChange} onSave={editAddress} onCancel={editToggle}/>}
        </div>
    );
}

export default AddressCard;