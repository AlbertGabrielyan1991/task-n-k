import React from "react";
import './FormTasks.css'
import Employees from "../../pages/Employees";

function FormTasks({ handleChange , formData , alldata , createUpdate ,addTask ,updateEmployee}) {

    return (
        <div className="form">
            <form>
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your Tasks!</div>
                <div className="input-container ic1">
                    <input id="firstname" onChange={handleChange} value={formData.name} name="name"  className="input" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">First name</label>
                </div>
                <div className="input-container ic2">
                    <input id="description" onChange={handleChange} value={formData.description} name="description" className="input" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">description</label>
                </div>
                <div className="input-container ic2">
                    <input onChange={handleChange} value={formData.startDate} name="startDate" className="input" type="date" placeholder=" "  />
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">startDate</label>
                </div>
                <div className="input-container ic2">
                    <input onChange={handleChange} value={formData.endDate} name="endDate"  className="input" type="date"  placeholder=" "  />
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">endDate</label>
                </div>
                <div className="input-container ic2" >
                    <select  onChange={handleChange} value={formData.employeeId} name="employeeId" id="cars" className='input'>
                        {alldata.map((alldata)=>{
                           return(
                               <option value={alldata.id}>{alldata.name}</option>
                           )
                        })}
                    </select>
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">Employees</label>
                </div>
                {!createUpdate
                    ? <button onClick={addTask} type="text" className="submit">Create</button>
                    : <button  onClick={updateEmployee} type="text" className="submit">Update</button>
                }
            </form>
        </div>
    );
};


export default FormTasks
