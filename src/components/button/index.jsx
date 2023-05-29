function Button(props){
    const {title, onClick} = props
    return(
        <button className="bg-blue-500 mx-10 rounded-lg text-xl text-white px-4 py-2" onClick={onClick}>
            {title}
        </button>
    )
}

export default Button