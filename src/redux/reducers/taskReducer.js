import { createSlice } from "@reduxjs/toolkit";

// Initial State
const INITIAL_STATE = {
  tasks: [
    {id:new Date().getTime(),title:"Fix CSS issue",description:"Resolve UI bugs in the mobile version of the app.",dueDate:"2024-12-07",status:"Pending"},
    {id:150367,title:"Finish readme",description:"Complete the readme file of busy-buy project",dueDate:"2024-12-01",status:"Completed"},
    {id:189752,title:"Design Wireframe",description:"Design wireframe for the next dashboard",dueDate:"2024-12-05",status:"Pending"},
    {id:1256789,title:"Write a blog",description:"Write a blog on react-hooks",dueDate:"2024-12-07",status:"Pending"},
    
  ]
};

// Task slice
const taskSlice = createSlice({
  name: 'task',
  initialState: INITIAL_STATE,
  reducers: {
    // Add action
    add: (state, action) => {
      state.tasks.push({
        id: new Date().getTime(),
        title: action.payload.title,
        description: action.payload.description,
        dueDate: action.payload.dueDate,
        status: 'Pending' // default status when a task is added
      });
    },
    // Remove action
    remove: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    // Toggle Status action
    toggle: (state, action) => {
      state.tasks = state.tasks.map(task => 
        task.id === action.payload
          ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
          : task
      );
    },
    // Edit action
    edit: (state, action) => {
      const { id, updatedTask } = action.payload;
      state.tasks = state.tasks.map(task =>
        task.id === id
          ? { ...task, ...updatedTask }
          : task
      );
    }
  }
});

// Exporting actions and reducer
export const { add, remove, toggle, edit } = taskSlice.actions;
export const taskSelector=(state)=>state.task.tasks;
export default taskSlice.reducer;