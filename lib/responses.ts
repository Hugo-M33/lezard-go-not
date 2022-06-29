import {NextApiHandler} from "next";


const illegalMethod: NextApiHandler = async (req, res) => {
    res.status(405).send("Method not Allowed")
}

const documentNotFound: NextApiHandler = async (req, res) => {
    res.status(404).send("Document Not Found")
}

export {illegalMethod, documentNotFound}