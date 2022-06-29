import {NextApiHandler} from 'next'
import clientPromise from "lib/mongodb"
import {illegalMethod} from "lib/responses";

const getArgonauts: NextApiHandler = async (req, res) => {
    const client = await clientPromise
    const db = client.db("lezard-go-not")
    const argonauts = await db.collection("argonauts").find({}).toArray()
    res.status(200).json(argonauts)
}

const createArgonauts: NextApiHandler = async (req, res) => {
    const client = await clientPromise
    const db = client.db("lezard-go-not")
    const document = JSON.parse(req.body)
    const argonaut = await db.collection("argonauts").insertOne(document)
    res.status(200).json(argonaut)
}

const handlers: Record<string, NextApiHandler> = {
    "GET": getArgonauts,
    "POST": createArgonauts,
    "NO_METHOD": illegalMethod
}

const endpoint: NextApiHandler = async (req, res) => {
    const handler = handlers[req.method ?? "NO_METHOD"] ?? illegalMethod

    handler(req, res)
}

export default endpoint