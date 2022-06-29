import {NextPage} from "next";
import {ButtonHTMLAttributes, InputHTMLAttributes} from "react";

const Input: NextPage<InputHTMLAttributes<any>> = (props) => {

    return <input {...props} className={`bg-violet-300 p-3 shadow-inner rounded-2xl w-1/2 ${props.className}`}  />
}

export default Input