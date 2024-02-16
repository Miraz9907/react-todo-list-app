import "./TodoList.css"

const TodoList = () => {
   
    return (
        <div>
            <h1 className="title">My Awesome ToDo List</h1>
            <div className="container">
                <div className="card">
                    <label>
                        Task: 
                        <input type="text" />
                    </label>
                    <label>
                        Priority:
                        <select>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </label>
                    <label>
                        Status:
                        <select>
                            <option value="incomplete">Incompleted</option>
                            <option value="complete">Completed</option>
                        </select>
                    </label>
                    <div className="add-btn">
                    <button >Add Task</button>
                    </div>
                </div>

                <div className="card">


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