import React, {useState} from "react";

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

}













export default App;
