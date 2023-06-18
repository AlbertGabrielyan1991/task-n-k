import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    data:[],
    paginationlength:0,
    alldata:[]
}
export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        getemployees:  (state,action) => {
            state.data = action.payload;
        },
        getemployeesall:  (state,action) => {
            state.paginationlength = action.payload.length;
            state.alldata = action.payload;
        },
        deleteemployees: (state,action) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id);
        },
        createemployee: (state, action) => {
            state.data = [...state.data];
        },
        updateEmployee: (state, action) => {
            state.data = state.data.map(employee => employee.id === action.payload.id ? action.payload : employee )
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    getemployees,
    deleteemployees,
    createemployee,
    updateEmployee,
    getemployeesall,
} = employeesSlice.actions;

export default employeesSlice.reducer;
