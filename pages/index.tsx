import {GetServerSideProps, NextPage} from "next"
import {FormEventHandler, useState} from "react";
import useSWR, {useSWRConfig} from 'swr'
import {ArgonautData} from "types/globals";

const fetcher = (url: string) => fetch(url).then(r => r.json())

interface Props {
    argonauts: ArgonautData[]
}

const Home: NextPage<Props> = ({ argonauts }) => {
    const { mutate } = useSWRConfig()
    const { data, error } = useSWR<ArgonautData[]>("/api/v1/argonauts", fetcher)
    const [name, setName] = useState<string>("")
    const [adjectivesString, setAdjectivesString] = useState<string>("")

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const body = JSON.stringify({
            name,
            adjectives: adjectivesString.split(",").map(adj => adj.trim())
        })

        fetch("/api/v1/argonauts", {
            method: "POST",
            body
        })

        mutate("/api/v1/argonauts")
    }
  return (
    <main>
      <ul>
          {error && <li>Erreur pendant le chargement...</li>}
          {(!error && !data && <li>Chargement...</li>) || data?.map(arg => <li key={arg._id}>{arg.name}</li>)}

      </ul>

      <form onSubmit={handleSubmit}>
          <input type="text" placeholder={"Hugo"} value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder={"Futur alternant, motivé"} value={adjectivesString} onChange={(e) => setAdjectivesString(e.target.value)} />
          <button type="submit">Nouveau</button>
      </form>


    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const argonauts = await fetch("http://localhost:3000/api/v1/argonauts").then(r => r.json())
  return {
    props: {
      argonauts
    }
  }
}

export default Home
