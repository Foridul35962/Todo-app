const inputValue = ({addInput, addElementClick, task}) => {
    const handleOnKeyDown = (event)=>{
        if(event.key ==='Enter'){
            addElementClick();
        }
    }
    return (
        <div className="w-full">
            <div className="relative flex justify-center items-center">
                <input type="text" value={task} placeholder="Enter your task" className=" w-full h-12 border-3 border-gray-500 my-3.5 rounded-full text-white text-xl pl-4 pr-18" onChange={addInput} onKeyDown={handleOnKeyDown} />
                <button className="absolute right-0 text-black bg-cyan-300 h-12 w-15 rounded-full text-lg cursor-pointer active:bg-cyan-600 transition-all transform duration-300 hover:scale-105" onClick={addElementClick}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default inputValue;