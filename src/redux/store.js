import { configureStore } from '@reduxjs/toolkit';

import employeesReducer from './Features/employeesSlice';
import tasksSlice from "./Features/tasksSlice";

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
        tasks: tasksSlice,
    },
});
