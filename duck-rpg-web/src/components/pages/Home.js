function Home() {
    return(
        <div className="min-h-screen bg-cor-bg p-4 flex flex-wrap">
            <div className="text-4xl pt-12 pl-8 w-1/2">
                <p className="pb-9">DuckRPG é uma plataforma dedicada a melhorar a experiência em mesas de RPG</p>
                <button className="text-gray-200 hover:text-orange-400 bg-cor-barra hover:bg-cor-barra-clara h-14 w-80 rounded-xl">Registre-se agora</button>
            </div>
            <div className='text-4xl pt-12 pr-7 w-1/2'>
                <p>"Imagens da aplicação aqui"</p>
            </div>
        </div>
    )
}

export default Home;
