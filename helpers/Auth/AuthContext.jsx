import React, {useState, useEffect} from "react";
import Axios from "helpers/Axios";
import authContext from ".";
import axios from "axios";

const getLocalJWT = () => {
    try {
        const jwt = localStorage.getItem("jwt");
        if (jwt === null) {
            return null;
        } else if (jwt === "null") {
            return null;
        } else {
            return jwt;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};
const setLocalJwt = (jwt) => {
    let JWT = jwt;
    try {
        localStorage.setItem("jwt", JWT);
    } catch (err) {
        console.error(err);
        return null;
    }
};

function AuthContext({children}) {
    const [jwt, setJwt] = useState(getLocalJWT());
    const [user, setUser] = useState({});

    async function register({email, password}) {
        try {
            const res = await Axios.post("/user/register", {email, password});
            if (res.status === 200 && res.data) {
                setJwt(res.data);
            }
            return null
        } catch (e) {
            return e
        }
    }

    async function login({email, password}) {
        try {
            const res = await Axios.post("/user/login", {email, password});
            if (res.status === 200 && res.data) {
                setJwt(res.data);
            }
            return null
        } catch (e) {
            return e
        }
    }

    function logout() {
        setJwt(null);
    }

    useEffect(() => {
        if (!jwt || jwt === "" || jwt === null) {
            setUser(null);
            setLocalJwt(null);
            return;
        }
        if (jwt !== getLocalJWT()) {
            setLocalJwt(jwt);
        }

        Axios({
            method: "GET",
            url: "/user/me",
            headers: {
                Authorization: jwt,
            },
        })
            .then((res) => {
                setUser(res.data);
            })
            .catch(() => {
                setUser(null);
                setJwt(null);
            });
    }, [jwt]);

    return (
        <authContext.Provider
            value={{
                jwt,
                user,
                login,
                logout,
                register,
                Axios: axios.create({
                    baseURL: process.env.NEXT_PUBLIC_API_URL,
                    headers: {
                        Authorization: jwt,
                    },
                }),
            }}
        >
            {children}
        </authContext.Provider>
    );
}

export default AuthContext;
