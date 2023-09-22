// actions.js
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const editTask = (taskId, newDescription) => ({
    type: 'EDIT_TASK',
    payload: { taskId, newDescription },
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: taskId,
  });
  
  // reducers.js
  const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { ...action.payload, id: state.tasks.length + 1 }],
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.taskId
              ? { ...task, description: action.payload.newDescription }
              : task
          ),
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, isDone: !task.isDone }
              : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  