import React from "react";
import TaskItem from "./components/TaskItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleStateChenge = this.handleStateChenge.bind(this);
        this.state = {
            task: [
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
            ],
        };
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log("component was updated");
    }

    handleStateChenge() {
        this.setState({
            task: [],
        });
    }

    render() {
        return (
            <>
                {this.state.task.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}

                <button onClick={this.handleStateChenge}>Limpar task</button>
            </>
        );
    }
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import TaskItem from "./components/TaskItem";

// function App() {
// const [task, setTask] = useState([
//     {
//         id: 1,
//         description: "Estudar NEXT",
//         isConplet: false,
//     },
//     {
//         id: 2,
//         description: "Escrever artigo",
//         isConplet: true,
//     },
// ]);

//     return (
//         <>
//             {task.map((task) => (
//                 <TaskItem key={task.id} task={task} />
//             ))}
//         </>
//     );
// }

// export default App;
