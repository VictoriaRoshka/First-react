const Element = (props) => {
    const {element, deleteElement, index, checkGoods} = props
    return(
    <div className="flex justify-around border-b-4 py-4 ">
        <div className="flex gap-4">
        <p>{index + 1}.</p>
        <p>{element.name}</p>
        </div>
        <div className="flex gap-4">
            {element.isAdded === true ? "Куплено" : <button className="hover:underline cursor-pointer" onClick={() => checkGoods(element.id)}>Добавить</button>}
            
            <button className="hover:underline cursor-pointer" onClick={() => deleteElement(element.id)}>Удалить</button>
        </div>
    </div>
        
    )
}
export default Element