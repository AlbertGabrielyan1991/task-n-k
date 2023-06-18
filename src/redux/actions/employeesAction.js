import {DATA} from "../../data/data";
import {
    getemployees,
    deleteemployees,
    createemployee,
    updateEmployee,
    getemployeesall,
} from "../Features/employeesSlice";


export const getAllEmployeesAction = () => async (dispatch) => {
    try {
        const data = await DATA.employees.getEmployeesAll();
        if (data.data.length > 0) {
            dispatch(getemployeesall(data.data));
        }
    } catch (e) {
        console.log(e)
    }
};

export const getEmployeesAction = (page) => async (dispatch) => {
    try {
        const data = await DATA.employees.getEmployees(page);
        if (data.data.length > 0) {
            dispatch(getemployees(data.data));
        }
    } catch (e) {
        console.log(e)
    }
};

export const deleteEmployeeAction = (id) => async (dispatch) => {
    try {
        await DATA.employees.deleteEmployee(id);
        dispatch(deleteemployees({id}));
    } catch (e) {
        console.log(e)
    }
};

export const createEmployeeAction = (data) => async (dispatch) => {
    try {
        await DATA.employees.createEmployee(data);
        dispatch(getEmployeesAction());
        dispatch(createemployee(data));
    } catch (e) {
        console.log(e)
    }
};

export const updateEmployeeAction = (id, data) => async (dispatch) => {
    try {
        const res = await DATA.employees.updateEmployee(id, data);
        dispatch(updateEmployee(res.data));
    } catch (e) {
        console.log(e);
    }
};
