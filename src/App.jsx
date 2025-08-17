import { useState } from "react";
import Head from "./head";
import InputValue from "./inputValue";
import AddElement from "./addElement";
import { ToastContainer, toast, Bounce } from 'react-toastify';

function App() {
  let [task, newTask] = useState("");
  let [viewTask, updateViewTask] = useState([]);

  const addInput = (event) => {
    newTask(event.target.value);
  }

  const addElement = () => {
    if (task.trim() !== "") {
      updateViewTask([...viewTask, { text: task, done: false }]);
      newTask("");
      addNotification();
    }
  };

  const toggleItem = (idx) => {
    const updated = viewTask.map((item, index) => (
      index === idx ? { ...item, done: !item.done } : item
    ))
    updateViewTask(updated);
  };

  const taskDelete = (idx) => {
    const newViewTask = viewTask.filter((_, index) => index !== idx);
    updateViewTask(newViewTask);
  }

  const addNotification = () => {
    toast.success('The task has been successfully added!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  const doneNotification = () => {
    toast.info('The work has been completed', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  const deleteNotification = () => {
    toast.error('The task has been completely deleted', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  return (
    <div className="flex items-center justify-center h-dvh w-full">
      <div className="flex flex-col items-center justify-center bg-black p-10 rounded-2xl w-md">
        <Head></Head>
        <InputValue addInput={addInput} addElementClick={addElement} task={task}></InputValue>
        <AddElement viewTask={viewTask} taskDelete={taskDelete} toggleItem={toggleItem} doneNotification={doneNotification} deleteNotification={deleteNotification}></AddElement>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App;
