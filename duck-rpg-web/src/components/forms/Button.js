function Button({type, text}) {
    return(
        <div className="text-gray-200 text-xl text-center hover:text-orange-400 bg-cor-barra hover:bg-cor-barra-clara h-10 w-24 rounded-xl">
            <button type={type}>{text}</button>
        </div>
    )
}

export default Button;