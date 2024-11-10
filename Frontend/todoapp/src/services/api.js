import axios from 'axios';

const API = axios.create({
    baseURL: 'https://todo-app-jc.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const logout = async () => {
    try {
        const response = await API.post('/auth/logout');
        return response.data;
    } catch (err) {
        throw new Error('Logout failed');
    }
};


export const fetchTodos = () => API.get('/tasks');
export const addTodo = (todoData) => API.post('/tasks', todoData);
export const editTodo = (id, todoData) => API.put(`/tasks/${id}`, todoData);
export const deleteTodo = (id) => API.delete(`/tasks/${id}`);
export const searchTodo = (taskName) => API.get(`/tasks/find?taskName=${taskName}`);

export default API;
