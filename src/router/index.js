import { Redirect } from "react-router";
import Discover from "../pages/discover";
import Mine from "../pages/mine";
import Friends from "../pages/friends";
import Recommend from "../pages/discover/content-pages/Recommend";
import Artist from "../pages/discover/content-pages/Artist";
import Songs from "../pages/discover/content-pages/Songs";
import Radio from "../pages/discover/content-pages/Radio";
import Albums from "../pages/discover/content-pages/Albums";
import Ranking from "../pages/discover/content-pages/Ranking";

const routes = [
    {
        path: "/",
        exact: true,
        component: Discover,
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: "/discover",
        component: Discover,
        routes: [
            // discover的默认路由
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="discover/recommend" />
                )
            },
            // path字段的值与discoverMenu的link字段一一对应
            {
                path: "/discover/recommend",
                component: Recommend
            },
            {
                path: "/discover/ranking",
                component: Ranking
            },
            {
                path: "/discover/artist",
                component: Artist
            },
            {
                path: "/discover/songs",
                component: Songs
            },
            {
                path: "/discover/radio",
                component: Radio
            },
            {
                path: "/discover/albums",
                component: Albums
            },
        ]
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