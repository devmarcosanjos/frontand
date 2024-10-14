// const TaskItem = ({ task }) => {
//     return (
//         <>
//             <h1>{task.id}</h1>
//             <h1>{task.description}</h1>
//             <p>{task.isConplet ? "completa" : "a fazer"}</p>
//         </>
//     );
// };

// export default TaskItem;

import React from "react";

class TaskItem extends React.Component {
    render() {
        const { task } = this.props;

        return (
            <>
                <h1>{task.description}</h1>
                <p>{task.isConplet ? "Feita" : "A Fazer"}</p>
            </>
        );
    }
}

export default TaskItem;
