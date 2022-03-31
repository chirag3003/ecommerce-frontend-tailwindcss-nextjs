import React from 'react';
import BasicStyle from "./Basic.style";
import Navbar from "components/Navbar";
import Footer from "../../Footer";

function BasicLayout({ children }) {
    return (
        <BasicStyle>
            <Navbar />
            {children}
            <Footer />
        </BasicStyle>
    );
}

export default BasicLayout;