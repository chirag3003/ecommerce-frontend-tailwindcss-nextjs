import '../styles/globals.css'
import AuthContext from "../helpers/Auth/AuthContext";
import CartContext from "../helpers/Cart/CartContext";
import {Toaster} from "react-hot-toast";

function MyApp({Component, pageProps}) {
    return <div>
        <div><Toaster
            position="bottom-center"
        /></div>

        <CartContext>
            <AuthContext>
                <Component {...pageProps} />
            </AuthContext>
        </CartContext>
    </div>
}

export default MyApp
