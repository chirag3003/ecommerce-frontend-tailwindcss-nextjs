import React, {useContext, useEffect} from 'react';
import Auth from "helpers/Auth"
import {useRouter} from "next/router";

function AuthProtect({children}) {
    const router = useRouter()
    const auth = useContext(Auth)

    useEffect(() => {
        if(!auth.user){
            router.push("/account/login")
        }
    },[auth.user,router.isReady])
    return (
        <>{children}</>
    );
}

export default AuthProtect;