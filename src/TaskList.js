// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from './actions/taskActions';

function TaskList() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    <span onClick={() => handleToggleTask(task.id)}>{task.text}</span>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
