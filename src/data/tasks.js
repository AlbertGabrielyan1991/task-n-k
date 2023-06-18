import axios from './axios';


export const createTask = async (data) => axios({
  method: 'POST',
  url: 'tasks',
  data,
});

export const getTasks = async (page) => axios({
  method: 'GET',
  url: `tasks?_page=${page}&_limit=5`,
});

export const getTasksAll = async () => axios({
  method: 'GET',
  url: 'tasks',
});

export const deleteTask = async (id) => axios({
  method: 'delete',
  url: `tasks/${id}`,
});

export const updateTask = async (id, data) => axios({
  method: 'put',
  url:`tasks/${id}`,
  data,
});


