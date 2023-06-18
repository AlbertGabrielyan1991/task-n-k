import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    tasks:[],
    paginationlength:0,
    alldata:[],
}
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTasks: (state, action) => {
            state.data = [...state.data];
        },
        getTasks:  (state,action) => {
            state.tasks = action.payload;
        },
        getAllTasks:  (state,action) => {
            state.paginationlength = action.payload.length;
            state.alldata = action.payload;
        },
        deleteTasks:  (state,action) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
        },
        updateTask: (state, action) => {
            state.tasks = state.tasks.map(employee => employee.id === action.payload.id ? action.payload : employee )
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    createTasks,
    getTasks,
    getAllTasks,
    deleteTasks,
    updateTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
