import Discover from "../pages/discover";
import Mine from "../pages/mine";
import Friends from "../pages/friends";

const routes = [
    {
        path: '/',
        exact: true,
        component: Discover
    },
    {
        path: '/mine',
        exact: true,
        component: Mine
    },
    {
        path: '/friends',
        exact: true,
        component: Friends
    }
];

export default routes;