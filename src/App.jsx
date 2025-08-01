import { useState } from "react";
import Head from "./head";
import InputValue from "./inputValue";
import AddElement from "./addElement";
function App() {
  let [task, newTask] = useState("");
  let [viewTask, updateViewTask] = useState([]);

  const addInput = (event) =>{
    newTask(event.target.value);
  }

  const addElement = () =>{
    if(task.trim()!==""){
      updateViewTask([...viewTask,task]);
      newTask("");
    }
  }

  return (
    <div className="flex items-center justify-center h-dvh w-full">
      <div className="flex flex-col items-center justify-center bg-black p-10 rounded-2xl w-md">
        <Head></Head>
        <InputValue addInput={addInput} addElementClick={addElement} task={task}></InputValue>
        <AddElement viewTask={viewTask}></AddElement>
      </div>
    </div>
  )
}

export default App;
