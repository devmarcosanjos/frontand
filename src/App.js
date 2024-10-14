import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
    const [task, setTask] = useState([
        {
            id: 1,
            description: "Estudar NEXT",
            isConplet: false,
        },
        {
            id: 2,
            description: "Escrever artigo",
            isConplet: true,
        },
    ]);

    return (
        <>
            {task.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
}

export default App;
