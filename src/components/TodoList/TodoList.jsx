import { useState } from "react";
import "./TodoList.css";
import { useEffect } from "react";

const priorities = {
    low: "green",
    medium: "orange",
    high: "red"
};

const TodoList = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [priority, setPriority] = useState('low');
    const [status, setStatus] = useState('incomplete');

    useEffect(()=>{
        //get tasks from localStorage
        const storedTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
        setTasks(storedTasks);
    },[]);

    //save tasks to LS
    const savaTasksToLocalStorage = (updatedTasks) =>{
        localStorage.setItem("todoTasks", JSON.stringify(updatedTasks));
    }

    const handleInputChange = (event) =>{
        setInput(event.target.value);
    };

    const handlePriorityChange = (event) =>{
        setPriority(event.target.value);
    };

    const handleStatusChange = (event) =>{
        setStatus(event.target.value);
    };

    const handleAddTask =() =>{
        if(input.trim() !== ''){
            const newTasks = {
                id: new Date().getTime(),
                text: input,
                priority,
                status
            };
            // console.log(newTasks)

            //tasks add to state
            const updatedTasks = [...tasks, newTasks];
            setTasks(updatedTasks)

            //value pass to localstorage
            savaTasksToLocalStorage(updatedTasks);

            //after add task noe clear input fiels
            setInput('');
            setPriority('low');
            setStatus('incomplete')
        }
        else{
            alert('Please Add your Task before!!')
        }
    };

    const handleEditTask = (id) =>{
        const updatedText = prompt('Edit the Task: ', tasks.find(task => task.id === id)?.text);

        if(updatedText !== null){
            const updatedTasks = tasks.map(task => 
                task.id === id? {...task, text: updatedText}:task);

                //update state
                setTasks(updatedTasks);
                //save to localStorage
                savaTasksToLocalStorage(updatedTasks);
        }
    };

    
   
    return (
        <div>
            <h1 className="title">My Awesome ToDo List</h1>
            <div className="container">
                <div className="card">
                    <label>
                        Task: 
                        <input type="text" value={input} onChange={handleInputChange} />
                    </label>
                    <label>
                        Priority:
                        <select value={priority} onChange={handlePriorityChange}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </label>
                    <label>
                        Status:
                        <select value={status} onChange={handleStatusChange}>
                            <option value="incomplete">Incompleted</option>
                            <option value="complete">Completed</option>
                        </select>
                    </label>
                    <div className="add-btn">
                    <button onClick={handleAddTask}>Add Task</button>
                    </div>
                </div>

                <div className="card">

        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ color: priorities[task.priority], textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>
                {task.text} 
                
                <button onClick={() => handleEditTask(task.id)}>Edit</button>
                
            </li>
            ))}
    </ul>


                <div>
                    <p>Total Tasks: {}</p>
                    <p>Completed Tasks: {}</p>
                    <p>Incompleted Tasks: {}</p>
                </div>
                </div>

            </div>
        </div>
    );
};

export default TodoList;