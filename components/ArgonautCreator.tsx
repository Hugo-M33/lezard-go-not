import {NextPage} from "next";
import {useSWRConfig} from "swr";
import {FormEventHandler, useState} from "react";
import Input from "components/Input";
import Button from "./Button";

const ArgonautCreator: NextPage = () => {
    const { mutate } = useSWRConfig()

    const [name, setName] = useState<string>("")
    const [adjectivesString, setAdjectivesString] = useState<string>("")

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        const body = JSON.stringify({
            name,
            adjectives: adjectivesString.split(",").map(adj => adj.trim())
        })

        await fetch("https://lezard-go-not.vercel.app/api/v1/argonauts", {
            method: "POST",
            body
        })

        mutate("https://lezard-go-not.vercel.app/api/v1/argonauts")
    }
    return (
        <form className={`flex flex-col items-center gap-4 my-6`} onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Hugo"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            <Input
                type="text"
                placeholder="Futur alternant, motivé"
                value={adjectivesString}
                onChange={(e) => setAdjectivesString(e.target.value)} />
            <Button type="submit">Nouveau</Button>
        </form>
    )
}

export default ArgonautCreator