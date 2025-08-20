import { useEffect, useState } from "react";
function TaskList() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/tarefas/")
            .then((res) => res.json())
            .then((data) => {
                console.log("Dados recebidos", data);
                setTasks(data);
            })
            .catch((err) => console.error(err));
    },[]);
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                       ID {task.id} - {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
