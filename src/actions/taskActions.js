// actions/taskActions.js
export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: {
        id: new Date().getTime(), // Using timestamp as a unique ID
        text,
        completed: false, // Initially, tasks are not completed
    },
});

export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: {
        id,
    },
});
export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: {
        id,
    },
});
