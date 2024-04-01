// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions/taskActions';

function TaskInput() {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim() !== '') {
            dispatch(addTask(taskText));
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskText} onChange={handleInputChange} placeholder="Add a new task" />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskInput;
