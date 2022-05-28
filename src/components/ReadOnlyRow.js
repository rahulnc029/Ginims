import React from 'react'

function ReadOnlyRow({ task, handleEditClick, handleDeleteClick }) {
    return (
        <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.taskName}</td>
            <td>{task.startDate}</td>
            <td>{task.endDate}</td>
            <td>{task.priority}</td>
            <td>{task.status}</td>
            <td>
                <button type='button'
                    onClick={(e) => handleEditClick(e, task)}>Edit
                </button>
                <button type='button' onClick={() => handleDeleteClick(task.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow;