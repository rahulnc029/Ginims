import React from 'react'

function EditableRow({ editFormData, handleEditFormChange, handleCancelClick }) {
    return (
        <tr>
            <td>
                <input type="number"
                    name='id'
                    value={editFormData.id}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text"
                    name='taskName'
                    required='required'
                    placeholder='Enter your task'
                    value={editFormData.taskName}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="datetime-local"
                    name='startDate'
                    placeholder='starting time'
                    required='required'
                    value={editFormData.startDate}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="datetime-local"
                    name='endDate'
                    placeholder='endinging time'
                    required='required'
                    value={editFormData.endDate}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <select name="priority" value={editFormData.priority} onChange={handleEditFormChange}>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>
            </td>
            <td>
                <input type="text"
                    name='status'
                    required='required'
                    placeholder='Enter your status'
                    value={editFormData.taskName}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <button type='submit'>Save</button>
                <button type='button' onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRow;