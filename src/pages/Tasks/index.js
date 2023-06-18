import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    createTaskAction,
    getAllTasksAction,
    getTasksAction,
    deleteTaskAction,
    updateTaskAction
} from '../../redux/actions/taskAction';
import FormTasks from "../../components/FormTasks";
import Table from "../../components/Table";
import {Pagination} from "../../components/Pagination";

import {columnsObj} from "./columnsObj";
import './TasksStyle.css'

function Tasks() {
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const [status, setStatus] = useState(false);
    const [id, setId] = useState(null);
    const [ formData, setFormData] = useState({name: '', description: '',employeeId: '', startDate: '', endDate: ''});
    const [createUpdate,setCreateUpdate] =  useState(false)
    const openForm = () => {
        setStatus(prev => !prev);
    };

    useEffect(() => {
        dispatch(getTasksAction());
    }, []);

    useEffect(() => {
        dispatch(getAllTasksAction());
    }, );

    const handleChange = (event) => {
        console.log(event.target.value)
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const addTask = (event) => {
        event.preventDefault();
        dispatch(createTaskAction(formData))
        setStatus(prev => !prev);
        setFormData({name: '', description: '',employeeId: '', startDate: '', endDate: ''})
    };

    const deleteTask = (id) => {
        dispatch(deleteTaskAction(id));
    };

    const openFormUpdate = (tasks) => {
        console.log()
        setStatus(!status);
        setId(tasks.id);
        setCreateUpdate(true)
        setFormData({
            name: tasks.name,
            description: tasks.description,
            employeeId: tasks.employeeId,
            startDate: tasks.startDate,
            endDate: tasks.endDate,

        });
    };

    const updateEmployee = (e) => {
        e.preventDefault()
        dispatch(updateTaskAction(id, formData));
        setStatus(prev => !prev);
        setFormData({name: "",updateTask: "",employeeId: "",startDate:"",endDate:''})
    };

    const  handleActivePage = (page) => {
        dispatch(getTasksAction(page));
    };

    return (
        <div className="container">
            <button className="button button5" onClick={openForm}>Add Employee</button>
            {status &&  <div className='form-container'><FormTasks createUpdate={createUpdate} addTask={addTask} updateEmployee={updateEmployee} alldata={data.employees.alldata} handleChange={handleChange} formData={formData} employees={data.employees.data}/> </div>}
            <Table
                columnsObj={columnsObj}
                data={data.tasks.tasks}
                deleteItem={deleteTask}
                openFormUpdate={openFormUpdate}
            />
            <Pagination   handleActivePage={handleActivePage} paginationlength={data.tasks.paginationlength}/>
        </div>
    );
};

export default Tasks;
