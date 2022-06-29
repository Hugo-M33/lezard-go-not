import {NextPage} from "next";
import {ButtonHTMLAttributes} from "react";

const Button: NextPage<ButtonHTMLAttributes<any>> = (props) => {
    return (
        <button
            {...props}
            className={`p-4 rounded-2xl bg-white font-bold hover:bg-violet-700 hover:text-white transition-colors duration-500 ease-out ${props.className}`}
        >
            {props.children}
        </button>
    )
}

export default Button