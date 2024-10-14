const TaskItem = ({ task }) => {
    return (
        <>
            <h1>{task.id}</h1>
            <h1>{task.description}</h1>
            <p>{task.isConplet ? "completa" : "a fazer"}</p>
        </>
    );
};

export default TaskItem;
