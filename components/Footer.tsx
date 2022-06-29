import Image from "next/image";

const Footer = () => {
    return (
        <footer className={`bg-violet-700 h-80 grid grid-cols-2 place-items-center`}>
            <div className={`flex flex-col items-center text-center text-neutral-300 gap-2`}>
                <h2 className={`text-2xl`}>Lézard Go Not</h2>
                <p>Realisé par Hugo Martin <br/>dans le cadre des selections <a href={"https://www.wildcodeschool.com/"}>WildCodeSchool</a></p>
            </div>
            <div className={`flex gap-8 items-center justify-around`}>
                <a href={"https://github.com/Hugo-M33/lezard-go-not"}><Image alt="Project's repo" src={"/github-logo.png"} width={50} height={50}/></a>
                <a href={"https://www.wildcodeschool.com/"}><Image alt="Wild Code School" src={"/wcs-logo.png"} width={60} height={60}/></a>
            </div>
            
        </footer>
    )
}
export default Footer