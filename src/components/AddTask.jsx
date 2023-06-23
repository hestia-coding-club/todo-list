import { useState } from "react";
function AddTask({setTasks}) {
    const [newTask, setNewTask] = useState('')
    const createId = () => {
        return Math.random().toString(16).substr(2,8);
    }
    function handelNewTask(e){
        
        setNewTask ({
            id: createId(),
            text: e.target.value,
            isFinished: false
        })
    }
    function handleSetTask(){
        setTasks(tasks =>[newTask, ...tasks])
    }
  return (
    <div>
        <input type="text" onChange ={handelNewTask}/>
    <button onClick={handleSetTask}>Add task</button>
    </div>
  );
}

export default AddTask;
