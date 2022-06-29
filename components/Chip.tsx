import {NextPage} from "next";
import {MouseEventHandler, ReactNode} from "react";
import Tooltip from "rc-tooltip";

interface Props {
    children: ReactNode,
    selected: boolean,
    onClick: MouseEventHandler<HTMLDivElement>,
    onCrossClick: MouseEventHandler<HTMLDivElement>,
    tooltip: ReactNode
}

const Chip: NextPage<Props> = ({children, selected, onClick, onCrossClick, tooltip}) => {
    return (
        <Tooltip
            overlay={tooltip ? tooltip : <i>Pas d'adjectif</i>}
            placement={"top"}
        >
            <div
                onClick={onClick}
                className={`gap-2 cursor-pointer p-2 w-fit min-w-[8rem] m-2 rounded-3xl flex justify-between items-center shadow-xl text-white font-semibold 
                       ${selected ? 'bg-emerald-400' : 'bg-red-400'}`}
            >
                {children}
                <div
                    onClick={onCrossClick}
                    className={`hover:scale-125 bg-opacity-25 bg-neutral-800 aspect-square w-6 grid place-items-center rounded-3xl cursor-pointer transition-transform duration-200 ease-out`}>
                    X
                </div>
            </div>
        </Tooltip>

    )
}

export default Chip