const Footer = () => {
    return (
        <footer className={`bg-violet-700 h-80 grid grid-cols-2 place-items-center`}>
            <div className={`flex flex-col items-center text-center text-neutral-300 gap-2`}>
                <h2 className={`text-2xl`}>Lézard Go Not</h2>
                <p>Réalisé par Hugo Martin <br/>dans le cadre des sélection <a href={"https://www.wildcodeschool.com/"}>WildCodeSchool</a></p>
            </div>
            
        </footer>
    )
}
export default Footer