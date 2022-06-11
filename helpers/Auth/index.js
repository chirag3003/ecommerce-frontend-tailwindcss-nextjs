import Axios from "helpers/Axios";
import { createContext } from "react";

const authContext = createContext({
    jwt: null,
    user: null,
    login: async ({ email = "", password = "" }) => {},
    register:async ({email="", password=""}) => {},
    logout: () => {},
    getUserData:() => {},
    Axios: Axios,
});

export default authContext;
