import React, {useContext, useEffect, useState} from 'react';
import AddressCard from "./AddressCard";
import AddressInput from "./AddressInput";
import Auth from "../../helpers/Auth";
import toast from "react-hot-toast";
const addressInputDefault = {
    name: "", phoneNo: "", addressLine1: "", addressLine2: "", landmark: "", city: "", state: "", zipcode: "",
}
function Index({title="Addresses"}) {
    const auth = useContext(Auth)
    const [addresses,setAddresses] = useState([])
    const [newAddressInput, setNewAddressInput] = useState(addressInputDefault)
    const [addAddressOpen, setAddAddressOpen] = useState(false)

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


    function onAddressSave(data) {
        auth.Axios.post("/user/address", data).then(res => {
            toast.success("Address saved successfully")
            setAddAddressOpen(false)
            setNewAddressInput(addressInputDefault)
            setAddresses([...addresses,{_id:res.data.InsertedID,...data}])
        }).catch(err => {
            toast.error("Error Saving Address")
        })
    }
    function onEditAddress(index){
        return data => {
            let newAddresses = [...addresses]
            newAddresses[index] = data;
            setAddresses(newAddresses)
        }
    }

    function onDeleteAddress(index){
        return () => {
            console.log(index)
            let newAddresses = addresses.filter((address,i) => {
                return i !== index
            })
            setAddresses(newAddresses)
        }
    }
    useEffect(() => {
        auth.Axios.get("/user/address").then(res => {
            setAddresses(res.data)
        }).catch(err => {
            console.error(err)
            toast.error("An error occurred while fetching your data")
        })
    },[])
    return (
        <div>
            <div>
                <h3 className="mt-2 mb-4 text-lg leading-6 font-medium text-gray-900">{title}</h3>
            </div>
            {!addAddressOpen && <>
                {addresses.map((address,index)=>{
                    return <AddressCard key={address._id} {...address} onEdit={onEditAddress(index)} onDelete={onDeleteAddress(index)} />
                }) }
                <div className="actions  my-3">
                    <button onClick={() => setAddAddressOpen(true)}>Add Address</button>
                </div>
            </>}
            {addAddressOpen &&
                <AddressInput
                    input={newAddressInput}
                    setInput={onInputChange(setNewAddressInput)}
                    onCancel={() => setAddAddressOpen(false)}
                    onSave={onAddressSave}
                />
            }
        </div>
    );
}

export default Index;