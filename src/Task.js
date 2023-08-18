function Task({ task, index, handleDelete, handleUpdate }) {
    return (
        <div key={index}>
            <span>{task.text}</span>
            <input onChange={(event) => handleUpdate(index, event.target.checked)} type='checkbox' checked={task.checked} />
            <small onClick={() => handleDelete(index)}>Delete</small>
        </div>
    )
}

export default Task