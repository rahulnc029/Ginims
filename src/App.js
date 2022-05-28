import React, { useState, Fragment } from 'react';
import './App.css';
import EditableRow from './components/EditableRow';
import ReadOnlyRow from './components/ReadOnlyRow';
import Search from './components/Search';
import DB from './db.json';





function App() {

  const [tasks, setTasks] = useState(DB);
  const [add, setAdd] = useState({
    id: "",
    taskName: "",
    startDate: "",
    endDate: "",
    priority: "",
    status: "",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    taskName: "",
    startDate: "",
    endDate: "",
    priority: "",
    status: "",
  })

  const [editTask, setEditTask] = useState(null);

  const handle = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newAdd = { ...add };
    newAdd[fieldName] = fieldValue;
    setAdd(newAdd);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const submit = (e) => {
    e.preventDefault();

    const newTask = {
      id: add.id,
      taskName: add.taskName,
      startDate: add.startDate,
      endDate: add.endDate,
      priority: add.priority,
      status: add.status
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedTask = {
      id: editTask,
      taskName: editFormData.taskName,
      startDate: editFormData.startDate,
      endDate: editFormData.endDate,
      priority: editFormData.priority,
      status: editFormData.status
    }

    const newTasks = [...tasks];

    const index = tasks.findIndex((task) => task.id === editTask);

    newTasks[index] = editedTask;

    setTasks(newTasks);
    setEditTask(null)
  }

  const handleEditClick = (e, task) => {
    e.preventDefault();
    setEditTask(task.id);

    const formValues = {
      id: task.id,
      taskName: task.taskName,
      startDate: task.startDate,
      endDate: task.endDate,
      priority: task.priority,
      status: task.status
    }
    setEditFormData(formValues);
  }

  const handleCancelClick = () => {
    setEditTask(null);
  }

  const handleDeleteClick = (contactId) => {
    const newTasks = [...tasks];

    const index = tasks.findIndex((task) => task.id === contactId);

    newTasks.splice(index, 1);
    alert(`do you really want to delete this task ?`)
    setTasks(newTasks);
  }

  return (
    <div className="App-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Fragment>
                {editTask === task.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick} />
                ) : (
                  <ReadOnlyRow
                    task={task}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick} />
                )}
              </Fragment>

            ))}

          </tbody>

        </table>
      </form>

      <center>
        <h2>Add here</h2>
        <form action="#" onSubmit={submit} className="addForm">
          <input type="number"
            name='id'
            onChange={handle} />
          <input type="text"
            name='taskName'
            required='required'
            placeholder='Enter your task'
            onChange={handle} />
          <input type="datetime-local"
            name='startDate'
            placeholder='starting time'
            required='required'
            onChange={handle} />
          <input type="datetime-local"
            name='endDate'
            placeholder='endinging time'
            required='required'
            onChange={handle} />
          <select name="priority" onChange={handle}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
          <input type="text"
            name='status'
            placeholder='enter status'
            required='required'
            onChange={handle} />
          <br /><br />
          <button type='submit'>Add</button>
        </form>
      </center>
      <center>
        <Search />
      </center>
      <div className="pnb">
        <center>
          <button className="prev">Previous</button>
          &nbsp;&nbsp;
          <button className="next">Next</button>
        </center>
      </div>
    </div>
  );
}

export default App;
