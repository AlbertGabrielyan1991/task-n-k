import React from "react";
import './FormEmployees.css'

function FormEmployees({ handleChange , formData , addEmployee , updateEmployee , createUpdate}) {
    return (
        <div className="form">
            <form>
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your Employee!</div>
                <div className="input-container ic1">
                    <input id="firstname" onChange={handleChange} value={formData.name} name="name"  className="input" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">First name</label>
                </div>
                <div className="input-container ic2">
                    <input id="surname" onChange={handleChange} value={formData.surname} name="surname" className="input" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">Surname</label>
                </div>
                <div className="input-container ic2">
                    <input id="email" onChange={handleChange} value={formData.email} name="email"  className="input" type="text" placeholder=" "/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="lastname" className="placeholder">Email</label>
                </div>
                <div className="input-container ic2">
                    <input id="position" onChange={handleChange} value={formData.position} name="position" className="input" type="text" placeholder=" "/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="lastname" className="placeholder">Position</label>
                </div>
                {!createUpdate
                    ? <button onClick={addEmployee} type="text" className="submit">Create</button>
                    : <button  onClick={updateEmployee} type="text" className="submit">Update</button>
                }
            </form>
        </div>
    );
};


export default FormEmployees
