import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {Pagination} from "../../components/Pagination";
import  {columnsObj} from './columnsObj'
import FormEmployees from "../../components/FormEmployees";
import Table from '../../components/Table';
import {
    getEmployeesAction,
    deleteEmployeeAction,
    createEmployeeAction,
    updateEmployeeAction,
    getAllEmployeesAction,
} from "../../redux/actions/employeesAction";

import './EmployeesStyle.css'


function Employees() {
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const [status, setStatus] = useState(false);
    const [formData, setFormData] = useState({name: "",surname: "",email: "",position:""});
    const [id, setId] = useState(null);
    const [createUpdate,setCreateUpdate] =  useState(false);
    useEffect(() => {
        dispatch(getEmployeesAction(1));
    }, []);

    useEffect(() => {
        dispatch(getAllEmployeesAction());
    }, );

    const deleteEmployee = (id) => {
        dispatch(getEmployeesAction(1))
        dispatch(deleteEmployeeAction(id));
    };

    const openForm = () => {
        setStatus(prev => !prev);
    };

    const addEmployee = (event) => {
        event.preventDefault();
        dispatch(createEmployeeAction(formData));
        setStatus(prev => !prev);
        setFormData({name: "",surname: "",email: "",position:""})
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const openFormUpdate = (employee) => {
        setStatus(!status);
        setId(employee.id);
        setCreateUpdate(true)
        setFormData({
            name: employee.name,
            surname: employee.surname,
            email: employee.email,
            position: employee.position,
        });
    };

    const updateEmployee = (e) => {
        e.preventDefault()
        dispatch(updateEmployeeAction(id, formData));
        setStatus(prev => !prev);
        setFormData({name: "",surname: "",email: "",position:""})
    };

    const  handleActivePage = (page) => {
        dispatch(getEmployeesAction(page));
    };

    return (
        <div className="container">
            <button className="button button5" onClick={openForm}>Add Employee</button>
            {status && <div className='form-container'>
                <FormEmployees handleChange={handleChange}  createUpdate={createUpdate} addEmployee={addEmployee} updateEmployee={updateEmployee}formData={formData}/>
            </div>}
            <Table
                columnsObj={columnsObj}
                data={data.employees.data}
                deleteItem={deleteEmployee}
                openFormUpdate={openFormUpdate}
            />
            <Pagination   handleActivePage={handleActivePage} paginationlength={data.employees.paginationlength}/>
        </div>
    );
};

export default Employees;
