const Element = (props) => {
    const {element, deleteElement} = props
    return(
    <div className="flex justify-around border-b-4 py-4 ">
        <div className="flex gap-4">
        <p>{element.number}</p>
        <p>{element.name}</p>
        </div>
        <div className="flex gap-4">
            <input type="checkbox"/>
            <button>Удалить</button>
        </div>
    </div>
        
    )
}
export default Element