const addElement = ({ viewTask }) => {
    let isDone = false;
    const taskDone =(event) =>{
        const text = event.currentTarget.querySelector('p');
        text.classList.toggle('line-through');
        const icon = event.currentTarget.querySelector('i');
        icon.classList.toggle('fa-circle-check');
        icon.classList.toggle('fa-circle');
        icon.classList.toggle('fa-solid');
        icon.classList.toggle('fa-regular');
    }
    return (
        <div className="w-full">
            {
                viewTask.map((item, idx)=>(
                    <div key={idx} className="bg-gray-800 flex justify-between p-2 py-3 items-center my-2 w-full rounded-2xl text-white">
                        <div className="flex items-center justify-center gap-3 text-cyan-400 overflow-hidden" onClick={taskDone}>
                            <i class="fa-regular fa-circle"></i>
                            <p className="text-xl text-white">{item}</p>
                        </div>
                        <i className="fa-solid fa-trash mr-2"></i>
                    </div>
                ))
            }
        </div>
    )
}
export default addElement;