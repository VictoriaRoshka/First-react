const Element = (props) => {
    const {element, deleteElement, index, checkGoods} = props
    return(
    <div className="flex justify-around border-b-4 py-4 ">
        <div className="flex gap-4">
        <p>{index + 1}.</p>
        <p>{element.name}</p>
        </div>
        <div className="flex gap-4">
        <button className="hover:underline cursor-pointer" onClick={() => checkGoods(element.id)}>
            {
                element.isAdded === true ? "Куплено" : "Отметить"
            }
        </button>
            
            <button className="hover:underline cursor-pointer" onClick={() => deleteElement(element.id)}>Удалить</button>
        </div>
    </div>
        
    )
}

// {element.isAdded === true ? <img className="w-10" src="public\326568_check_circle_icon.png" alt=""/> : <img className="w-10" src="public\326565_blank_check_circle_icon.png" alt=""/>}
export default Element