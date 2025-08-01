const addElement = ({ viewTask }) => {
    return (
        <div className="w-full">
            {
                viewTask.map((event, idx)=>(
                    <div key={idx} className="bg-gray-800 flex justify-between p-2 py-3 items-center my-2 w-full rounded-2xl text-white">
                        <div className="flex items-center justify-center gap-3 text-cyan-400">
                            <i className="fa-solid fa-circle-check"></i>
                            <p className="text-xl text-white">{event}</p>
                        </div>
                        <i className="fa-solid fa-trash mr-2"></i>
                    </div>
                ))
            }
        </div>
    )
}

export default addElement;