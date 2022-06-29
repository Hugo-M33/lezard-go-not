import {NextApiHandler} from "next";


const illegalMethod: NextApiHandler = async (req, res) => {
    res.status(405).send("Method not Allowed")
}

export {illegalMethod}