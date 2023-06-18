import axios from './axios';



export const getEmployeesAll = async () => axios({
  method: 'GET',
  url: 'employees',
});

export const getEmployees = async (page) => axios({
  method: 'GET',
  url: `employees?_page=${page}&_limit=5`,
});

export const  deleteEmployee = (id) => {
  return (axios({
    method: 'DELETE',
    url: `employees/${id}`,
  }));
};

export const  createEmployee = (data) => {
  return (axios({
    method: 'POST',
    url: 'employees',
    data,
  }));
};

export const updateEmployee = async (id, data) => axios({
  method: 'PUT',
  url: `employees/${id}`,
  data,
});





