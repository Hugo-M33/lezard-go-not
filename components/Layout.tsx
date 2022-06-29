import {NextPage} from "next";
import Header from "./Header";
import Footer from "./Footer";
import React, {ReactNode} from "react";

interface Props {
    children: ReactNode | ReactNode[]
}

const Layout: NextPage<Props> = ({children}) => {
    return (
        <>
            <Header/>
            <main className={`bg-violet-400 p-8`}>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout



