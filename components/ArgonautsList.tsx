import {NextPage} from "next";
import useSWR, {useSWRConfig} from "swr";
import {ArgonautData} from "../types/globals";
import Chip from "./Chip";
import {MouseEventHandler} from "react";

const fetcher = (url: string) => fetch(url).then(r => r.json())



const ArgonautsList: NextPage = () => {
    const { mutate } = useSWRConfig()
    const { data, error } = useSWR<ArgonautData[]>("/api/v1/argonauts", fetcher)
    const selectedCount = data?.filter(arg => arg.selected).length

    const handleChipClick = async (_id: string) => {
        await fetch(`/api/v1/argonauts/${_id}`, {method: "PATCH"})
        mutate('/api/v1/argonauts')
    }

    const handleCrossClick = async (_id: string) => {
        await fetch(`/api/v1/argonauts/${_id}`, {method: "DELETE"})
        mutate('/api/v1/argonauts')
    }

    return (
        <>

            <ul className={`grid grid-cols-3 place-items-center`}>
                <h3 className={`col-span-3 font-semibold text-xl mb-4`}>{selectedCount} / {data?.length} argonautes sélectionnés</h3>
                {error && <li>Erreur pendant le chargement...</li>}
                {(!error && !data && <li>Chargement...</li>) || data?.map(arg => <li key={arg._id}><Chip onCrossClick={e => handleCrossClick(arg._id)} onClick={e => handleChipClick(arg._id)} selected={arg.selected}>{arg.name}</Chip></li>)}
            </ul>
        </>
    )
}

export default ArgonautsList