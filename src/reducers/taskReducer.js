
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [], // Load tasks from local storage
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = { id: action.payload.id, text: action.payload.text, completed: action.payload.completed };
            const updatedTasks = [...state.tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save tasks to local storage
            return {
                ...state,
                tasks: updatedTasks,
            };
        case 'TOGGLE_TASK':
            const toggledTasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
            localStorage.setItem('tasks', JSON.stringify(toggledTasks)); // Save tasks to local storage
            return {
                ...state,
                tasks: toggledTasks,
            };
        case 'DELETE_TASK':
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload.id);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks)); // Save tasks to local storage
            return {
                ...state,
                tasks: filteredTasks,
            };
        default:
            return state;
    }
};

export default taskReducer;
