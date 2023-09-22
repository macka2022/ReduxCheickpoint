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
      case 'FILTER_NOT_DONE':
        return {
          ...state,
          tasks: state.tasks.filter((task) => !task.isDone),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  