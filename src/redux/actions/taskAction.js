import {DATA} from "../../data/data";
import {
    createTasks,
    getTasks,
    getAllTasks,
    deleteTasks,
    updateTask,
} from "../Features/tasksSlice";



export const getTasksAction = (page) => async (dispatch) => {
    try {
        const data = await DATA.tasks.getTasks(page);
        if (data.data.length > 0) {
            dispatch(getTasks(data.data));
        }
    } catch (e) {
        console.log(e)
    }
};

export const createTaskAction = (data) => async (dispatch) => {
    try {
        console.log(data)
        await DATA.tasks.createTask(data);
        dispatch(getTasksAction());
        dispatch(createTasks(data));
    } catch (e) {
        console.log(e)
    }
};

export const getAllTasksAction = () => async (dispatch) => {
    try {
        const data = await DATA.tasks.getTasksAll();
        if (data.data.length > 0) {
            dispatch(getAllTasks(data.data));
        }
    } catch (e) {
        console.log(e)
    }
};

export const deleteTaskAction = (id) => async (dispatch) => {
    try {
        await DATA.tasks.deleteTask(id);
        dispatch(deleteTasks({id}));
    } catch (e) {
        console.log(e)
    }
};

export const updateTaskAction = (id, data) => async (dispatch) => {
    try {
        const res = await DATA.tasks.updateTask(id, data);
        dispatch(updateTask(res.data));
    } catch (e) {
        console.log(e);
    }
};
