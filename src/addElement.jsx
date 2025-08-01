const addElement = ({ viewTask, taskDelete, toggleItem }) => {
    return (
        <div className="w-full">
            {
                viewTask.map((item, idx)=>(
                    <div key={idx} className="bg-gray-800 flex justify-between p-2 py-3 items-center my-2 w-full rounded-2xl text-white">
                        <div className="flex items-center justify-center gap-3 text-cyan-400 overflow-hidden cursor-pointer" onClick={()=>toggleItem(idx)}>
                            <i className={`${item.done? "fa-solid fa-circle-check": "fa-regular fa-circle"}`}></i>
                            <p className={`${item.done? 'line-through text-gray-400': 'text-white'} text-xl`}>{item.text}</p>
                        </div>
                        <i className="fa-solid fa-trash mr-2 cursor-pointer" onClick={()=>taskDelete(idx)}></i>
                    </div>
                ))
            }
        </div>
    )
}
export default addElement;