function Button(props){
    const {title} = props
    return(
        <button className="bg-blue-500 mx-10 rounded-lg text-xl text-white px-4 py-2">
            {title}
        </button>
    )
}

export default Button