import { useEffect } from "react";

const TaskItem = ({ task }) => {
    useEffect(() => {
        console.log("Component was mounting...");

        return () => {
            console.log("I will unmmount");
        };
    }, []);

    return (
        <>
            <h1>{task.id}</h1>
            <h1>{task.description}</h1>
            <p>{task.isConplet ? "completa" : "a fazer"}</p>
        </>
    );
};

export default TaskItem;

// import React from "react";

// class TaskItem extends React.Component {
//     componentDidMount() {
//         console.log("Component was mounting...");
//     }

//     componentWillUnmount() {
//         console.log("I will unmmount");
//     }

//     render() {
//         const { task } = this.props;

//         return (
//             <>
//                 <h1>{task.description}</h1>
//                 <p>{task.isConplet ? "Feita" : "A Fazer"}</p>
//             </>
//         );
//     }
// }

// export default TaskItem;
