import {NextApiHandler} from 'next'
import clientPromise from "lib/mongodb"
import {documentNotFound, illegalMethod} from "lib/responses";
import {ObjectId} from "mongodb";

const toggleArgonaut: NextApiHandler = async (req, res) => {
    const client = await clientPromise
    const argonauts = client.db("lezard-go-not").collection("argonauts")
    const {id} = req.query
    const query = {_id: new ObjectId(id as string)}
    const document = await argonauts.findOne(query)
    console.log(document)

    if (document === null) return await documentNotFound(req,res)

    document.selected = !document.selected
    const newDocument = await argonauts.findOneAndReplace(query, document)
    console.log(newDocument)
    res.status(200).json(newDocument)
}

const deleteArgonaut: NextApiHandler = async (req, res) => {
    const client = await clientPromise
    const argonauts = client.db("lezard-go-not").collection("argonauts")
    const {id} = req.query
    const query = {_id: new ObjectId(id as string)}
    const result = await argonauts.findOneAndDelete(query)
    if (!result.ok) return await documentNotFound(req,res)
    res.status(200).json(result.value)
}

const handlers: Record<string, NextApiHandler> = {
    "PATCH": toggleArgonaut,
    "DELETE": deleteArgonaut,
    "NO_METHOD": illegalMethod
}

const endpoint: NextApiHandler = async (req, res) => {
    const handler = handlers[req.method ?? "NO_METHOD"] ?? illegalMethod

    await handler(req, res)
}

export default endpoint