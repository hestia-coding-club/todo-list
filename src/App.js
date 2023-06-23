import React, {useState} from "react";
import AddTask from "./components/AddTask";


function App()
{
    const [ tasks, setTasks ] = useState([]);
    const [ inputText, setInputText ] = useState("");
    const [ showError, setShowError ] = useState(false);


  const toogleTask = (e, id) => 
  {
    const currentTask = tasks.filter(task =>task.id === id)[0];
    const otherTasks = tasks.filter(task => tasks.id !== id);


    currentTask.isFinished = !currentTask.isFinished;
    setTasks([currentTask, ...otherTasks]);
  }

 return <div>
  <AddTask setTasks={setTasks}/>
  <ul>{tasks.map(task => <li key={task.id}>{task.text}</li> )}</ul>

 </div>
  
 
}











export default App;
