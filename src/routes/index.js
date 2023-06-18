import About from '../pages/About';
import Employees from '../pages/Employees';
import Tasks from "../pages/Tasks";

const paths = [
    {
        path: '/',
        components: About,
        key: 1
    },
    {
        path: 'employees',
        component: Employees,
        key: 2,
    },
    {
        path: 'tasks',
        component: Tasks,
        key: 3,
    },
];

export default paths;
