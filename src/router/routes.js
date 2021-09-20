import { lazy } from "react";

const ROUTES = [
    {
        path: ['/', '/home'],
        key: 'HOME',
        exact: true, 
        component: lazy(() => import('../pages/Home')),
        auth: false
    }
];

export default ROUTES;