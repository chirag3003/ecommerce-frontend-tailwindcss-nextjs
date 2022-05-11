import '../styles/globals.css'
import AuthContext from "../helpers/Auth/AuthContext";
import CartContext from "../helpers/Cart/CartContext";

function MyApp({Component, pageProps}) {
    return <div>
        <CartContext>
            <AuthContext>
                <Component {...pageProps} />
            </AuthContext>
        </CartContext>
    </div>
}

export default MyApp
